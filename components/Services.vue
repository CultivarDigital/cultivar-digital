<template>
  <section id="services" class="mb-16">
    <v-container>
      <div id="design" class="pt-16">
        <h3 class="text-h2 mb-6">Serviços</h3>
        <v-row align="center">
          <v-col cols="12" md="6">
            
            <h4 class="text-h5 mb-3">Oferecemos serviços completos de desenvolvimento de aplicativos para Android e iOS</h4>
            <p class="tertiary--text">Nossa equipe trabalhará com você para compreender suas necessidades e criar um aplicativo sob demanda que atenda aos seus objetivos.</p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/design.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#code">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/design.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
      <div id="code" class="pt-16">
        <v-row align="center">
          <v-col cols="12" md="6" class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/codigo.png')"></v-img>
            </v-card>
          </v-col>
          <v-col cols="12" md="6">
            <h4 class="text-h5 mb-3">Desde a concepção até a publicação e manutenção.</h4>
            <p class="tertiary--text">Cuidamos de todo o roteiro de desenvolvimento. Nossa abordagem completa de gerenciamento de projetos garante que seu projeto será entregue no prazo e dentro do orçamento.</p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
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
            <h4 class="text-h5 mb-3">Seja uma grande empresa ou uma start-up.</h4>
            <p class="tertiary--text">Temos a experiência e habilidade para transformar suas idéias em realidade. Entre em contato conosco para solicitar uma análise para seu próximo projeto de aplicativo.</p>
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15 my-6 d-md-none">
              <v-img contain :src="require('~/assets/img/conteudo.png')"></v-img>
            </v-card>
            <div class="text-center">
              <v-btn fab color="secondary" small class="nav-btn" href="#portfolio">
                <v-icon>mdi-chevron-double-down</v-icon>
              </v-btn>
            </div>
          </v-col>
          <v-col cols="12" md="6"  class="d-none d-md-block">
            <v-card color="secondary" elevation="0" class="rounded-xl pa-6 py-15">
              <v-img contain :src="require('~/assets/img/conteudo.png')"></v-img>
            </v-card>
          </v-col>
        </v-row>
      </div>
    </v-container>
  </section>
</template>
