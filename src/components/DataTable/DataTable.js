import { HotTable } from '@handsontable/vue';
//import Handsontable from 'handsontable';
import './vendors/handsontable/handsontable.webpack.js'

let DataTable = {
  props: ['config', 'localConfig', 'utils'],
  //data () { },  // DataTableData.js
  components: {
    HotTable
  },
  watch: { }, // DataTableWatch.js
  computed: {}, // DataTableComputed.js
  mounted() {
    this.initTable()
  },
  methods: {} // DataTableMethods.js
}

import DataTableData from './DataTableData.js'
DataTableData(DataTable)

import DataTableMethods from './DataTableMethods.js'
DataTableMethods(DataTable)

import DataTableMethodsClear from './DataTableMethodsClear.js'
DataTableMethodsClear(DataTable)

import DataTableMethodsEvents from './DataTableMethodsEvents.js'
DataTableMethodsEvents(DataTable)

import DataTableComputed from './DataTableComputed.js'
DataTableComputed(DataTable)

import DataTableWatch from './DataTableWatch.js'
DataTableWatch(DataTable)

export default DataTable