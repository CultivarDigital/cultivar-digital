<template>
  <section class="d-flex justify-center align-center page-cover">
    <v-container>
      <div
        class="
          text-h4 text-lg-h3 text-center
          font-weight-light
          cover
          font-weight-bold
        "
      >
        <div>
          <a
            style="font-size: 16px; letter-spacing: 1.5px"
            href="#design"
            class="font-weight-light"
            >Desenvolvemos</a
          >
        </div>
        <div><a href="#design">Aplicativos</a></div>
        <div>
          <a
            href="#code"
            style="font-size: 16px; letter-spacing: 1.5px"
            class="font-weight-light"
            >Para</a
          >
        </div>
        <div class="mb-16"><a href="#content">Android e iOS</a></div>
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
