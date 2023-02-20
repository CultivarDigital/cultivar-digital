export default {
  toggleDrawer(state, status) {
    state.showDrawer = status
  },
  setProvider(state, provider) {
    state.provider = provider
  },
  setCustomer(state, customer) {
    state.customer = customer
  },
  setCustomerSummary(state, customerSummary) {
    state.customerSummary = customerSummary
  }
}
