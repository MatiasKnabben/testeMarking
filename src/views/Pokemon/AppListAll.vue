<template>
    <div>
        <div>
            <AppMenuFilter></AppMenuFilter> <!-- Utilizando o 'component' do menu de filtro que foi importado -->
        </div>

        <div class="list"> <!-- Lista todos os pokémons -->
            <b-container fluid="sm">
                <h1>Todos os Pokémons</h1>
                    <b-input type="text" name="pesquisa" placeholder="Pesquisar" v-model="search"/> <!-- Campo para pesquisa de pokémons por Nome -->
                <hr>
                    <ul id="example-1">
                        <div v-if="search == ''"> <!-- Se a "pesquisa" for string vazia, retorna todos os pokémons -->
                            <div v-for="pokemon in listAll" :key="pokemon.id">
                                <router-link :to="`/pokemon/${pokemon.name}`"> <!-- Router Link - Ir para a página individual do pokémon, trazendo na URL o parâmetro com o nome do Pokémon -->
                                    <li style="text-transform:uppercase;">
                                        Pokémon - {{ pokemon.name }}
                                    </li>
                                </router-link>
                            </div>
                        </div>
                        <div v-else>
                            <div v-for="pokemon in listAll" :key="pokemon.id">
                                <router-link :to="`/pokemon/${pokemon.name}`"> <!-- Router Link - Ir para a página individual do pokémon, trazendo na URL o parâmetro com o nome do Pokémon -->
                                    <li v-if="pokemon.name == search"> <!-- Rretorna o pokemon com nome igual a pesquisa-->
                                        Pokémon - {{ pokemon.name }}
                                    </li>
                                </router-link>
                            </div>
                        </div>
                    </ul>
            </b-container>
        </div>

    </div>
</template>
<script >
import pokeapi from '../../services/AppPokeApi'; //Importação do serviço axios
import AppMenuFilter from '../../components/shared/AppMenuFilter.vue'; //Importação do component de filtro

export default ({
    components:{
        AppMenuFilter
    },
    data(){
        return{
            //variável para armazenar o retorno da API
            listAll: [],
            //váriavel para armazenar o nome do campo de pesquisa
            search: ''
        }
    },
    mounted(){
        //Busca todos os Pokémons
        pokeapi //Utilizando o objeto do serviço
        .get("/pokemon/") //passando como parâmetro a URI para ser chamada na API
        .then((response) => (this.listAll = response.data.results)); //Retorna os dados da API de acordo com o response declarado
    }   
})
</script>

<style scoped>

    .list{
    padding-top: 5%;
    position: relative;
    max-width: auto;
    float: left;
    width: 100%;
    }

    .list ul,
    .list li{
    list-style: none;
    padding: 10px;
    margin: 0;
    line-height: 40px;
    cursor: pointer;
    font-size: xx-large;
    }

    .list li:hover {
    border-left: 5px solid #000000;
    background-color: rgb(255, 85, 85);
    -webkit-transition: all 0.5s ease;
    -moz-transition: all 0.5s ease;
    -o-transition: all 0.5s ease;
    -ms-transition: all 0.5s ease;
    transition: all 0.5s ease;
    color: #000;
    }

    .list li{
    padding: 30px;
    box-shadow: 0px 20px 0px 0px black;
    box-shadow: 0px 5px 5px 0px rgba(0, 0, 0, 0.5);
    }

    .list a{
    text-decoration: none;
    color: black;
    }

    /* @media - Para configurar o layout de acordo com o tamanho da tela */
    /* Tablet Portrait size to standard 960 (devices and browsers) */
    @media only screen and (min-width: 768px) and (max-width: 959px) {

        .list{
        padding-top: 10%;
        position: relative;
        max-width: auto;
        float: left;
        width: 100%;
        padding-left: 30%;
        }

        .select{
        padding-left: 2%;
        padding-top: 10%;
        padding-right: 2%;
        position: fixed;
        max-width: 25%;
        min-width: none;
        height: 1000px;
        float: left;
        box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.5);
        z-index: 90;
        }
    }
    
    /* All Mobile Sizes (devices and browser) */
    @media only screen and (max-width: 767px) {

        .list{
        padding-top: 15%;
        position: relative;
        max-width: auto;
        width: 100%;
        padding-left: 10%;
        }

        .select{
        visibility: hidden;
        }
    }

    /* Mobile Landscape Size to Tablet Portrait (devices and browsers) */
    @media only screen and (min-width: 480px) and (max-width: 767px) {

        .list{
        padding-top: 20%;
        position: relative;
        max-width: auto;
        width: 100%;
        padding-left: 5%;
        }
    }

    /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) */
    @media only screen and (min-width: 375px) and (max-width: 479px) {

        .list{
        padding-top: 25%;
        position: relative;
        max-width: auto;
        width: 100%;
        padding-left: 5%;
        }
        
        .list h1{
            font-size: 30px;
        }
    }
</style>