export default (context) => {
  
  if (context.store.state.provider) {
    const theme = context.store.state.provider.theme || 'dark'
    const primaryColor = context.store.state.provider.primary_color || '#A2248F'

    if (theme === 'dark' && !context.$vuetify.theme.dark) {
      context.$vuetify.theme.dark = true
    }  else if (theme === 'light' && context.$vuetify.theme.dark) {
      context.$vuetify.theme.dark = false
    }

    context.$vuetify.theme.themes[theme].primary = primaryColor
  }
}
