<template>
  <section class="d-flex justify-center align-center page-cover">
    <v-container>
      <div class="text-center cover">
        <div>
          <img :src="require('~/assets/img/logo.png')" class="logo mb-3" style="width: 150px" />
          <h5 class="text-h6 mb-3"><strong>Cultivar</strong> Digital</h5>
          <p class="tertiary--text mb-12">
            Ajudando a impulsionar o crescimento de seu negócio na era digital.
          </p>
          <h5 class="text-h6 mb-12">
            Desenvolvemos aplicativos para 
            <br>
            Android e iOS
          </h5>
          </div>
        <div class="text-center">
          <v-btn color="primary" href="#presentation" class="mb-3">
            <v-icon left>mdi-arrow-down-box</v-icon> Quero conhecer mais
          </v-btn>
          <v-btn color="primary" to="/cliente" class="mb-3">
            <v-icon left>mdi-login</v-icon> Já sou cliente
          </v-btn>
          <div class="pt-10">
            <v-btn
              color="success"
              href="https://api.whatsapp.com/send?phone=5562999159008"
              target="_blank"
            >
              <v-icon left>mdi-whatsapp</v-icon>
              Fale com a gente
            </v-btn>
          </div>
        </div>
      </div>
    </v-container>
  </section>
</template>
<style lang="sass" scoped>
.cover
  margin: auto
  width: fit-content
  a
    color: #fff
    text-decoration: none
</style>
