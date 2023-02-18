import https from 'https'

export default function (cxt) {
  cxt.$axios.defaults.httpsAgent = new https.Agent({
    rejectUnauthorized: false,
  })
  cxt.$axios.onError((error) => {
    if (error && error.response && error.response.status === 401) {
      // cxt.$notifier.error('Sessão expirada')
      cxt.$router.push('/login')
    } else {
      cxt.$notifier.apiError(error)
    }
  })
}
