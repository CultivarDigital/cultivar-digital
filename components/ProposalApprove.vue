<template>
  <v-dialog
    v-model="dialog"
    fullscreen
    persistent
    @click:outside="dialog = false"
  >
    <template #activator="{ on, attrs }">
      <v-btn block large color="success" v-bind="attrs" v-on="on">
        <v-icon left> mdi-check </v-icon>
        Aprovar esta proposta
      </v-btn>
    </template>
    <v-card>
      <DialogHeader @close="() => (dialog = false)" />
      <v-container>
        <div class="contract-view">
          <h3 class="pt-3 mb-6">CONTRATO DE PRESTAÇÃO DE SERVIÇOS</h3>
          <p>Entre:</p>
          <p>
            <strong>{{ proposal.customer.corporate_name }}</strong
            >, com sede em <strong>{{ proposal.customer.address }}</strong
            >, representado por <strong>{{ $auth.user.name }}</strong
            >, doravante denominado simplesmente de "Contratante".
          </p>
          <p>E</p>
          <p>
            <strong>Cultivar Digital LTDA</strong>, com sede em
            <strong>
              Av. Portugal, n°1148, Sala C 2501 - Edifício Órion Business &
              Health Complex, Setor Marista, Goiânia-GO, CEP: 74.150-030</strong
            >, representado por <strong>Diego Maradona Rodrigues</strong>,
            doravante denominado simplesmente de "Prestador".
          </p>
          <p>Os presentes acordam com as seguintes cláusulas e condições:</p>
          <h4 class="mb-3">Objetivo do Contrato</h4>
          <p>
            O objetivo deste contrato é estabelecer os termos e condições para a
            prestação de serviços ao Contratante.
          </p>
          <h4 class="mb-3">Prazos</h4>
          <p>
            O projeto terá início em
            <strong>{{
              $moment(
                $momentBusinessDays.addDays({
                  days: 1,
                })
              ).format('DD/MM/YYYY')
            }}</strong>
            e sua entrega é prevista para
            <strong>{{
              $moment(
                $momentBusinessDays.addDays({
                  days: proposal.estimate_in_days + 1,
                })
              ).format('DD/MM/YYYY')
            }}</strong
            >. As entregas podem ser feitas e faturadas antes do prazo final da
            entrega. O Prestador entregará cada etapa do projeto de acordo com o
            seguinte cronograma respeitando a ordem de prioridade definida pelo
            Contratante:
          </p>
          <v-simple-table class="mb-6" light>
            <template #default>
              <thead>
                <tr>
                  <th>Demanda</th>
                  <th class="text-right">Estimativa</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="item in proposal.items" :key="item._id">
                  <td>
                    <small>{{ item.demand.title }}</small>
                  </td>
                  <td class="text-right">
                    <small>{{
                      $utils.plural(item.estimate_in_days, 'dia útil')
                    }}</small>
                  </td>
                </tr>
              </tbody>
              <tfoot>
                <tr>
                  <th><strong>Total</strong></th>
                  <th class="text-right">
                    <strong>{{
                      $utils.plural(proposal.estimate_in_days, 'dia útil')
                    }}</strong>
                  </th>
                </tr>
              </tfoot>
            </template>
          </v-simple-table>
          <h4 class="mb-3">Responsabilidades do Contratante e do Prestador</h4>
          <p>
            O Contratante será responsável por fornecer todos os recursos,
            informações e apoio necessários para o desenvolvimento das
            funcionalidades. O Prestador será responsável por desenvolver as
            funcionalidades de acordo com as especificações acordadas e por
            garantir a qualidade e funcionamento das mesmas.
          </p>
          <h4 class="mb-3">Preço e Pagamento</h4>
          <p>
            O valor total dos serviços prestados pelo Prestador será de
            <strong>{{ proposal.price | moeda }}</strong
            >. O pagamento será realizado através de fatura gerada mensalmente
            ao final de cada ciclo incluindo as demandas finalizadas e o
            percentual já executado das demandas em andamento. O Contratante
            concorda em pagar o valor total da fatura no prazo de 7 dias após a
            sua emissão.
          </p>
          <h4 class="mb-3">Propriedade Intelectual</h4>
          <p>
            Todos os direitos autorais, marcas registradas e outros direitos
            relacionados ao trabalho desenvolvido serão propriedade exclusiva do
            Contratante. O Prestador concorda em não utilizar esses direitos
            para fins comerciais ou outros fins não autorizados.
          </p>
          <h4 class="mb-3">Confidencialidade</h4>
          <p>
            O Prestador concorda em manter sigilo e confidencialidade sobre
            todas as informações confidenciais do Contratante, incluindo, mas
            não se limitando a, informações financeiras, comerciais, de
            negócios, de clientes, de tecnologia e outras informações
            confidenciais. O Prestador só poderá divulgar essas informações se
            for obrigado por lei ou se o Contratante autorizar por escrito a
            divulgação.
          </p>
          <h4 class="mb-3">Garantia</h4>
          <p>
            O Prestador garante que os serviços prestados serão realizados de
            forma profissional, eficiente e de acordo com as especificações
            acordadas. Se houver problemas com as funcionalidades desenvolvidas,
            o Prestador corrigirá esses problemas sem custo adicional para o
            Contratante.
          </p>
          <h4 class="mb-3">Rescisão</h4>
          <p>
            Este contrato poderá ser rescindido imediatamente por qualquer uma
            das partes mediante notificação por escrito à outra parte. Em caso
            de rescisão, o Prestador deverá entregar imediatamente todo o
            material relacionado ao projeto ao Contratante e apagar todas as
            cópias de informações confidenciais.
          </p>
          <h4 class="mb-3">Alterações</h4>
          <p>
            Este contrato tem escopo fechado. Qualquer alteração no escopo das
            demandas aqui incluídas deverá ser acordada por escrito entre as
            partes.
          </p>
          <h4 class="mb-3">Foro</h4>
          <p>
            As partes elegem o foro da Comarca de Goiânia, Estado de Goiás, para
            dirimir quaisquer dúvidas ou controvérsias oriundas deste contrato.
          </p>
          <h4 class="mb-3">Leis Aplicáveis</h4>
          <p>
            Este contrato será regido e interpretado de acordo com as leis da
            República Federativa do Brasil.
          </p>
        </div>
        <div>
          <v-checkbox
            v-model="accepted"
            color="success"
            x-large
            label="Li e concordo com o contrato acima."
          ></v-checkbox>
          <v-btn
            :disabled="!accepted"
            color="success"
            x-large
            class="mb-6"
            block
            @click="confirm"
          >
            Confirmar e aprovar
          </v-btn>
        </div>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    proposal: {
      type: Object,
      default: () => ({}),
    },
  },
  data: () => ({
    dialog: false,
    accepted: false,
  }),
  methods: {
    confirm() {
      this.dialog = false
      this.$emit('confirm')
    },
    cancel() {
      this.dialog = false
      this.$emit('cancel')
    },
  },
}
</script>
<style lang="scss">
.contract-view {
  background-color: #fff;
  color: #000;
  font-size: 14px;
  line-height: 1.5;
  font-family: 'Roboto', sans-serif;
  border-radius: 8px;
  padding: 16px;
}
</style>
