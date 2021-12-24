let KNearestNeighbors = {
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
      //console.log(this.localConfig)
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

    //this.testKNN()
  },
  methods: {}
}

import KNearestNeighborsMethodsBuild from './KNearestNeighborsMethodsBuild.js'
KNearestNeighborsMethodsBuild(KNearestNeighbors)

import KNearestNeighborsMethodsShow from './KNearestNeighborsMethodsShow.js'
KNearestNeighborsMethodsShow(KNearestNeighbors)

import KNearestNeighborsMethodsTest from './KNearestNeighborsMethodsTest.js'
KNearestNeighborsMethodsTest(KNearestNeighbors)

export default KNearestNeighbors