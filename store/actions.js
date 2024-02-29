export default {
  async nuxtServerInit({ commit, dispatch }, { req, $axios, $vuetify }) {
    const baseDomain = process.env.BASE_DOMAIN
    const subdomain = req.headers.host
      .replace(`.${baseDomain}`, '')
      .split(':')[0]

    // subdomain = 'cultivar-digital'
    const isDefault = ['www', '', 'localhost', baseDomain].includes(subdomain)

    console.log('SUBDOMAIN: ' + subdomain)
    console.log('IS DEFAULT: ' + isDefault)

    if (!isDefault && subdomain) {
      const provider = await $axios.$get(`/v1/providers/public/${subdomain}`)
      console.log('PROVIDER: ' + JSON.stringify(provider))
      commit('setProvider', provider)
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
