import KNN from 'ml-knn'

export default function (KNearestNeighbors) {
  KNearestNeighbors.methods.startPredict = async function () {
    return await this.start()
  }
    
  KNearestNeighbors.methods.start = async function () {
    //this.localConfig.modelJSON = null
    this.config.loadingProgress = 0
    console.log('start', 1)
    let data = await this.$parent.getVectorData()
    console.log(data)
    //return false
    this.config.loadingProgress = 0.25
    
    console.log('start', 2)
    //console.log(data.trainSet[0])
    
    console.log('start', 3)
    //if (!this.model) {
      this.model = this.buildModel(data)
    //}

    //console.log(this.model)
    console.log('start', 5)

    this.config.loadingProgress = 0.5
    
    console.log('start', 9)
    //console.log(data.testSet)
    let predictResults = await this.getPredictResults(this.model, data)
    console.log(predictResults)
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
  
  KNearestNeighbors.methods.buildModel = function (data){
    let dataset = data.testSet
    let predictions = data.trainSetClasses
    return new KNN(dataset, predictions)
  }
  
  KNearestNeighbors.methods.getPredictResults = async function (model, data) {
    let testSet = data.testSet
    let resultVector = model.predict(testSet);
    let trainSetClassesDict = data.trainSetClassesDict
    console.log(trainSetClassesDict)
    return resultVector.map(index => {
      return trainSetClassesDict[index]
    })
  }
  
  KNearestNeighbors.methods.evaluationResults = async function (data, predictResults) {
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