<template>
  <div>
    <!-- Page Content -->
    <div class="container">

      <div class="row">
        <div class="col-lg-9">
          
          <div class="card mt-4">
            <div class="card-body">
              <h3 class="card-title" style = "text-transform:uppercase;">{{ this.$route.params.nome }}</h3><!-- Titulo do card - Nome do pokémon trago pela URL por forma de parametro (this.$route.params.nome)-->
            </div>
            <div v-b-hover="handleHover" class="border rounded py-3 px-4"> <!-- Definindo as principais imagens no card / Hover - para quando passar o mouse trocar de imagem -->
                 <!-- Utilizando sempre o $this.router.params para definir parâmetros que serão usados para trazer as imagens e afins --> 
                <img v-if="isHovered" class="card-img-top img-fluid slide" :src="require('../../assets/images/pokemons/img'+ this.$route.params.nome +'second.jpg')" :alt='this.$route.params.nome'>
                <img v-else class="card-img-top img-fluid slide" :src="require('../../assets/images/pokemons/img'+ this.$route.params.nome +'.jpg')" :alt='this.$route.params.nome'>
            </div>
            <div style="text-align: center;"> <!-- Definindo as imagens da galeria que são trazidas por meio de URL e passando como parâmetro para definir a imagem o 'this.$route.params.nome' -->
              <p>Galeria</p>
              <img :src="('https://img.pokemondb.net/sprites/black-white/normal/'+this.$route.params.nome+'.png')" :alt='this.$route.params.nome'>
              <img :src="('https://img.pokemondb.net/sprites/black-white/shiny/'+this.$route.params.nome+'.png')" :alt='this.$route.params.nome'>
              <img :src="('https://img.pokemondb.net/sprites/heartgold-soulsilver/back-normal/'+this.$route.params.nome+'.png')" :alt='this.$route.params.nome'>
              <img :src="('https://img.pokemondb.net/sprites/black-white/back-shiny/'+this.$route.params.nome+'.png')" :alt='this.$route.params.nome'>
            </div>
          </div>

          <!-- /.card / Card para definir todos as outras informações do pokémon --> 
          <div class="card card-outline-secondary my-4">
            <div class="card-header">
              <h3>Detalhes</h3>
            </div>
            <div class="card-body">
              <h4>Habilidades</h4>
                <p v-for="pokemonAbility in infoAbility" :key="pokemonAbility.id">{{ pokemonAbility.ability.name }}</p> <!-- Mostras as habilidades -->
              <hr>
                <h4>Medidas</h4>
                <p v-for="pokemonHeight in infoDimensions, 1" :key="pokemonHeight.id">Altura: {{ infoDimensions.height }} M</p> <!-- Mostra a Altura-->
                <p v-for="pokemonWeight in infoDimensions, 1" :key="pokemonWeight.id">Peso: {{ infoDimensions.weight }} Kg</p> <!-- Mostra o peso -->
                <hr>
                <h4>Tipo</h4>
                <p v-for="pokemonType in infoType" :key="pokemonType.id">{{ pokemonType.type.name }}</p> <!-- Mostra o tipo -->
              <hr>
              <button class="btn btn-primary mb-2 mr-2 mt-2" @click="voltar()"> <!-- Router link para retonar a página de listagem dos pokémons -->
                <b-icon icon="arrow-left" /> Voltar
              </button>
            </div>
          </div>
          <!-- /.card -->

        </div>
        <!-- /.col-lg-9 -->

      </div>

    </div>
    <!-- /.container -->
  </div>
</template>>
  
<script>
import pokeapi from '../../services/AppPokeApi'; //Importação do serviço axios

export default {
    data(){
        return{
          //Variáveis para armazenar o retorno da API
          info: [],
          infoAbility: [],
          infoDimensions: [],
          infoType: [],
          //Variável para definir o "aparecimento" das imagens principais
          isHovered: false
        }
    },
    mounted(){
      //Busca o pokemon [forms]
      pokeapi //Utilizando o objeto do serviço
      .get("/pokemon/" + this.$route.params.nome)//passando como parâmetro this.$route.params na URI para ser chamada na API
      .then((response) => (this.info = response.data.forms)); //Retorna os dados da API de acordo com o response declarado

      //Busca Habilidade [Abilities]
      pokeapi//Utilizando o objeto do serviço
       .get("/pokemon/" + this.$route.params.nome)//passando como parâmetro this.$route.params na URI para ser chamada na API
      .then((response) => (this.infoAbility = response.data.abilities));//Retorna os dados da API de acordo com o response declarado

      //Busca Dimensões do Pokémon [versions]
      pokeapi//Utilizando o objeto do serviço
       .get("/pokemon/" + this.$route.params.nome)//passando como parâmetro this.$route.params na URI para ser chamada na API
      .then((response) => (this.infoDimensions = response.data));//Retorna os dados da API de acordo com o response declarado

      //Busca o tipo do pokemon [type]
      pokeapi//Utilizando o objeto do serviço
       .get("/pokemon/" + this.$route.params.nome)//passando como parâmetro this.$route.params na URI para ser chamada na API
      .then((response) => (this.infoType = response.data.types));//Retorna os dados da API de acordo com o response declarado
    },
    methods: {
      handleHover(hovered) { //Método para definir a visibilidade das imagens do card
        this.isHovered = hovered
      },
      voltar() { //Método para voltar à página anterior
        this.$router.back();
      }
    }
}
</script>

<style>
  .container{
  padding-top: 5%;
  }
  .slide{
  width: 600px;
  height: 500px;
  max-width: 600px;
  max-height: 500px;
  min-width: 400px;
  min-height: 300px;
  }

  /* @media - Para configurar o layout de acordo com o tamanho da tela */
  /* Tablet Portrait size to standard 960 (devices and browsers) */
  @media only screen and (min-width: 768px) and (max-width: 959px) {

    .container{
    padding-top: 10%;
    }
  }
  /* All Mobile Sizes (devices and browser) */
  @media only screen and (max-width: 767px) {

    .container{
    padding-top: 10%;
    }
  }

  /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
  @media only screen and (min-width: 480px) and (max-width: 767px) {

    .container{
    padding-top: 15%;
    }
  }

  /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
  @media only screen and (min-width: 375px) and (max-width: 479px) {

    .container{
    padding-top: 20%;
    }

    .slide{
    width: 300px;
    height: 400px;
    max-width: 300px;
    max-height: 400px;
    min-width: 200px;
    min-height: 300px;
    }
  }
</style>