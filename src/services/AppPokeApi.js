import axios from "axios"; //Importação do Axios - Axios é um cliente HTTP baseado em Promises para fazer requisições.

const pokeapi = axios.create({ //Crio uma constante para poder armazaenar o prefixo da minha URL
  baseURL: "https://pokeapi.co/api/v2/", //Prefixo da URL
});

export default pokeapi; //Nome para exportação e ser utilizado na aplicação inteira, mudando apenas a URI