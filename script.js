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

gerarValorAleatorio = () => {
    return Math.floor(Math.random() * 671);
}

pegarPersonagem = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagem.src = data.image;
        imagem.alt = data.name;
        nomeDoPersonagem.innerHTML = data.name;
        especie.innerHTML = data.species;
        condicao.innerHTML = data.status;
    });
}

pegarPersonagemDois = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemDois.src = data.image;
        imagemDois.alt = data.name;
        nomeDoPersonagemDois.innerHTML = data.name;
        especieDois.innerHTML = data.species;
        condicaoDois.innerHTML = data.status;
    });
}

pegarPersonagemTres = () => {
    let numeroAleatorio = gerarValorAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
        method:'GET',
        headers: {
            Accept: 'application/json',
            "Content-type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagemTres.src = data.image;
        imagemTres.alt = data.name;
        nomeDoPersonagemTres.innerHTML = data.name;
        especieTres.innerHTML = data.species;
        condicaoTres.innerHTML = data.status;
    });
}

pegarTresPersonagens = () => {
    pegarPersonagem();
    pegarPersonagemDois();
    pegarPersonagemTres();
}

botao.onclick = pegarTresPersonagens;