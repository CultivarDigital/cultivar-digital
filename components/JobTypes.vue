<template>
  <v-container>
    <section>
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h2 font-weight-bold mb-3">Design</h2>
          <h4 class="text-h4 mb-3">Desenhos inavodores, responsivos e acessíveis</h4>
          <p class="tertiary--text text-h5">Buscamos trazer simplicidade, beleza e harmonia aos elementos visuais estimulando conexões mais agradávéis. </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
            <v-img :src="require('~/assets/img/pana.png')"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </section>
    <section class="my-12">
      <v-row align="center">
        <v-col cols="12" md="6" class="px-3">
          <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
            <v-img :src="require('~/assets/img/cultivar-digital-desenvolvimento.png')"></v-img>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <h2 class="text-h2 font-weight-bold mb-3">Código</h2>
          <h4 class="text-h4 mb-3">Sites e aplicativos acessíveis, estáveis e escaláveis</h4>
          <p class="tertiary--text text-h5">Oferecemos tecnologias modernas e confiáveis para criar uma boa experiência com as aplicações, garantindo disponibilidade, acessibilidade e segurança.</p>
        </v-col>
      </v-row>
    </section>
    <section class="my-12">
      <v-row align="center">
        <v-col cols="12" md="6">
          <h2 class="text-h2 font-weight-bold mb-3">Conteúdo</h2>
          <h4 class="text-h4 mb-3">Pesquisa e criação com foco na experiência e usabilidade </h4>
          <p class="tertiary--text text-h5">Apoiamos na produção e edição de textos, oferecendo alternativas que incentivem conexões mais relevantes com os conteúdos oferecidos.    </p>
        </v-col>
        <v-col cols="12" md="6" class="px-3">
          <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
            <v-img :src="require('~/assets/img/cultivar-digital-producao-de-conteudo.png')"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </section>
  </v-container>
</template>
