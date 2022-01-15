const botao = document.querySelector('button');
const condicao = document.querySelector('#condicao');
const condicaoDois = document.querySelector('#condicaoDois');
const condicaoTres = document.querySelector('#condicaoTres');
const especie = document.querySelector('#especie');
const especieDois = document.querySelector('#especieDois');
const especieTres = document.querySelector('#especieTres');
const imagem = document.querySelector('#imagem');
const imagemDois = document.querySelector('#imagemDois');
const imagemTres = document.querySelector('#imagemTres');
const nomeDoPersonagem = document.querySelector('#nome');
const nomeDoPersonagemDois = document.querySelector('#nomeDois');
const nomeDoPersonagemTres = document.querySelector('#nomeTres');


pegarPersonagem = () => {
    return fetch(`https://rickandmortyapi.com/api/character/2`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.src = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

botao.onclick = pegarPersonagem;