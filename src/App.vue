<template>
  <div>
    <AppHeader/> <!-- Utilizando o component Appheader que será apresentável em todas as páginas -->
    <router-view/> <!-- Content da página inicial - Todas os components com rotas são apresentadas aqui -->
  </div>
</template>

<script>
import AppHeader from './components/shared/AppHeader.vue'; //Importação do header AppHeader

export default {
  name: 'App', //Nome do component para exportação
  components:{
    AppHeader //Declaração do component para ser utilizado na página
  }
}
</script>

<style>

  #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  }

</style>
