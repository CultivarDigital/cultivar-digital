export default {
  async nuxtServerInit ({ commit, dispatch }, { req, $axios, $vuetify }) {

    const baseDomain = process.env.BASE_DOMAIN
    let subdomain = req.headers.host.replace(`.${baseDomain}`, '').split(':')[0]

    const isDefault = ['www', '', 'localhost', baseDomain].includes(subdomain)

    if (isDefault) {
      subdomain = 'cultivar-digital'
    }

    // get provider by subdomain
    console.log('SUBDOMAIN: ' + subdomain)
    const provider = await $axios.$get(`/v1/providers/public/${subdomain}`)
    console.log('PROVIDER: ' + JSON.stringify(provider))
    if (provider) {
      $vuetify.theme.isDark = provider.theme === 'dark'
    }
    commit('setProvider', provider)
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
      const customerSummary = await this.$axios.$get('/v1/dashboard/customer/summary', {
        params: {
          customer: state.customer._id,
        }
      })
      commit('setCustomerSummary', customerSummary)
    } else {
      commit('setCustomerSummary', null)
    }
  },

}
