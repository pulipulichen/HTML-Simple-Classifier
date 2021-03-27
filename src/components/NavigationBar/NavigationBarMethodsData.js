
export default function (NavigationBar) {
  NavigationBar.methods.initData = async function () {
    if (this.localConfig.data.length > 2
            && Array.isArray(this.localConfig.data[0])
            && this.localConfig.data[0].length > 3) {
      return false
    }
    else if (this.config.openFromAPI) {
      return false
    }
    
    //console.log('沒有資料，讀取demo')
    this.loadDemo()
  }
  
  NavigationBar.methods.loadDemo = async function (file) {
    this.config.isDataProcessing = true
    
    if (!file || typeof file !== 'string') {
      file = this.config.demoDataList[0]
    }
    
    this.localConfig.classFieldName = null
    
    this.localConfig.filename = file
    
    this.config.loadingProgress = 0
    let rawData = await this.loadDemoData(file)
    await this.processRawData(rawData)
    await this.$parent.startPredict()
  }
  
  NavigationBar.methods.processRawData = async function (rawData) {
    
    this.config.loadingProgress = 0.5
    let detectResult = this.detectClassField(rawData)
    //console.log(detectResult)
    let orderedData = await this.orderColumns(rawData, detectResult.classFieldIndex)
    this.config.loadingProgress = 0.75
    
    this.localConfig.classFieldName = detectResult.classFieldName    
    
    this.localConfig.headers = orderedData[0]
    
    let data = orderedData.splice(1)
    //console.log(data)
    //this.localConfig.data = this.localConfig.data.splice(0, 0).concat(data)
    while (!this.$parent.$refs.DataTable) {
      await this.utils.AsyncUtils.sleep(100)
    }
    
    await this.$parent.$refs.DataTable.loadData(data)
    
    //let data = orderedData.splice(1)
    //this.localConfig.data = this.localConfig.data.splice(0, 0).concat(data)
    
    this.config.loadingProgress = 1
    //console.log(this.localConfig.data.length)
    
    this.config.isDataProcessing = false
  }
  
  NavigationBar.methods.loadDemoData = async function (file) {
    let path = "./assets/data/" + file
    //console.log(path)
    if (path.endsWith('.csv')) {
      return await this.loadURLCSV(path)
    }
    else {
      return await this.loadURLODS(path)
    }
  }
  
  NavigationBar.methods.detectClassField = function (data) {
    let headers = data[0]
    
    if (headers[1] === 'predict') {
      // 已經被調整好了，不用再整理
      return {
        classFieldName: headers[0],
        classFieldIndex: 0
      }
    }
    
    // ---------------------------
    // 偵測
    
    let classFieldNameCandidates = ['class', 'label', 'target', 'score', 'dv']
    let classFieldIndex = -1
    let classFieldName
    
    for (let len = classFieldNameCandidates.length, i = len; i > 0; i--) {
      let name = classFieldNameCandidates[(len - i)]
      let index = headers.indexOf(name)
      if (index > -1) {
        classFieldIndex = index
        classFieldName = name
        break
      }
    }
    //console.log(classFieldName, classFieldIndex)
    
    if (classFieldIndex === -1) {
      classFieldIndex = headers.length - 1
      classFieldName = headers[classFieldIndex]
    }
    
    return {
      classFieldName,
      classFieldIndex
    }
  }
  
  NavigationBar.methods.orderColumns = async function (data, classFieldIndex) {
    // ---------------------------
    // 開始大遷移
    for (let rowLen = data.length, r = rowLen; r > 0; r--) {
      let row = data[(rowLen - r)]
      
      let classField = row.splice(classFieldIndex ,1)
      // putting the 'role' string back in the array:
      
      if (r === rowLen) {
        row.unshift('predict')
        row.unshift(classField[0])
      }
      else {
        row.unshift(null)
        row.unshift(classField[0])
      }
      
      if (r % 10 === 1) {
        this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return data
  }
  
  
  NavigationBar.methods.dataToArrayJSON = async function () {
    let headers = this.localConfig.headers
    let rows = this.localConfig.data
    
    let data = []
    
    for (let len = rows.length, i = len; i > 0; i--) {
      let row = rows[(len - i)]
      
      let json = {}
      headers.forEach((header, i) => {
        json[header] = row[i]
      })
      
      data.push(json)
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    return data
  }
  
  NavigationBar.methods.getFilenameWithTime = function (ext) {
    return this.filenameWithoutExt + '_' + (new Date()).mmddhhmm() + '.' + ext
  }
}