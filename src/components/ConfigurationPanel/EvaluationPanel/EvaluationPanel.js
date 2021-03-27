let EvaluationPanel = {
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
    
  },
  methods: {
    displayPercent (value) {
      if (value === 0 || value === 1) {
        return (value * 100) + '%'
      }
      
      let displayValue = value * 100
      if ((displayValue + '').length > 7) {
        displayValue = Math.round(value * 100000) / 1000
      }
      return (displayValue) + '%'
    }
  }
}

export default EvaluationPanel