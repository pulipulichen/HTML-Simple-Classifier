import dt from './vendors/decision-tree/decision-tree.webpack.js'

export default function (DecisionTree) {
  DecisionTree.methods.start = async function () {
    //this.localConfig.modelJSON = null
    this.config.loadingProgress = 0
    
    let data = await this.$parent.getJSONData()
    //console.log(data.trainSet)
    this.config.loadingProgress = 0.25
    
    //console.log(data.trainSet[0])
    
    if (this.isModelBuilded === false) {
      this.model = this.buildModel(data.trainSet)
      await this.model.waitReady()
      //console.log(model.root)
      this.localConfig.modelJSON = JSON.stringify(this.model.root)
      //console.log(JSON.parse(this.localConfig.modelJSON))
    }
    else {
      this.model = this.buildModel([])
      await this.model.waitReady()
      this.model.category = this.localConfig.classFieldName
      this.model.root = JSON.parse(this.localConfig.modelJSON)
      //console.log(model.root, this.localConfig.modelJSON)
    }
    //console.error('需要只Predict test case')
    
    this.config.loadingProgress = 0.5
    
    //console.log(data.testSet)
    let predictResults = await this.getPredictResults(this.model, data.testSet)
    
    this.config.loadingProgress = 0.75
    
    if (this.$parent.hasModelEvaluated === false) {
      this.evaluationResults(data, predictResults)
    }
    
    //console.log(predictResults)
    this.$parent.setPredictResults(predictResults)
    
    this.config.loadingProgress = 0.9
    
    if (this.$parent.isModelWindowOpened) {
      this.showModel()
    }
    
    this.config.loadingProgress = 1
  }
  
  DecisionTree.methods.buildModel = function (trainSet) {
    // Configuration
    var config = {
      trainingSet: trainSet, 
      categoryAttr: this.localConfig.classFieldName, 
      //ignoredAttributes: ['person']
    };
    
    // Building Decision Tree
    return new dt.DecisionTree(config);
  }
  
  DecisionTree.methods.getPredictResults = async function (model, testSet) {
    let results = []
    //console.log(model.root)
    for (let len = testSet.length, i = len; i > 0; i--) {
      let testCase = testSet[(len - i)]
      
      let result
      if (this.utils.DataUtils.isMissingData(testCase['predict']) === false) {
        result = testCase['predict']
      }
      else {
        //console.log(testCase)
        //console.log(model.root)
        result = await model.predict(testCase)
        //console.log(result)
      }
        
      results.push(result)
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return results
  }
  
  DecisionTree.methods.evaluationResults = async function (data, predictResults) {
    let getTrainSetPredicts = await this.$parent.getTrainSetPredicts(predictResults, data.testSetRowIndexes)
    //console.log(data.trainSetClasses)
    //console.log(getTrainSetPredicts)

    this.$parent.resetModelEvaluation()

    //console.log(data.trainSetClasses.length, getTrainSetPredicts.length, data.testSetRowIndexes.length)

    let accuracy = await this.$parent.calcAccuracy(data.trainSetClasses, getTrainSetPredicts)
    //console.log(accuracy)
    let accuracyInfo = {
      name: 'accuracy',
      type: 'percent',
      value: accuracy
    }
    
    //console.log(accuracyInfo)
    this.localConfig.modelEvaluations.push(accuracyInfo)
  }
}