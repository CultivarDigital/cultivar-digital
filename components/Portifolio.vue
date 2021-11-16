<template>
  <section id="portfolio" class="py-16">
    <v-container>
      <h3 class="text-h2 mb-6">Portifólio</h3>
      <h5 class="text-h5 mb-6">Desenvolvemos projetos para clientes e em parceirias com outras empresas e agências.</h5>
      <v-list class="details transparent">
        <v-list-item href="https://www.cultivarbrasil.com/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/cultivar.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Aplicativo Cultivar</strong></h3>
            <p class="tertiary--text mb-2">
              Aplicativo desenvolvido com o objetivo de facilitar o aprendizado sobre cultivo do própro alimento.
            </p>
            <p>
              <v-chip small>Produto próprio</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://redario.org.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/redario.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Redário</strong></h3>
            <p class="tertiary--text mb-2">
              Sistema de gerenciamento do processo de coleta, processamento, armazenamento, planejamento de plantio e venda de sementes para recuperação de áreas degradadas.
            </p>
            <p>
              <v-chip small>Parceiria com Terrakrya</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.bioba.com.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/bioba.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Biobá</strong></h3>
            <p class="tertiary--text mb-2">
              Plataforma concebida como uma estratégia multisetorial para criar conexões entre a produção agroecológica e extrativista (sociobiodiversidade), gerada a partir dos agricultores familiares e comunidades tradicionais e povos indígenas com os mercados consumidores, dentro de uma lógica norteada por princípios básicos de sustentabilidade, agroecologia, transparência, participação e controle social e economia solidária.
            </p>
            <p>
              <v-chip small>Parceiria com Terrakrya</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.caminhosdasemente.org.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/caminhos-da-semente.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Caminhos da Semente</strong></h3>
            <p class="tertiary--text mb-2">
              Rede de pessoas e organizações com objetivo de dar escala à restauração ecológica no Brasil com foco no método de semeadura direta.
            </p>
            <p>
              <v-chip small>Parceiria com Terrakrya</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.florestaprotegida.org.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/floresta-protegida.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Associação Floresta Protegida (AFP</strong>)</h3>
            <p class="tertiary--text mb-2">
              Organização indígena do Povo Mẽbêngôkre - Kayapó que representa aproximadamente 3 mil indígenas de 31 aldeia situadas nas Terras Indígenas Kayapó, Mekragnoti e Las Casas, no sul do estado do Pará. A AFP surgiu em 1998 e atua através do desenvolvimento e execução de projetos estratégicos, em 4 linhas ação: Cultura e Conhecimento, Atividades Produtivas e Geração de Renda, Monitoramento Ambiental e Territorial e Fortalecimento institucional e político.
            </p>
            <p>
              <v-chip small>Parceiria com Terrakrya</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.xingumais.org.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/xingu+.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Xingu+</strong></h3>
            <p class="tertiary--text mb-2">
              Rede formada pelas aldeias e comunidades que fazem parte do Corredor Xingu, patrimônio cultural, linguístico e ecológico.
            </p>
            <p>
              <v-chip small>Parceiria com Terrakrya</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
        <v-list-item href="https://www.redeagroflorestal.com.br/" target="_blank" class="my-3">
          <v-list-item-avatar size="120" class="rounded-0">
            <v-img :src="require('~/assets/img/projetos/redeagroflorestal.png')" />
          </v-list-item-avatar>
          <v-list-item-content>
            <h3 class="text-h5 mb-3"><strong>Rede Agroflorestal</strong></h3>
            <p class="tertiary--text mb-2">
              Plataforma de construção colaborativa de conhecimento sobre Agroflorestas.
            </p>
            <p>
              <v-chip small>Produto próprio</v-chip>
            </p>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-container>
  </section>
</template>
