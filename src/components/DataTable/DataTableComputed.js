export default function (DataTable) {
  //    hotSettings () {
//      return {
//        data: this.localConfig.data,
//        colHeaders: true,
//        rowHeaders: true
//      }
//    },
  DataTable.computed.hotInstance = function () {
    if (this.$refs.hotTableComponent) {
      return this.$refs.hotTableComponent.hotInstance
    }
  }
  DataTable.computed.hotColumns = function () {
    let columns = this.localConfig.headers.map((header, i) => {
      let readOnly = false
      if (header === 'predict') {
        readOnly = true
      }
      return {
      }
    })
    return columns
  }
  DataTable.computed.hotAllowInsertColumn = function () {
    let columns = this.localConfig.headers.map((header, i) => {
      if (i < 2) {
        return false
      } else {
        return true
      }
    })
    return columns
  }
}