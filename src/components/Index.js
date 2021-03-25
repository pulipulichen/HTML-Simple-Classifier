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
    }
  },
  components: {
    LoadingLayer,
  },
  computed: {
  },
  watch: {
    'config.inited' () {
      if (this.config.inited === false) {
        return false
      }
      
    },
  },
  methods: {
  }
}

export default Index