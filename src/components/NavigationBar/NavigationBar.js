import logoPath from './../../../assets/favicon/favicon.svg'

let NavigationBar = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      logoPath
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
    
  }
}

export default NavigationBar