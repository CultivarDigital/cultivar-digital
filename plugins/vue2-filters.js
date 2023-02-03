import Vue from 'vue'
import Vue2Filters from 'vue2-filters'

const Vue2FiltersConfig = {
  currency: {
    symbol: 'R$ ',
    decimalDigits: 2,
    thousandsSeparator: '.',
    decimalSeparator: ',',
  },
}

Vue.use(Vue2Filters, Vue2FiltersConfig)

Vue.filter('moeda', (value) => {
  return Vue.options.filters.currency(value)
})

Vue.filter('kg', (value) => {
  const kg =
    parseFloat(value || 0)
      .toFixed(3)
      .replace('.', ',') + ' kg'
  return kg
})
Vue.filter('qtd', (value) => {
  const kg = parseFloat(value || 0)
    .toFixed(3)
    .replace('.', ',')
  return kg
})
