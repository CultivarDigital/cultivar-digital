<template>
  <v-app dark>
    <v-app-bar fixed app flat>
      <div class="d-flex justify-end align-center w-100" style="width: 100%">
        <n-link to="/" class="text-decoration-none d-flex align-center">
        <img :src="require('~/assets/img/logo.png')" class="logo" />
        <span class="ml-3"><strong>Cultivar</strong> Digital</span>
      </n-link>
      <v-spacer />
      <div class="d-flex align-center">
        <div class="d-none d-md-block">
          <v-btn class="font-weight-light" text small href="#presentation"
            >Sobre nós</v-btn
          >
          <v-btn class="font-weight-light" text small href="#services"
            >Serviços</v-btn
          >
          <v-btn class="font-weight-light" text small href="#portfolio"
            >Portfólio</v-btn
          >
        </div>
        <SwitchTheme />
        <v-btn color="primary" to="/atendimento" small>
          <v-icon left>mdi-account-box</v-icon>
          Atendimento
        </v-btn>
      </div>
      
      </div>
    </v-app-bar>
    <v-main>
      <Nuxt />
    </v-main>
    <Snackbar />
    <v-footer class="pa-3 justify-center">
      <div class="text-center pt-6">
        <h6 class="text-h6 mb-6">Fale com a gente</h6>
        <p>
          Nossa equipe está sempre pronta para responder às suas perguntas e
          ajudá-lo a encontrar a solução tecnológica perfeita para a sua
          empresa.
        </p>
        <div class="text-center">
          <div class="mb-3">Fale com a gente pelo WhatsApp:</div>
          <v-btn
            color="primary"
            x-large
            target="_blank"
            href="https://api.whatsapp.com/send?phone=5562999159008"
            class="text-decoration-none mb-3"
          >
            <v-icon left>mdi-whatsapp</v-icon>
            62 99915-9008
          </v-btn>
          <h5 class="tertiary--text pt-3">Ou envie um email para:</h5>
          <h5 class="text-h6 mb-6">
            <a
              class="dark text-decoration-none"
              @click="copy('atendimento@cultivardigital.com.br')"
            >
              atendimento@cultivardigital.com.br
            </a>
          </h5>
          <v-alert
            v-if="success"
            type="success"
            outlined
            class="text-left"
            small
          >
            {{ success }}
          </v-alert>
        </div>
      </div>
    </v-footer>
  </v-app>
</template>

<script>
import SwitchTheme from '~/components/SwitchTheme.vue';

export default {
    components: { SwitchTheme },
    data() {
        return {
            success: "",
            // drawer: false,
            fixed: false,
            items: [
                {
                    icon: "mdi-apps",
                    title: "Welcome",
                    to: "/",
                },
                {
                    icon: "mdi-chart-bubble",
                    title: "Inspire",
                    to: "/inspire",
                },
            ],
            miniVariant: false,
            right: true,
            title: "Vuetify.js",
        };
    },
    methods: {
        async copy(value) {
            await navigator.clipboard.writeText(value);
            this.success = "Email copiado!";
        },
    }
}
</script>
