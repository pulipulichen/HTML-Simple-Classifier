import HandsontablePluginRenameColHeader from './vendors/handsontable/handsontable.plugin.rename_col_header.js'

export default function (DataTable) {
  DataTable.data = function () {
    this.$i18n.locale = this.localConfig.locale
    
    let hotContextMenuDefault = [
      'row_above', 'row_below', 'remove_row',
      '---------',
      'col_left', 'col_right', 'remove_col',
      '---------',
      'undo', 'redo'
    ]
    
    let hotContextMenuColumnsReadOnly = [
      'row_above', 'row_below', 'remove_row',
      '---------',
      'undo', 'redo'
    ]
    
    let hotContextMenuSelectedColumnDefault = [
      'col_left', 'col_right', 'remove_col',
      '---------',
      'undo', 'redo'
    ]
    
    let hotContextMenuSelectedColumnReadOnly = [
      'undo', 'redo'
    ]
    
    return {
      dataLock: false,
      hotContextMenuEvent: null,
      hotContextMenu: hotContextMenuDefault,
      hotContextMenuDefault,
      hotContextMenuColumnsReadOnly,
      hotContextMenuSelectedColumnDefault,
      hotContextMenuSelectedColumnReadOnly,
      hotDropdownMenu: ["col_left", "col_right", "remove_col", HandsontablePluginRenameColHeader, 'filter_by_condition', 'filter_operators', 'filter_by_condition2', 'filter_by_value', 'filter_action_bar'],
      
    }
  }
}