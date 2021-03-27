import EvaluationPanel from './EvaluationPanel/EvaluationPanel.vue'

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
    EvaluationPanel
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
    'localConfig.classFieldName' () {
      this.localConfig.modelJSON = null
    },
    'localConfig.modelJSON' () {
      this.resetModelEvaluation()
    }
  },
  computed: {}, // ConfigurationPanelComputed.js
  mounted() {
    
  },
  methods: {}
}

import ConfigurationPanelComputed from './ConfigurationPanelComputed.js'
ConfigurationPanelComputed(ConfigurationPanel)

import ConfigurationPanelMethodsData from './ConfigurationPanelMethodsData.js'
ConfigurationPanelMethodsData(ConfigurationPanel)

import ConfigurationPanelMethodsEvaluation from './ConfigurationPanelMethodsEvaluation.js'
ConfigurationPanelMethodsEvaluation(ConfigurationPanel)

export default ConfigurationPanel