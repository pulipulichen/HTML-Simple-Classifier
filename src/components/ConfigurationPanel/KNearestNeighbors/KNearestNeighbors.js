let KNearestNeighbors = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      model: null,
      dataToShow: null,
      unknownsPrediction: [],
    }
  },
  watch: {
    'localConfig.locale'() {
      this.$i18n.locale = this.localConfig.locale;
    },
  },
  computed: {
    isModelBuilded () {
      return (this.model !== null)
    },
    isModelUnsupervised () {
      return (this.model !== null && this.model === 'unsupervised')
    },
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