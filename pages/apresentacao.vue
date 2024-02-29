<template>
  <div>
    <v-container>
      <div class="text-center mt-16 px-6">
        <img
          :src="require('~/assets/img/logo-completa.svg')"
          style="max-width: 100%"
          class="mb-6"
        />
      </div>
      <p class="my-12">
        Simplificamos a gestão do seu negócio para que você possa se concentrar
        no que realmente importa: oferecer um excelente serviço aos seus
        clientes.
      </p>
      <div class="primary white--text py-6 px-3 rounded mb-6">
        <p class="text-center">
          <strong>Por que escolher a Atendimento Simples?</strong>
        </p>
        <ul>
          <li>
            Simplicidade: Nossa plataforma foi projetada para ser intuitiva e
            fácil de usar, eliminando a complexidade desnecessária.
          </li>
          <li>
            Eficiência: Automatize processos e agilize o fluxo de trabalho,
            economizando tempo e recursos preciosos.
          </li>
          <li>
            Personalização: Adaptamos nossas soluções para atender às
            necessidades específicas do seu negócio, garantindo uma experiência
            sob medida.
          </li>
          <li>
            Suporte dedicado: Conte com nossa equipe de suporte dedicada para
            ajudá-lo a aproveitar ao máximo nossa plataforma e superar qualquer
            desafio que possa enfrentar.
          </li>
        </ul>
      </div>
      <div class="my-12">
        Explore nossas soluções inovadoras que vão revolucionar a maneira como
        você administra seu negócio:
      </div>
      <v-row>
        <v-col md="6">
          <v-card color="pa-6 mb-6">
            <h2 class="primary--text">Plataforma de atendimento</h2>
            <p class="text--secondary" style="font-size: 14px">
              Sistema de Gestão de Demandas para Prestadores de Serviço.
            </p>
            <p>
              Gerencie suas demandas de forma eficiente e organizada com nossa
              solução de gestão de demandas. Receba, acompanhe e controle as
              solicitações dos seus clientes de maneira simples e intuitiva.
              Crie orçamentos detalhados e gere faturas com facilidade,
              garantindo uma comunicação transparente e eficaz com seus
              clientes.
            </p>
            <div class="text-center">
              <v-btn color="secondary" to="/gestao-de-demandas">
                Saiba mais
              </v-btn>
            </div>
          </v-card>
        </v-col>
        <v-col md="6">
          <v-card color="pa-6 mb-6">
            <h2 class="primary--text">Imobiliárias</h2>
            <p class="text--secondary" style="font-size: 14px">
              Sistema de Gestão para Imobiliárias.
            </p>
            <p>
              Para imobiliárias que buscam uma solução completa, oferecemos um
              sistema integrado de gestão e um site personalizado para promover
              suas propriedades. Simplifique a administração de imóveis,
              contratos e clientes, enquanto apresenta suas listagens de forma
              atraente e profissional online.
            </p>
            <div class="text-center">
              <v-btn color="secondary" to="/imobiliarias"> Saiba mais </v-btn>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <div class="text-center mb-16 pt-10">
        <p class="mb-6">
          Pronto para simplificar o seu negócio? Entre em contato conosco hoje
          mesmo para saber mais sobre como a Atendimento Simples pode ajudá-lo a
          alcançar seus objetivos.
        </p>
        <div>
          <v-btn color="secondary" to="/atendimento" small>
            <v-icon left class="d-none d-lg-inline">mdi-account-box</v-icon>
            Fale conosco
          </v-btn>
        </div>
      </div>
    </v-container>
  </div>
</template>
<script>
export default {
  layout: 'main',
}
</script>
