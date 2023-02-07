export default {
  toggleDrawer(state, status) {
    state.showDrawer = status
  },
  setCompanies(state, companies) {
    state.companies = companies
  },
  setCompany(state, company) {
    state.company = company
  },
}
