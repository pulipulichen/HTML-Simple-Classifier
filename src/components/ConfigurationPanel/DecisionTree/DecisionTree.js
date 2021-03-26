let DecisionTree = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    isModelBuilded () {
      return (this.localConfig.modelJSON !== null && this.localConfig.modelJSON !== '{}')
    }
  },
  mounted() {
    setTimeout(() => {
      this.start()
    }, 1000)
  },
  methods: {}
}

import DecisionTreeMethods from './DecisionTreeMethods.js'
DecisionTreeMethods(DecisionTree)

export default DecisionTree