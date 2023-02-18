export default {
  toggleDrawer(state, status) {
    state.showDrawer = status
  },
  setCustomer(state, customer) {
    state.customer = customer
  },
  setCustomerSummary(state, customerSummary) {
    state.customerSummary = customerSummary
  }
}
