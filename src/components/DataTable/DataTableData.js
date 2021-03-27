import HandsontablePluginRenameColHeader from './vendors/handsontable/handsontable.plugin.rename_col_header.js'
//import HandsontablePluginClearPredictColumn from './vendors/handsontable/handsontable.plugin.rename_clear_predict_column.js'

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
      'col_left', 'col_right', 'clear_column', 'remove_col',
      '---------',
      'undo', 'redo'
    ]
    
    let hotContextMenuSelectedColumnReadOnly = [
      'undo', 'redo'
    ]
    
    let HandsontablePluginClearPredictColumn = {
      key: 'clear_predict_column',
      name: function name() {
        return "Clear Predictions"
      },
      callback: (event, coords, th) => {
        this.clearPredictColumn()
      },
      disabled: function disabled() {
        return false
      },
      hidden: function hidden() {
        return false
      }
    }
    
    
    let HandsontablePluginClearPredictColumnTestCases = {
      key: 'clear_predict_column_test_cases',
      name: function name() {
        return "Clear Test Predictions"
      },
      callback: (event, coords, th) => {
        this.clearTestPredictColumn()
      },
      disabled: function disabled() {
        return false
      },
      hidden: function hidden() {
        return false
      }
    }
    
    let hotContextMenuSelectedColumnClearReadOnly = [
      HandsontablePluginClearPredictColumn,
      '---------',
      'undo', 'redo'
    ]
    
    let hotDropdownMenuDefault = [
      HandsontablePluginRenameColHeader,
      '---------',
      "col_left", "col_right", "remove_col", 
      '---------',
      'filter_by_condition', 'filter_operators', 'filter_by_condition2', 'filter_by_value', 'filter_action_bar'
    ]
    
    let hotPredictColumnDropdownMenu = [
      HandsontablePluginClearPredictColumn,
      HandsontablePluginClearPredictColumnTestCases,
      '---------',
      'filter_by_condition', 'filter_operators', 'filter_by_condition2', 'filter_by_value', 'filter_action_bar'
    ]
    
    return {
      dataLock: false,
      hotContextMenuEvent: null,
      hotContextMenu: hotContextMenuDefault,
      hotContextMenuDefault,
      hotContextMenuColumnsReadOnly,
      hotContextMenuSelectedColumnDefault,
      hotContextMenuSelectedColumnReadOnly,
      hotContextMenuSelectedColumnClearReadOnly,
      hotDropdownMenu: hotDropdownMenuDefault,
      hotDropdownMenuDefault,
      hotPredictColumnDropdownMenu,
      
      predictColumnLocker: true
    }
  }
}