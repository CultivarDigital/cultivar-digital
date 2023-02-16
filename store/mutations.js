export default {
  toggleDrawer(state, status) {
    state.showDrawer = status
  },
  setCustomers(state, customers) {
    state.customers = customers
  },
  setCustomer(state, customer) {
    state.customer = customer
  },
}
