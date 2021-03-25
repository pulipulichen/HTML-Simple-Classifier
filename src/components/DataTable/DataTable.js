import { HotTable, HotColumn } from '@handsontable/vue';
import Handsontable from 'handsontable';
import './vendors/handsontable/handsontable.webpack.js'

let DataTable = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      hotData: Handsontable.helper.createSpreadsheetData(10, 10),
      secondColumnSettings: {
        title: 'Second column header'
      } 
    }
  },
  components: {
    HotTable,
    HotColumn
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    
  },
  mounted() {
    
  },
  methods: {
    
  }
}

export default DataTable