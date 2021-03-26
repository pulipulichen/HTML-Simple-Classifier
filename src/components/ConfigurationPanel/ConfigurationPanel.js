let ConfigurationPanel = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  components: {
    DecisionTree: () => import(/* webpackChunkName: "classifiers/DecisionTree" */ './DecisionTree/DecisionTree.vue'),
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    headers () {
      return this.localConfig.headers.filter(header => header !== 'predict')
    }
  },
  mounted() {
    
  },
  methods: {}
}

import ConfigurationPanelMethodsData from './ConfigurationPanelMethodsData.js'
ConfigurationPanelMethodsData(ConfigurationPanel)

export default ConfigurationPanel