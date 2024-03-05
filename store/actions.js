/* eslint-disable no-console */
export default {
  async nuxtServerInit({ commit, dispatch }, { req, $axios, $vuetify }) {
    const baseDomain = process.env.BASE_DOMAIN
    
    const domain = req.headers.host.split(':')[0]
    // domain = 'terradoscristais.com.br'

    console.log('DOMAIN: ' + domain)

    let provider = null
      
    if (domain !== 'localhost' && domain !== baseDomain) {
      console.log(`/v1/providers/public/${domain}`);
      provider = await $axios.$get(`/v1/providers/public/${domain}`)
      console.log('PROVIDER: ' + JSON.stringify(provider))
      commit('setProvider', provider)
    } else {
      const subdomain = req.headers.host
      .replace(`.${baseDomain}`, '')
      .split(':')[0]

      // subdomain = 'imobiliaria-terra-dos-cristais'
      
      const isDefault = ['www', '', 'localhost', baseDomain].includes(subdomain)

      console.log('SUBDOMAIN: ' + subdomain)
      console.log('IS DEFAULT: ' + isDefault)

      if (!isDefault && subdomain) {
        provider = await $axios.$get(`/v1/providers/public/${subdomain}`)
        console.log('PROVIDER: ' + JSON.stringify(provider))
        commit('setProvider', provider)
      }  
    }

    if (provider) {
      $vuetify.theme.isDark = provider.theme === 'dark'
      $vuetify.theme.themes.light.primary = '#00335a'  
    }
  },
  toggleDrawer({ commit }, status) {
    commit('toggleDrawer', status)
  },
  logout({ commit }) {
    this.$firebase.logout()
    commit('LOGOUT')
  },
  async loadCustomer({ commit }, id) {
    const customer = await this.$axios.$get(`/v1/customers/${id}`)
    commit('setCustomer', customer)
  },

  async loadCustomerSummary({ commit, state }) {
    if (state.customer) {
      const customerSummary = await this.$axios.$get(
        '/v1/dashboard/customer/summary',
        {
          params: {
            customer: state.customer._id,
          },
        }
      )
      commit('setCustomerSummary', customerSummary)
    } else {
      commit('setCustomerSummary', null)
    }
  },
}
