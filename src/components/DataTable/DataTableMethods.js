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
        let cellProperties = {}
        
        if ((col === 0 || col === 1) 
                && (this.localConfig.data[row][0] === '?')) {
          cellProperties.className = 'test-dataset';
        }
        
        if (col === 1) {
          cellProperties.readOnly = true;
        }
        return cellProperties;
      }
    })
    
  }
  
  DataTable.methods.onHotAfterChange = function () {
    if (this.dataLock === true) {
      return false
    }
    let data = this.hotInstance.getData()
    this.dataLock = true
    this.localConfig.data = data
    this.dataLock = false
  }
  
  DataTable.methods.getSelectedRangeInfo = function () {
    let range = this.hotInstance.getSelectedRange()
    let from = range[0].from.col
    let to = range[0].from.to
    let colRange = [from, to]
    colRange.sort()
    return {
      leftColumn: colRange[0],
      isSelectedColumn: (range[0].from.row === -1),
      isSelectedRow: (range[0].from.col === -1),
    }
  }
  
  DataTable.methods.onHotBeforeContextMenuSetItems = function (event) {
    let selectedInfo = this.getSelectedRangeInfo()
    
    //this.hotContextMenuEvent = event
    if (selectedInfo.isSelectedRow) {
      this.hotContextMenu = this.hotContextMenuColumnsReadOnly
    }
    else if (selectedInfo.isSelectedColumn) {
      if (selectedInfo.leftColumn < 2) {
        this.hotContextMenu = this.hotContextMenuSelectedColumnReadOnly
      } else {
        this.hotContextMenu = this.hotContextMenuSelectedColumnDefault
      }
    }
    else {
      if (selectedInfo.leftColumn < 2) {
        this.hotContextMenu = this.hotContextMenuColumnsReadOnly
      } else {
        this.hotContextMenu = this.hotContextMenuDefault
      }
    }
  }
}