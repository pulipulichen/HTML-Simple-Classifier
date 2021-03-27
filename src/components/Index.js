/* global Node */
//import $ from 'jquery'
//import FloatActionButton from './FloatActionButton/FloatActionButton.vue'

//import FormatPanel from './FormatPanel/FormatPanel.vue'
import LoadingLayer from './LoadingLayer/LoadingLayer.vue'

let Index = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.config.localConfig
    return {
      postMessageAPI: null
    }
  },
  components: {
    DataTable: () => import(/* webpackChunkName: "DataTable" */ './DataTable/DataTable.vue'),
    NavigationBar: () => import(/* webpackChunkName: "NavigationBar" */ './NavigationBar/NavigationBar.vue'),
    ConfigurationPanel: () => import(/* webpackChunkName: "ConfigurationPanel" */ './ConfigurationPanel/ConfigurationPanel.vue'),
    LoadingLayer,
  },
  computed: {
  },
  watch: {
    'config.inited' () {
      if (this.config.inited === false) {
        return false
      }
      this.initPostMessageAPI()
    },
  },
  methods: {
  }
}

import IndexPostMessage from './IndexPostMessage.js'
IndexPostMessage(Index)

export default Index