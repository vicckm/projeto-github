class RepositorioController {
  constructor() {
    throw new Error("Operação inválida");
  }

  static geraRepositorio(urlRepositorio) {
    let divRepositorio = document.getElementById("repositorio");
    divRepositorio.innerHTML = "";

    let reqGitRepos = new XMLHttpRequest();

    reqGitRepos.open("GET", urlRepositorio);

    reqGitRepos.onload = () => {
      if (reqGitRepos.status !== 200) {
        throw new Error("Não foi possível realizar a requisição.");
      }

      let viewRepositorio = new RepositorioView();
      let reqParseRepos = JSON.parse(reqGitRepos.responseText);

      for (let i = 0; i < reqParseRepos.length; i++) {
        let repositorios = new Repositorio(
          reqParseRepos[i].name,
          reqParseRepos[i].html_url
        );
        divRepositorio.innerHTML += viewRepositorio.template(
          repositorios.retornaRepositorio
        );
      }
    };

    reqGitRepos.send();
  }
}
