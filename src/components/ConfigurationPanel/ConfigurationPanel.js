import EvaluationPanel from './EvaluationPanel/EvaluationPanel.vue'

let ConfigurationPanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      //classifier: 'DecisionTree',
      classifier: 'KNearestNeighbors',
      classifierList: [
        'DecisionTree',
        'KNearestNeighbors',
      ],
      modelWindow: null
    }
  },
  components: {
    DecisionTree: () => import(/* webpackChunkName: "classifiers/DecisionTree" */ './DecisionTree/DecisionTree.vue'),
    KNearestNeighbors: () => import(/* webpackChunkName: "classifiers/KNearestNeighbors" */ './KNearestNeighbors/KNearestNeighbors.vue'),
    EvaluationPanel
  },
  watch: {},  // ConfigurationPanelWatch
  computed: {}, // ConfigurationPanelComputed.js
  mounted() {
    
  },
  methods: {}
}

import ConfigurationPanelComputed from './ConfigurationPanelComputed.js'
ConfigurationPanelComputed(ConfigurationPanel)

import ConfigurationPanelWatch from './ConfigurationPanelWatch.js'
ConfigurationPanelWatch(ConfigurationPanel)

import ConfigurationPanelMethods from './ConfigurationPanelMethods.js'
ConfigurationPanelMethods(ConfigurationPanel)

import ConfigurationPanelMethodsData from './ConfigurationPanelMethodsData.js'
ConfigurationPanelMethodsData(ConfigurationPanel)

import ConfigurationPanelMethodsEvaluation from './ConfigurationPanelMethodsEvaluation.js'
ConfigurationPanelMethodsEvaluation(ConfigurationPanel)

export default ConfigurationPanel