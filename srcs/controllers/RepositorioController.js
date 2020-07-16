class RepositorioController {
    constructor() { throw new Error("Operação inválida") }

    static geraRepositorio(urlRepositorio){
        let reqGitRepos = new XMLHttpRequest();
        let divRepositorio = document.getElementById("repositorio");
        

        reqGitRepos.open("GET", urlRepositorio);

        reqGitRepos.onload = () => {
            try {
                divRepositorio.innerHTML = "";
                if(reqGitRepos.status !== 200) { throw new Error("Não foi possível realizar a requisição.2")} 
                
                let viewRepositorio = new RepositorioView();
                let reqParseRepos = JSON.parse(reqGitRepos.responseText);


                for(let i = 0; i < reqParseRepos.length; i++){
                    let repositorios = new Repositorio(reqParseRepos[i].name, reqParseRepos[i].html_url);
                    divRepositorio.innerHTML += viewRepositorio.template(repositorios.retornaRepositorio);
                }
            }

            catch(erro){
                // para não esquecer: adiciona uma mensagem abaixo do form mostrando a mensagem do erro
                console.log(erro)
            }
            
        }

        reqGitRepos.send();
    }

}