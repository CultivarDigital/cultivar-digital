<template>
  <section id="cover" class="d-flex justify-center align-center page-cover">
    <v-container>
      <div class="text-center cover">
        <div>
          <img
            v-if="provider.logo"
            :src="filesURL + provider.logo"
            class="logo mb-3"
            style="width: 150px"
          />
          <h5 v-if="provider.name" class="text-h6 mb-10">
            <strong>{{ provider.name }}</strong>
          </h5>
          <p v-if="provider.description" class="mb-12 text--secondary">
            {{ provider.description }}
          </p>
          <h5 class="text-h6 mb-12"></h5>
        </div>
        <div class="text-center">
          <v-btn color="primary" href="#presentation" class="mb-3" large>
            <v-icon left>mdi-chevron-double-down</v-icon> Quero conhecer mais
          </v-btn>
          <br />
          <v-btn color="primary" to="/atendimento" class="mb-3">
            <v-icon left>mdi-login</v-icon> Já sou cliente
          </v-btn>
          <div class="pt-10 mb-10">
            <WhatsAppButton v-if="provider.phone" :phone="provider.phone.replace(/\D/g, '')" />
          </div>
          <v-btn icon fab class="nav-btn" href="#presentation">
            <v-icon>mdi-chevron-double-down</v-icon>
          </v-btn>
        </div>
      </div>
    </v-container>
  </section>
</template>
<script>
export default {}
</script>
