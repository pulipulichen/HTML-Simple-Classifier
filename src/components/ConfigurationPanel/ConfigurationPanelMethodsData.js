export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.getJSONData = async function () {
    let headers = this.localConfig.headers
    let trainSet = []
    let testSet = []
    let testSetRowIndexes = []
    let trainSetClasses = []
    let trainSetRowIndexes = []
    //console.log(this.localConfig.data)
    for (let len = this.localConfig.data.length, i = len; i > 0; i--) {
      let rowIndex = (len - i)
      let row = this.localConfig.data[rowIndex]
      if (!row || !Array.isArray(row)) {
        continue
      }
      
      let notMissingRow = row.filter(cell => {
        return !this.utils.DataUtils.isMissingData(cell)
      })
      if (notMissingRow.length === 0) {
        continue
      }
      
      let trainJSON = {}
      let testJSON = {}
      
      let isTrainingSet = true
      
      // 先確認是否有已經預測的資料，如果已經有了，那就略過預測
      //console.log(this.isModelBuilded)
      if (this.isModelBuilded === false || this.utils.DataUtils.isMissingData(row[1])) {

        for (let j = 0, headersLen = headers.length; j < headersLen; j++) {
          let header = headers[j]
          //console.log(header)
          if (header === 'predict') {
            continue
          }
          
          let value = row[j]
          //console.log(i, header, value)
          
          if (typeof value === 'string' && !isNaN(value)) {
            value = Number(value)
          }

          if (j === 0 && this.utils.DataUtils.isMissingData(value)) {
            isTrainingSet = false
            trainJSON[header] = value
            continue
          }
          else if (j > 1 && 
                  (this.utils.DataUtils.isMissingData(value))) {
            // 缺失值
            continue
          }

          trainJSON[header] = value
          if (header !== this.localConfig.classFieldName) {
            testJSON[header] = value
          }
          
          if (j % 5000 === 500) {
            console.log('getJSONData sleep j', j, headersLen, i, len)
            await this.utils.AsyncUtils.sleep(0)
          }
        }
      }
      else {
        // 如果已經有預測資料
        isTrainingSet = this.utils.DataUtils.isMissingData(row[0])
        trainJSON['predict'] = row[1]
        testJSON['predict'] = row[1]
      }
      
      // console.log(this.hasModelEvaluated)
      if (this.hasModelEvaluated === false && isTrainingSet) {
        trainSetClasses.push(row[0])
      }
      
      if (isTrainingSet) {
        trainSet.push(trainJSON)
        // testSet.push(testJSON)
        trainSetRowIndexes.push(rowIndex)
      }
      else {
        testSet.push(testJSON)
        testSetRowIndexes.push(rowIndex)
      }
      
      if (i % 1000 === 5) {
        // console.log('getJSONData sleep i', i)
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    // console.log(trainSet)
    console.log({
      trainSet,
      testSet,
      testSetRowIndexes,
      trainSetClasses,
      trainSetRowIndexes,
    })
    
    return {
      trainSet,
      testSet,
      testSetRowIndexes,
      trainSetClasses,
      trainSetRowIndexes,
    }
  }
  
  ConfigurationPanel.methods.getVectorData = async function () {
    let json = await this.getJSONData()
    
    // ---------------------------------------------------
    
    let testSet = json.testSet
    let testVector = []
    
    let fieldKeyToIndex = null
    let fieldValueToIndex = {}
    for (let i = 0; i < testSet.length; i++) {
      let set = testSet[i]
      
      if (!fieldKeyToIndex) {
        fieldKeyToIndex = Object.keys(set)
      }
      
      let vector = []
      fieldKeyToIndex.forEach((key) => {
        let value = set[key]
        if (typeof(value) === 'number') {
          vector.push(value)
          return true
        }
        
        if (!fieldValueToIndex[key]) {
          fieldValueToIndex[key] = []
        }
        if (fieldValueToIndex[key].indexOf(value) === -1) {
          fieldValueToIndex[key].push(value)
        }
        vector.push(fieldValueToIndex[key].indexOf(value))
      })
      
      testVector.push(vector)
      
      if (i % 1000 === 5) {
        // console.log('getVectorData sleep i', i)
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    //console.log(testVector)
    json.testSet = testVector
    json.testSetFieldDict = fieldKeyToIndex
    json.testSetFieldValueDict = fieldValueToIndex
    
    // ---------------------------------------------------
    
    //let trainSetClasses = json.trainSetClasses
    let fieldTrainValueToIndex = []
    //console.log(json.trainSetClasses)
    if (json.trainSetClasses.length === 0) {
      console.error('No trainSetClasses')
      //throw Error('No trainSetClasses')
    }
    
    json.trainSetClasses = json.trainSetClasses.map(value => {
      //console.log(value)
      if (fieldTrainValueToIndex.indexOf(value) === -1) {
        fieldTrainValueToIndex.push(value)
      }
      return fieldTrainValueToIndex.indexOf(value)
    })
    json.trainSetClassesDict = fieldTrainValueToIndex
    //console.log(json.trainSetClassesDict)
    
    // ---------------------------------------------------
    
    return json
  }
  
  ConfigurationPanel.methods.setPredictResults = async function (predictResults) {
    let data = this.localConfig.data
    for (let len = data.length, i = len; i > 0; i--) {
      let index = (len - i)
      //let row = data[index]
      data[index][1] = predictResults[index]
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    this.localConfig.data = this.localConfig.data.splice(0,0).concat(data)
    //console.log(data)
  }
  
  ConfigurationPanel.methods.getTrainSetPredicts = async function (predictResults, testSetRowIndexes) {
    let predicts = []
    for (let len = predictResults.length, i = len; i > 0; i--) {
      let index = (len - i)
      if (testSetRowIndexes.indexOf(index) > -1) {
        continue
      }
      
      //let row = data[index]
      predicts.push(predictResults[index])
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    return predicts
  }

  ConfigurationPanel.methods.getTrainSetPredictsResult = async function () {
    let json = await this.getJSONData()
    return json.testSet.map(row => row.predict)
  }
  
}