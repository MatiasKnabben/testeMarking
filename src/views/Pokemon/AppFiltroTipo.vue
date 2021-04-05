<template>
    <div>
        <div>
            <AppMenuFilter></AppMenuFilter> <!-- Utilizando o 'component' do menu de filtro que foi importado -->
        </div>

        <div class="list"> <!-- Contém a lista de pokémons filtrados -->
            <b-container fluid="sm">
                <h1>Todos os Pokémons</h1>
                    <h6>Filtro: {{ this.$route.params.filter }}</h6> <!-- Recebendo o valor do parametro que foi passado pela URL do router -->
                        <ul>
                            <div v-for="filtered in listAllTypes" :key="filtered.id">
                                <router-link :to="`/pokemon/${filtered.pokemon.name}`">
                                    <li>
                                        <p style="text-transform:uppercase;">Pokémon - {{ filtered.pokemon.name }} </p>
                                    </li>
                                </router-link>
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
        AppMenuFilter //Declarando o component para ser utlizado na página
        
    },
    data(){
        return{
            //Váriavel para armazenar o retorno da API
            listAllTypes: [],
            filter: this.$route.params.filter
        }
    },
    watch: {
        '$route'(to) { //Filtrando as alterações do parametro da rota. Para atualizar os dados filtrados 
            this.filter = to.params.filter

            pokeapi 
            .get("/type/"+to.params.filter)
            .then((response) => (this.listAllTypes = response.data.pokemon))
        }
    },
    mounted(){
        pokeapi 
        .get("/type/"+this.filter)
        .then((response) => (this.listAllTypes = response.data.pokemon))
    },
   })
</script>

<style scoped>
    .list{
    float: left;
    width: 100%;
    padding-top: 5%;
    max-width: auto;
    position: relative;
    }

    .list ul,
    .list li{
    margin: 0;
    padding: 10px;
    cursor: pointer;
    list-style: none;
    line-height: 40px;
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

    /* Mobile Portrait Size to Mobile Landscape Size (devices and browsers) CELULAR*/
    @media only screen and (max-width: 479px) {

        .list{
        padding-top: 25%;
        }
    }
</style>