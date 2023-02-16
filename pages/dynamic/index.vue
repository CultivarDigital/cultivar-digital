<template>
  <div>
    <component :is="`dynamic-${subdomain}`" />
    xxxx
    <pre>
      {{ subdomain }}
    </pre>
  </div>
</template>

<script>
export default {
  asyncData({ req }) {
    const subdomain = req.headers.host.split('.')[0]
    return { subdomain }
  },
}
</script>
