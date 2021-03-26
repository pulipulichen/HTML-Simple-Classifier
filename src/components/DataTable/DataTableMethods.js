export default function (DataTable) {
  DataTable.methods.initTable = function () {
    //console.log(this.hotInstance)
    this.hotInstance.addHook('afterChange', () => {
      this.onHotAfterChange()
    })

    this.hotInstance.addHook('afterOnCellMouseUp', (event) => {
      this.onHotBeforeContextMenuSetItems(event)
    })
    
    this.hotInstance.updateSettings({
      cells: (row, col) => {
        return this.onHotCellUpdateSettings(row, col)
      }
    })
  }
}