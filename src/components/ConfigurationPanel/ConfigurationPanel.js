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
  computed: {
    headers () {
      return this.localConfig.headers.filter(header => header !== 'predict')
    },
    isModelBuilded () {
      return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
    },
    hasModelEvaluated () {
      return (this.localConfig.modelEvaluations.length > 0)
    }
  },
  mounted() {
    
  },
  methods: {}
}

import ConfigurationPanelMethodsData from './ConfigurationPanelMethodsData.js'
ConfigurationPanelMethodsData(ConfigurationPanel)

import ConfigurationPanelMethodsEvaluation from './ConfigurationPanelMethodsEvaluation.js'
ConfigurationPanelMethodsEvaluation(ConfigurationPanel)

export default ConfigurationPanel