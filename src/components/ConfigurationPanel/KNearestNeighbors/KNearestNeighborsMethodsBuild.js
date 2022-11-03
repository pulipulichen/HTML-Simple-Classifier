import KNN from 'ml-knn'

export default function (KNearestNeighbors) {
  KNearestNeighbors.methods.startPredict = async function () {
    return await this.start()
  }
    
  KNearestNeighbors.methods.start = async function () {
    //this.localConfig.modelJSON = null
    this.config.loadingProgress = 0
    // console.log('start', 1)
    
    this.localConfig.modelJSON = null
    this.localConfig.modelEvaluations = []
    let data = await this.$parent.getVectorData()
    
    this.dataToShow = data
    
    if (data.trainSetClasses.length === 0) {
      console.error('No trainSetClasses')
      //throw Error('No trainSetClasses')
    }
    
    // console.log(data)
    //return false
    this.config.loadingProgress = 0.25
    
    // console.log('start', 2)
    //console.log(data.trainSet[0])
    
    // console.log('start', 3)
    if (data.trainSetClasses.length > 0) {
      if (!this.localConfig.modelJSON) {
        this.model = this.buildModel(data)
        this.localConfig.modelJSON = this.model
      }
      else {
        this.model = KNN.load(this.localConfig.modelJSON)
      }

      //console.log(this.model.toJSON())

      //console.log(this.model)
      // console.log('start', 5)

      this.config.loadingProgress = 0.5

      // console.log('start', 9)
      //console.log(data.testSet)
      let predictVector = await this.getPredictResultsVector(this.model, data)
      let predictResults = await this.getPredictResultsValue(data, predictVector)
      // console.log(predictVector)
      if (predictResults[0] === 'undefined') {
        this.config.loadingProgress = 1
        console.error('predict is undefined')
        return false
      }

      // console.log('start', 10)
      this.config.loadingProgress = 0.75

      if (this.$parent.hasModelEvaluated === false) {
        let testSetRowIndexes = data.testSetRowIndexes
        this.unknownsPrediction = []
        let predictVectorToEvalute = predictVector.filter((value, i) => {
          let notMatch = (testSetRowIndexes.indexOf(i) === -1)

          if (notMatch === false) {
            this.unknownsPrediction.push(value)
          }

          return notMatch
        })
        this.evaluationResults(data.trainSetClasses, predictVectorToEvalute)
      }

      //console.log(predictResults)
      this.$parent.setPredictResults(predictResults)

      this.config.loadingProgress = 0.9

    } // if (data.trainSetClasses.length > 0) {
    else {
      this.model = 'unsupervised'
    }
    
    if (this.$parent.isModelWindowOpened) {
      this.showModel()
    }
    
    this.config.loadingProgress = 1
    this.config.modelBuildedTime = (new Date()).getTime()
  }
  
  KNearestNeighbors.methods.buildModel = function (data){
    let testSetRowIndexes = data.testSetRowIndexes
    let dataset = data.testSet.filter((row, i) => {
      return (testSetRowIndexes.indexOf(i) === -1)
    })
    
    // console.log(dataset)
    let predictions = data.trainSetClasses
    
    if (dataset.length === 0) {
      dataset = data.testSet
      predictions = dataset.map(item => 'unknown')
    }
    
    if (dataset.length !== predictions.length) {
      console.error('length is not match')
    }
    
    return new KNN(dataset, predictions, {
      k: this.localConfig.KNearestNeighborsOptionsK
    })
  }
  
  KNearestNeighbors.methods.getPredictResultsVector = async function (model, data) {
    let testSet = data.testSet
    let resultVector = model.predict(testSet);
    return resultVector
  }
  
  KNearestNeighbors.methods.getPredictResultsValue = async function (data, resultVector) {
    let trainSetClassesDict = data.trainSetClassesDict
    //console.log(trainSetClassesDict)
    return resultVector.map(index => {
      return trainSetClassesDict[index]
    })
  }
  
  KNearestNeighbors.methods.evaluationResults = async function (train, predict) {
    
    this.$parent.resetModelEvaluation()
    // console.log(train)
    // console.log(predict)
    //console.log(data.trainSetClasses.length, getTrainSetPredicts.length, data.testSetRowIndexes.length)

    let accuracy = await this.$parent.calcAccuracy(train, predict)
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