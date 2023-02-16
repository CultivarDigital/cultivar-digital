<template>
  <div>
    <h1>Seja bem vindo(a) ao site da {{ provider.name }}!</h1>


    <pre>
      {{ provider }}
    </pre>
  </div>
</template>

<script>
export default {
  asyncData({ params }) {
    return { provider: params.provider }
  },
}
</script>
