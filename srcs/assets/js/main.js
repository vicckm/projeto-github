let inputUser = document.getElementById("inputUser");
let botaoPesquisar = document.getElementById("botaoPesquisar");
let form = document.getElementById("form");
let paragrafo = document.querySelector(".introducao");
let imagemLogo = document.querySelector(".imagemLogo");


botaoPesquisar.addEventListener("click", event => {
    event.preventDefault()

    let urlUsuario = `https://api.github.com/users/${inputUser.value}`;
    let urlRepositorio = `https://api.github.com/users/${inputUser.value}/repos`;

    UsuarioController.geraUsuario(urlUsuario);
    RepositorioController.geraRepositorio(urlRepositorio); 
    inputUser.value = "";
})




