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
  mounted: async function () {
    await this.initData()
    this.initDropdown()
  },
  methods: {}
}

import NavigationBarMethodsData from './NavigationBarMethodsData.js'
NavigationBarMethodsData(NavigationBar)

import NavigationBarMethodsDataLoader from './NavigationBarMethodsDataLoader.js'
NavigationBarMethodsDataLoader(NavigationBar)

import NavigationBarMethodsView from './NavigationBarMethodsView.js'
NavigationBarMethodsView(NavigationBar)

export default NavigationBar