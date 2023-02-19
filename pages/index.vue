<template>
  <div>
    <!-- {{ provider }} -->
    <Cover />
    <Presentation />
    <Services />
    <v-divider></v-divider>
    <Portfolio />
  </div>
</template>
<script>
export default {
  layout: 'public',
  // async asyncData({ req, res, $axios }) {
  //   // get subdomain
  //   const baseDomain = process.env.BASE_DOMAIN
  //   let subdomain = req.headers.host.replace(`.${baseDomain}`, '').split(':')[0]

  //   console.log('baseDomain');
  //   console.log(baseDomain);
  //   console.log(req.headers.host);
  //   console.log(subdomain);

  //   const isDefault = ['www', '', 'localhost'].includes(subdomain)

  //   if (isDefault) {
  //     subdomain = 'cultivar-digital'
  //   }

  //   // get provider by subdomain
  //   console.log(baseDomain);
  //   console.log(subdomain);
  //   const provider = await $axios.$get(`/v1/providers/public/${subdomain}`) 

  //   return {
  //     provider,
  //   }
  // },
}
</script>
