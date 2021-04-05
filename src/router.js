import Vue from 'vue'
import VueRouter from 'vue-router'

//Importação de todos os components que irão possuir Rotas
import ListAll from './views/Pokemon/AppListAll.vue'
import PokePage from './views/Pokemon/AppPokemonPage.vue'
import FiltroTipo from './views/Pokemon/AppFiltroTipo.vue'
import Home from './views/Home.vue';
import PageNotFound from './components/AppPageNotFound.vue'

//Utilização do VueRouter
Vue.use(VueRouter)

export default new VueRouter({

  mode: 'history',
  linkActiveClass:'active',
  routes: [ //Definição de todas as Rotas de páginas da aplicação
    { path: '/filtro/:filter' , component: FiltroTipo   },
    { path: '/pokemon/:nome'  , component: PokePage     },
    { path: '/listall'        , component: ListAll      },
    { path: '/'               , component: Home         },
    { path: '*'               , component: PageNotFound } //Rota de escape, para quando uma URL não for identificada mostra a pagina de NotFound.
  ]
})