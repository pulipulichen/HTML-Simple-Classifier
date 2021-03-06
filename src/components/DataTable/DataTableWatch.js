export default function (DataTable) {
  DataTable.watch['localConfig.locale'] = function () {
    this.$i18n.locale = this.localConfig.locale;
  }
  
  DataTable.watch['localConfig.classFieldName'] = function () {
    this.clearPredictColumn()
    
    this.changeClassField()
  }
  
  DataTable.watch['localConfig.data'] = async function () {
    console.log('呼叫？')
    if (this.dataLock === true) {
      return false
    }
    
    this.dataLock = true
    //this.hotAutoColumnSize = false
    await this.utils.AsyncUtils.sleep(0)
    //console.log(this.dataLock, this.localConfig.data.length)
    //console.log('載入資料')
    //console.log(this.localConfig.data)
    
    this.hotInstance.loadData(this.localConfig.data.concat([]))
    
    await this.utils.AsyncUtils.sleep(0)
    this.dataLock = false
    //this.hotAutoColumnSize = true
    
    this.recalculateAllColumnsWidth()
    //console.log(plugin)
  }
//  
//  DataTable.watch.hotContextMenu = async function () {
//    this.utils.AsyncUtils.sleep(0)
//    this.hotInstance.getPlugin('contextMenu').open(this.hotContextMenuEvent)
//    this.utils.AsyncUtils.sleep(500)
//    this.hotInstance.getPlugin('contextMenu').open(this.hotContextMenuEvent)
//  }

  DataTable.watch['localConfig.displayConfigurationPanel'] = function () {
    this.hotInstance.render()
  }
}