import logoPath from './../../../assets/favicon/favicon.svg'

let NavigationBar = {
  props: ['config', 'localConfig', 'utils'],
  data () {    
    this.$i18n.locale = this.localConfig.locale
    return {
      logoPath,
      saveFormats: ['ods', 'csv']
    }
  },
  watch: {},  // NavigationBarWatch.js
  computed: {
    filenameWithoutExt () {
      let filename = this.localConfig.filename
      let pos = filename.lastIndexOf('.')
      if (pos === -1) {
        return filename
      }
      return filename.slice(0, pos)
    }
  },
  mounted: async function () {
    await this.initData()
    this.initDropdown()
  },
  methods: {}
}

import NavigationBarMethodsData from './NavigationBarMethodsData.js'
NavigationBarMethodsData(NavigationBar)

import NavigationBarMethodsHandlerODS from './NavigationBarMethodsHandlerODS.js'
NavigationBarMethodsHandlerODS(NavigationBar)

import NavigationBarMethodsHandlerCSV from './NavigationBarMethodsHandlerCSV.js'
NavigationBarMethodsHandlerCSV(NavigationBar)

import NavigationBarMethodsView from './NavigationBarMethodsView.js'
NavigationBarMethodsView(NavigationBar)

import NavigationBarWatch from './NavigationBarWatch.js'
NavigationBarWatch(NavigationBar)

export default NavigationBar