<template>
    <div class="not-found">
        <img :src="require('../assets/images/pokemon-logo-2.png')" alt="logo" height="250px" width="800px"> <!-- Imagem da logo -->
            <h1>Página não encontrada - 404 Not found</h1>
                <router-link to="/" class="btn btn-outline-primary mb-2 mr-2 mt-2" exact> <!-- Router link - voltar para a Home-->
                    <b-icon icon="arrow-left" />Home <!-- B-icon - icone do bootstrap -->
                </router-link>
    </div>
</template>

<style scoped>

    .not-found{
    padding-top: 15%;
    text-align: center;
    font-family: cursive;
    }

</style>