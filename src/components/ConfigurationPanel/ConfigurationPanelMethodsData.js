export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.getJSONData = async function () {
    let headers = this.localConfig.headers
    let trainSet = []
    let testSet = []
    let testSetRowIndexes = []
    let trainSetClasses = []
    
    for (let len = this.localConfig.data.length, i = len; i > 0; i--) {
      let rowIndex = (len - i)
      let row = this.localConfig.data[rowIndex]
      
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
      if (this.isModelBuilded === false || this.utils.DataUtils.isMissingData(row[1])) {

        headers.forEach((header, i) => {
          if (header === 'predict') {
            return false
          }
          
          let value = row[i]
          
          if (typeof value === 'string' && !isNaN(value)) {
            value = Number(value)
          }

          if (i === 0 && this.utils.DataUtils.isMissingData(value)) {
            isTrainingSet = false
            trainJSON[header] = value
            return false
          }
          else if (i > 1 && 
                  (this.utils.DataUtils.isMissingData(value))) {
            // 缺失值
            return false
          }

          trainJSON[header] = value
          if (header !== this.localConfig.classFieldName) {
            testJSON[header] = value
          }

        })
      }
      else {
        // 如果已經有預測資料
        isTrainingSet = this.utils.DataUtils.isMissingData(row[0])
        trainJSON['predict'] = row[1]
        testJSON['predict'] = row[1]
      }
      
      if (this.hasModelEvaluated === false && isTrainingSet) {
        trainSetClasses.push(row[0])
      }
      
      if (isTrainingSet) {
        trainSet.push(trainJSON)
        testSet.push(testJSON)
      }
      else {
        testSet.push(testJSON)
        testSetRowIndexes.push(rowIndex)
      }
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return {
      trainSet,
      testSet,
      testSetRowIndexes,
      trainSetClasses
    }
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
  
}