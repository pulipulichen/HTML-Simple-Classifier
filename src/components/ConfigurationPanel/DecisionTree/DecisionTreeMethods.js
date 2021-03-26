import dt from './vendors/decision-tree/decision-tree.webpack.js'

export default function (DecisionTree) {
  DecisionTree.methods.start = async function () {
    let data = await this.$parent.getJSONData()
    this.model = this.buildModel(data.trainSet)
    
    let predictResults = await this.getPredictResults(this.model, data.testSet)
    //console.log(predictResults)
    this.$parent.setPredictResults(predictResults)
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
    for (let len = testSet.length, i = len; i > 0; i--) {
      let testCase = testSet[(len - i)]
      //console.log(testCase)
      let result = await model.predict(testCase)
      results.push(result)
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return results
  }
}