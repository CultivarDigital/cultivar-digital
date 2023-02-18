export default {
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
