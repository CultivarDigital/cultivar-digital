export default (context) => {
  if (context.store.state.provider) {
    if (context.store.state.provider.theme === 'dark' && !context.$vuetify.theme.dark) {
      context.$vuetify.theme.dark = true
    }  else if (context.store.state.provider.theme === 'light' && context.$vuetify.theme.dark) {
      context.$vuetify.theme.dark = false
    }
  }
}
