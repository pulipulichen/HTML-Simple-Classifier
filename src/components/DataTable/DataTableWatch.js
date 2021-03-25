export default function (DataTable) {
  DataTable.watch['localConfig.locale'] = function () {
    this.$i18n.locale = this.localConfig.locale;
  }
  DataTable.watch['localConfig.data'] = function () {
    if (this.dataLock === true) {
      return false
    }
    this.dataLock = true
    this.hotInstance.loadData(this.localConfig.data);
    this.dataLock = false
  }
//  
//  DataTable.watch.hotContextMenu = async function () {
//    this.utils.AsyncUtils.sleep(0)
//    this.hotInstance.getPlugin('contextMenu').open(this.hotContextMenuEvent)
//    this.utils.AsyncUtils.sleep(500)
//    this.hotInstance.getPlugin('contextMenu').open(this.hotContextMenuEvent)
//  }
}