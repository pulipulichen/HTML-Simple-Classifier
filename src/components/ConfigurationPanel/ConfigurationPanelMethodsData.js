export default function (ConfigurationPanel) {
  ConfigurationPanel.methods.getJSONData = async function () {
    let headers = this.localConfig.headers
    let trainSet = []
    let testSet = []
    
    for (let len = this.localConfig.data.length - 1, i = len; i > 0; i--) {
      let row = this.localConfig.data[(len - i)]
      if (row.filter(cell => cell !== null).length === 0
              || row.filter(cell => cell !== undefined).length === 0) {
        continue
      }
      
      let trainJSON = {}
      let testJSON = {}
      
      let isTrainingSet = true
      
      headers.forEach((header, i) => {
        if (header === 'predict') {
          return false
        }
        
        if (i === 0 && row[i] === '?') {
          isTrainingSet = false
          trainJSON[header] = row[i]
          return false
        }
        else if (i > 1 && 
                (row[i] === '?' || row[i] === null || row[i] === '')) {
          // 缺失值
          return false
        }
        
        trainJSON[header] = row[i]
        if (header !== this.localConfig.classFieldName) {
          testJSON[header] = row[i]
        }
        
      })
      
      if (isTrainingSet) {
        trainSet.push(trainJSON)
        testSet.push(testJSON)
      }
      else {
        testSet.push(testJSON)
      }
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return {
      trainSet,
      testSet
    }
  }
  
  ConfigurationPanel.methods.setPredictResults = async function (predictResults) {
    let data = this.localConfig.data
    for (let len = data.length - 1, i = len; i > 0; i--) {
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
}