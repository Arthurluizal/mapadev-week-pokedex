/*
quando clicar no pokemon temos que esconder o cartao 
do pokemon aberto e mostrar o cartao correspondente selecionado

pra isso temos que trabalhar com dois elementos
- listagem 
- cartao pokemon

precisamos criar duas variaves no js para 
trabalhar com os elementos da tela

vamos precisar trabalhar com elemento de click
feito pelo usuario na listagem de pokemon

- remover a classe aberto so do cartao aberto 
- ao clicar em pokemon da listagem pegamos o id desse pokemon
pra saber qual cartao mostrar
- remover a classe ativa que marca o pokemon selacionado
-adicionar a classe da lista selecionado
*/


const listaSelecaoPokemon = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelectorAll('.cartao-pokemon')

listaSelecaoPokemon.forEach(pokemon => {

    pokemon.addEventListener('click', () => {

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = 'cartao-' + idPokemonSelecionado


        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)
        cartaoPokemonParaAbrir.classList.add('aberto')

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')

    })
})