import dt from './vendors/decision-tree/decision-tree.webpack.js'

export default function (DecisionTree) {
  DecisionTree.methods.startPredict = async function () {
    return await this.start()
  }
    
  DecisionTree.methods.start = async function () {
    //this.localConfig.modelJSON = null
    this.config.loadingProgress = 0
    console.log('start', 1)
    let data = await this.$parent.getJSONData()
    console.log(data)
    this.config.loadingProgress = 0.25
    
    console.log('start', 2)
    //console.log(data.trainSet[0])
    
    
    if (this.isModelBuilded === false) {
      console.log('start', 3)
      this.model = this.buildModel(data.trainSet)
      
      console.log('start', 4)
      await this.model.waitReady()
      //console.log(model.root)
      console.log('start', 5)
      this.localConfig.modelJSON = JSON.stringify(this.model.root)
      //console.log(JSON.parse(this.localConfig.modelJSON))
    }
    else {
      console.log('start', 6)
      this.model = this.buildModel([])
      console.log('start', 7)
      await this.model.waitReady()
      this.model.category = this.localConfig.classFieldName
      this.model.root = JSON.parse(this.localConfig.modelJSON)
      //console.log(model.root, this.localConfig.modelJSON)
      console.log('start', 8)
    }
    //console.error('需要只Predict test case')
    
    this.config.loadingProgress = 0.5
    
    console.log('start', 9)
    //console.log(data.testSet)
    let predictResults = await this.getPredictResults(this.model, data.testSet)
    //console.log(predictResults)
    if (predictResults[0] === 'undefined') {
      this.config.loadingProgress = 1
      console.error('predict is undefined')
      return false
    }
    
    console.log('start', 10)
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