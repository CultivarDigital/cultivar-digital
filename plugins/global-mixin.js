import Vue from 'vue'

if (!Vue.__my_mixin__) {
  Vue.__my_mixin__ = true

  const globalMixin = {
    computed: {
      isLoggedIn() {
        return this.$auth.user && this.$auth.user.uid
      },
      currentRegion() {
        return this.$auth.user && this.$auth.user.region
          ? this.$auth.user.region
          : null
      },
      baseURL() {
        return process.env.BASE_URL
      },
      filesURL() {
        return process.env.FILES_URL
      },
      theme() {
        return this.$vuetify.theme.dark ? 'dark' : 'light'
      },
      primaryColor() {
        return this.$vuetify.theme.themes[this.theme].primary
      },
      provider() {
        return this.$store.state.provider
      },
    },
    methods: {
      async getLocalItem(key) {
        if (this.$localForage) {
          return await this.$localForage.getItem(key)
        }
      },
      async setLocalItem(key, value) {
        if (this.$localForage) {
          return await this.$localForage.setItem(key, value)
        }
      },
      notify(msg, type) {
        this.$notifier.notify({
          content: msg,
          color: type === 'error' ? 'red' : 'green',
        })
      },
      apiDataToForm(form, data) {
        Object.keys({ ...form }).forEach((key) => {
          if (data && data[key]) {
            if (
              typeof data[key] === 'string' &&
              data[key].includes('T00:00:00.000Z') &&
              key !== 'date_time'
            ) {
              form[key] = data[key].replace(/T00:00:00.000Z/g, '')
            } else {
              form[key] = data[key]
            }
          }
        })
      },
    },
  }

  Vue.mixin(globalMixin)
}
