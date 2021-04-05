<template>
  <div>
    <div class="dashboard-center">
      <b-container fluid="sm">

        <div class="slide"> <!-- Carousel de imagens -->

          <b-carousel
            :interval="3000"
            controls
            img-width="1024"
            img-height="480"
            style="text-shadow: 1px 1px 2px #333;">

            <b-carousel-slide :img-src="require('../assets/images/pokemon-logo.jpg')" class="slide"/> <!-- b-carousel-slide - definição da imagem do carousel -->

            <b-carousel-slide :img-src="require('../assets/images/pokemon-slide-2.jpg')" class="slide">
              <h1>Escolha o seu</h1>
            </b-carousel-slide>

            <b-carousel-slide :img-src="require('../assets/images/pokemon-slide-4.jpg')" class="slide">
              <h1>E veja suas Habilidades!</h1>
            </b-carousel-slide>
          </b-carousel>

        </div>

        <hr>

        <h1>Principais Pokémon's</h1> 

        <div class="mid"> <!-- Mostra os principais pokémons -->
          <b-row class="card-mid">
            <b-col cols="4" v-for="pokemon in info" :key="pokemon.id"> <!-- trazendo todos os pokémons -->
              <b-card
                tag="article"
                style="max-width: 20rem;"
                class="mb-3">
                <b-card-img id="img" :src="require('../assets/images/pokemons/img'+ pokemon.name +'.jpg')" height="300"/> <!-- Mostra a imagem do card de acordo com o nome do pokémon -->
                  <br/>
                    <br/>
                      <b-card-text class="h1" style = "text-transform:uppercase;"> <!-- Mostra o texto - nome do pokémon-->
                        {{ pokemon.name }}
                      </b-card-text>
                    <br/>
                  <br/>
                  <!-- Router Link - ir para a pagina individual do pokémon levando como parametro o nome -->
                  <router-link class="btn btn-outline-primary mb-2 mr-2 mt-2" exact :to="`/pokemon/${pokemon.name}`">
                    Visualizar
                  </router-link>
              </b-card>
            </b-col>
          </b-row>
        </div>

      </b-container>
    </div>
  </div>
</template>

<script>
import pokeapi from '../services/AppPokeApi';//Importação do serviço axios

export default {
    data(){
      return{
        //Variável para armazenar o retorno da API
        info: null
      }
    },
   mounted() {
     //Busca todos os pokémons
    pokeapi//Utilizando o objeto do serviço
    .get("/pokemon/?offset=0&limit=9")//passando como parâmetro a URI para ser chamada na API com um limite de 9 pokémons 
    .then((response) => (this.info = response.data.results));//Retorna os dados da API de acordo com o response declarado
   }
}
</script>

<style scoped>

  .dashboard-center{
  padding-top: 100px;
  position: relative;
  max-width: 100%;
  }

  .slide{
  width: 1080px;
  height: 640px;
  max-width: 1080px;
  max-height: 640px;
  }

  .card-mid{
  text-align: center;
  }

  /* @media - Para configurar o layout de acordo com o tamanho da tela */
  /* Tablet Portrait size to standard 960 (devices and browsers) */
  @media only screen and (min-width: 768px) and (max-width: 959px) {

    .dashboard-center{
    max-width: 100%;
    width: 950px;
    padding-right: 40%;
    }

    .card-mid{
    max-width: 100rem;
    width: 60rem;
    }
  }

  /* Smaller than standard 960 (devices and browsers)*/
  @media only screen and (max-width: 950px) {

      .dashboard-center{
      max-width: 100%;
      width: 950px;
      padding-right: 40%;
      }

      .card-mid{
      float:left;
      width: 900px;
      }

      #img{
      height: 150px;
      width: 150px;
      }

      .h1{
      font-size: 20px;
      }
      .slide{
      width: 900px;
      height: 480px;
      max-width: 900px;
      max-height: 480px;
      }
  }
  /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
  @media only screen and (min-width: 480px) and (max-width: 767px) {

      .dashboard-center{
      float:left;
      }
      .card-mid{
      float:center;
      max-width: 300rem;
      }

      .h1{
      font-size: 20px;
      }

      #img{
      height: 100px;
      width: 100px;
      }

      .slide{
      width: 600px;
      height: 480px;
      max-width: 600px;
      max-height: 480px;
      }
  }

  /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
  @media only screen and (min-width: 479px) and (max-width: 767px) {

      .dashboard-center{
      float:left;
      padding-right: 40%;
      }

      .card-mid{
      width: 700px;
      }

      .h1{
      font-size: 20px;
      }

      #img{
      height: 100px;
      width: 100px;
      }

      .slide{
      width: 700px;
      height: 420px;
      max-width: 700px;
      max-height: 420px;
      }
  }

   /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
  @media only screen and (min-width: 375px) and (max-width: 478px) {

      .dashboard-center{
      float:left;
      }

      .card-mid{
      float:center;
      width: 470px;
      }

      .card-mid button{
      float: left;
      text-align: left;
      width: 100px;
      height: 50px;
      }

      .h1{
      font-size: 15px;
      text-align: left;
      }

      #img{
      height: 50px;
      width: 50px;
      }

      .slide{
      width: 375px;
      height: 320px;
      max-width: 375px;
      max-height: 320px;
      }
  }

</style>
