<template>
  <div>
    <!--    <div class="header-title text-center">-->
    <!--      <h2>Lista de regiões de saúde por mapa de risco</h2>-->
    <!--    </div>-->
    <b-card class="shadow mx-auto" title="Macrorregiões do Estado de Goiás"
            sub-title="Selecionar a região desejada para abrir a lista de municípios">
      <!--Primeira row-->
      <b-row class="mt-5 mb-5">
        <!--        Coluna Centro-Oeste-->
        <b-col class="col-lg-4">
          <div class="accordion" role="tablist">
            <h4 class="text-center">Centro-Oeste</h4>
            <p class="">Regiões:</p>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-1 variant="light">Central</b-button>
              </b-card-header>
              <b-collapse id="accordion-1" accordion="my-accordion" role="tabpanel">
                <b-card-body
                  v-for="municipio in (municipios.centro_oeste.central)"
                  >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-2 variant="light">Rio Vermelho</b-button>
              </b-card-header>
              <b-collapse id="accordion-2" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_oeste.rio_vermelho">
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-3 variant="light">Oeste 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-3" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_oeste.oeste_1" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-4 variant="light">Oeste 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-4" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_oeste.oeste_2" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>

        <!--        Coluna Centro Norte-->
        <b-col class="col-lg-4 mb-5">
          <div class="accordion" role="tablist">
            <h4 class="text-center">Centro Norte</h4>
            <p class="">Regiões:</p>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-5 variant="light">Norte</b-button>
              </b-card-header>
              <b-collapse id="accordion-5" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_norte.norte">
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-6 variant="light">Serra da Mesa</b-button>
              </b-card-header>
              <b-collapse id="accordion-6" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_norte.serra_da_mesa" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-7 variant="light">Pirineus</b-button>
              </b-card-header>
              <b-collapse id="accordion-7" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_norte.pirineus" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-8 variant="light">São Patrício 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_norte.sao_patricio_1" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-8 variant="light">São Patrício 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-8" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_norte.sao_patricio_2" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>


        <!--        Coluna Sudoeste-->
        <b-col class="col-lg-4">
          <div class="accordion" role="tablist">
            <h4 class="text-center">Sudoeste</h4>
            <p class="">Regiões:</p>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-9 variant="light">Sudoeste 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-9" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.sudoeste.sudoeste" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-10 variant="light">Sudoeste 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-10" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.sudoeste.sudoeste_2" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>


      </b-row>
      <!--Segunda row-->
      <b-row>
        <!--        Coluna Nordeste-->
        <b-col>
          <div class="accordion" role="tablist">
            <h4 class="text-center d-none d-lg-block">Nordeste</h4>
            <h4 class="text-center d-lg-none mb-3">Nordeste</h4>
            <p class="d-none d-lg-block">Regiões:</p>
            <p class="d-lg-none mb-3 pt-4">Regiões:</p>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-11 variant="light">Entorno Norte</b-button>
              </b-card-header>
              <b-collapse id="accordion-11" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.nordeste.entorno_norte" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-12 variant="light">Entorno Sul</b-button>
              </b-card-header>
              <b-collapse id="accordion-12" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.nordeste.entorno_sul" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-13 variant="light">Nordeste 1</b-button>
              </b-card-header>
              <b-collapse id="accordion-13" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.nordeste.nordeste_1" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-14 variant="light">Nordeste 2</b-button>
              </b-card-header>
              <b-collapse id="accordion-14" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.nordeste.nordeste_2" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>

        <!--Centro Sudeste-->
        <b-col>
          <div class="accordion" role="tablist">
            <h4 class="text-center">Centro Sudeste</h4>
            <p class="">Regiões:</p>
            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-15 variant="light">Centro Sul</b-button>
              </b-card-header>
              <b-collapse id="accordion-15" accordion="my-accordion" role="tabpanel">
                <b-card-body
                  v-for="municipio in municipios.centro_sudeste.centro_sul"
                  >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-16 variant="light">Estrada de Ferro
                </b-button>
              </b-card-header>
              <b-collapse id="accordion-16" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_sudeste.estrada_de_ferro" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>

            <b-card no-body class="mb-1">
              <b-card-header header-tag="header" class="p-1" role="tab">
                <b-button class="text-uppercase" block v-b-toggle.accordion-17 variant="light">Sul</b-button>
              </b-card-header>
              <b-collapse id="accordion-17" accordion="my-accordion" role="tabpanel">
                <b-card-body v-for="municipio in municipios.centro_sudeste.sul" >
                  <b-card-text>{{ municipio.title }}</b-card-text>
                </b-card-body>
              </b-collapse>
            </b-card>
          </div>
        </b-col>
      </b-row>
    </b-card>
    <p><a href="https://extranet.saude.go.gov.br/pentaho/api/repos/:coronavirus:paineis:painel.wcdf/generatedContent#">Voltar
      o mapa</a></p>

    <br>
    <br>
  </div>
</template>

<script>
import json from '@/components/municipios.json'

export default {
  name: 'Home',
  data: function () {
    return {
      //Define o ID e Title para todos os municipios
      municipios: json,
    }
  },
  filters: {
    uppercase: function (value) {
      return value.toUpperCase();
    }
  }

};

</script>
<style>

</style>

