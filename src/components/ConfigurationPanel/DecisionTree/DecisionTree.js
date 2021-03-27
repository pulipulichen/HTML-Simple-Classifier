let DecisionTree = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      model: null
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
    },
    modelCSSURL () {
      let currentURL = location.href
      return currentURL.slice(0, currentURL.lastIndexOf('/') + 1)
        + 'assets/classifiers/DecisionTree/style.css'
    }
  },
  mounted() {
//    setTimeout(() => {
//      this.start()
//    }, 1000)
  },
  methods: {}
}

import DecisionTreeMethodsBuild from './DecisionTreeMethodsBuild.js'
DecisionTreeMethodsBuild(DecisionTree)

import DecisionTreeMethodsShow from './DecisionTreeMethodsShow.js'
DecisionTreeMethodsShow(DecisionTree)

export default DecisionTree