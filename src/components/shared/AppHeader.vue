<template>
  <div class="nav-bar">    
    <div class="nav-up-side">
      <b-navbar>  <!-- Barra de navegação superior -->
        <b-navbar-nav > <!-- "Container" para conter os itens da navBar -->
          <b-nav-item>    <!-- item do NavBar -->
            <router-link to="/" exact> <!-- Router link - ir a página home-->
              <b-img :src="require('../../assets/images/pokemon-logo-2.png')" fluid class="img-logo"></b-img>
            </router-link>
          </b-nav-item>
          <b-nav-item>
            <router-link to="/listall" class="btn btn-primary pill mb-2 mr-2 mt-2" exact> <!-- Router Link - ir a página lista todos os pokémons -->
              Pokémons
            </router-link>
          </b-nav-item>
        </b-navbar-nav> 
      </b-navbar>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App-header'
}
</script>

<style scoped>
  .img-logo{
    width: 100%;
    height: 45px;
  }
  .nav-bar{
    z-index:99;
    width: 100%;
    display: block;
    position: fixed;
    color: rgb(0, 0, 0);
    background-color: rgb(255, 85, 85);
  }
  body {
    margin: 0px;
    padding: 0px;
  }
</style>
