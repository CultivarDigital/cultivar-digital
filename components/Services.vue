<template>
  <section id="services">
    <v-container>
      <div id="design" class="pt-16">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Design</h2>
            <h4 class="text-h4 mb-3">Desenhos inavodores, responsivos e acessíveis</h4>
            <p class="tertiary--text text-h5">Buscamos trazer simplicidade, beleza e harmonia aos elementos visuais estimulando conexões mais agradávéis. </p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/design.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#code">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
              <v-img contain :src="require('~/assets/img/design.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div id="code" class="pt-16">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
              <v-img contain :src="require('~/assets/img/codigo.png')"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Código</h2>
            <h4 class="text-h4 mb-3">Sites e aplicativos acessíveis, estáveis e escaláveis</h4>
            <p class="tertiary--text text-h5">Oferecemos tecnologias modernas e confiáveis para criar uma boa experiência com as aplicações, garantindo disponibilidade, acessibilidade e segurança.</p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/codigo.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#content">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
        </v-row>
      </div>
      <div id="content" class="pt-16">
        <v-row align="center">
          <v-col cols="12" md="6">
            <h2 class="text-h2 font-weight-bold mb-3">Conteúdo</h2>
            <h4 class="text-h4 mb-3">Pesquisa e produção com foco na experiência e usabilidade </h4>
            <p class="tertiary--text text-h5">Apoiamos na produção e edição de textos, oferecendo alternativas que incentivem conexões mais relevantes com os conteúdos oferecidos.    </p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/conteudo.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#partners">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6"  class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-10 py-15">
              <v-img contain :src="require('~/assets/img/conteudo.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>
