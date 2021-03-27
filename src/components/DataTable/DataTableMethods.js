export default function (DataTable) {
  DataTable.methods.loadData = async function (data) {
    //console.log(data)
    
    this.config.isDataProcessing = true
    this.dataLock = true
    await this.utils.AsyncUtils.sleep(0)
    
    
    this.hotInstance.loadData(data)
    this.localConfig.data = data
    
    await this.utils.AsyncUtils.sleep(0)
    this.config.isDataProcessing = false
    this.dataLock = false
  }
}