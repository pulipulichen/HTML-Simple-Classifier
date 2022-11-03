export default function (DataTable) {
  DataTable.methods.loadData = async function (data) {
    //console.log(data)
    
    this.config.isDataProcessing = true
    this.dataLock = true
    await this.utils.AsyncUtils.sleep(0)
    // console.log('讀取中')
    this.hotInstance.loadData(data)
    // console.log('讀取完了')
    this.localConfig.data = data
    // console.log('讀取完了2')
    await this.utils.AsyncUtils.sleep(0)
    this.config.isDataProcessing = false
    this.dataLock = false
    // console.log('讀取重設')
    this.recalculateAllColumnsWidth()
  }
  
  DataTable.methods.changeClassField = async function () {
    let headers = this.localConfig.headers
    let headerIndex = headers.indexOf(this.localConfig.classFieldName)
    
    let data = []
    
    this.config.isDataProcessing = true
    this.dataLock = true
    await this.utils.AsyncUtils.sleep(0)

    let beforeHeader = headers[0]
    headers[0] = this.localConfig.classFieldName
    headers[headerIndex] = beforeHeader
    
    this.localConfig.headers = this.localConfig.headers.splice(0,0).concat(headers)
    
    // ----------------------------
    
    //console.log(this.localConfig.data.length)
    for (let len = this.localConfig.data.length, i = len; i > 0; i--) {
      let rowIndex = (len - i)
      let row = this.localConfig.data[rowIndex]
      
      let beforeClassValue = row[0]
      let afterClassValue = row[headerIndex]
      
      row[0] = afterClassValue
      row[headerIndex] = beforeClassValue
      
      data.push(row)
      
      if (i % 10 === 5) {
        await this.utils.AsyncUtils.sleep(0)
      }
    }
    
    //data.push([null])
    //console.log(data)
    
    this.localConfig.data = this.localConfig.data.splice(0,0).concat(data)
    
    await this.utils.AsyncUtils.sleep(0)
    this.config.isDataProcessing = false
    this.dataLock = false
  }
}