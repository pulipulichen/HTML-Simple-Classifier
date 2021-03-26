let ConfigurationPanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      classifier: 'DecisionTree',
      classifierList: ['DecisionTree']
    }
  },
  components: {
    DecisionTree: () => import(/* webpackChunkName: "classifiers/DecisionTree" */ './DecisionTree/DecisionTree.vue'),
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.classFieldName' () {
      this.localConfig.modelJSON = null
    }
  },
  computed: {
    headers () {
      return this.localConfig.headers.filter(header => header !== 'predict')
    },
    isModelBuilded () {
      return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
    }
  },
  mounted() {
    
  },
  methods: {}
}

import ConfigurationPanelMethodsData from './ConfigurationPanelMethodsData.js'
ConfigurationPanelMethodsData(ConfigurationPanel)

export default ConfigurationPanel