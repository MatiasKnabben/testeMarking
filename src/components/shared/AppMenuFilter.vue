<template>
    <div class="select">
            <h3>Tipo do Pokémon</h3>
                <b-form-select v-model="selected"> <!-- B-form-select - campo de select do bootstrap -->
                    <b-form-select-option :value="null" disabled>Selecione uma opção</b-form-select-option> <!-- B-form-select-option - onde atribui o valor para a opção-->
                    
                    <b-form-select-option 
                    :value="pokemonType.name" 
                    v-for="pokemonType in listAllType" 
                    :key="pokemonType.id">
                    {{ pokemonType.name }} <!-- Atribuição do valor "name" ao campo do select por meio de um v-for que percorre os dados fornecidos pela api -->
                    </b-form-select-option>

                </b-form-select>
            <hr>
                <router-link :to="`/filtro/${selected}`" exact> <!-- Router Link para a pagina de filtro carregando um parâmetro que é o campo selecionado no form-select -->
                    <b-button variant="outline-primary" class="mb-2">
                        <b-icon icon="search"></b-icon> Filtrar
                    </b-button>
                </router-link>
        </div>
</template>

<script >
    import pokeapi from '../../services/AppPokeApi'; //Importação do serviço axios

    export default ({
    data(){
        return{
            //Váriavel para retornar os dados da API
            listAllType: [],
            //Váriavel para retornar o valor selecionado no campo select
            selected: null
        }
    },
    mounted() {
        //Busca todos os tipos de Pokémon
        pokeapi
        .get("/type/")
        .then((response) => (this.listAllType = response.data.results));
    }
    })
</script>

<style scoped>
    .select{
    float: left;
    z-index: 90;
    max-width: 25%;
    height: 1000px;
    padding-top: 5%;
    min-width: none;
    position: fixed;
    padding-left: 2%;
    padding-right: 2%;
    box-shadow: 0px 0px 17px 2px rgba(0, 0, 0, 0.5);
    }
</style>