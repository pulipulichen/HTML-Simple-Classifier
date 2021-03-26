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