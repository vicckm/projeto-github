class UsuarioController {
    constructor() { throw new Error("Operação inválida") }

    static geraUsuario(){
        let reqGitHub = new XMLHttpRequest();

        reqGitHub.open("GET", `https://api.github.com/users/${inputUser.value}`);

        form.addEventListener("click", (event) => {
            event.preventDefault();
            inputUser.value = "";
           
            reqGitHub.onload = () => {
                try {
                    if(reqGitHub.status !== 200) { throw new Error("Não foi possível realizar a requisição.")} 
                    
                    let divUsuario = document.getElementById("usuario");
                    let viewUsuario = new UsuarioView();
                    let reqParse = JSON.parse(reqGitHub.responseText);

                    let usuarioGit = {
                        login: reqParse.login,
                        nome: reqParse.name || "O usuário não preencheu esse dado.",
                        avatar: reqParse.avatar_url,
                        bio: reqParse.bio || "O usuário não preencheu esse dado.",
                        email: reqParse.email || "O usuário não preencheu esse dado.",
                        repos: reqParse.public_repos 
                    }
            
                    let montaUsuario = new Usuario(
                            usuarioGit.login, 
                            usuarioGit.nome, 
                            usuarioGit.avatar, 
                            usuarioGit.bio,
                            usuarioGit.email,
                            usuarioGit.repos
                        );

                    paragrafo.classList.add("tiraIntroducao");
                    imagemLogo.classList.add("tiraIntroducao");
                    divUsuario.innerHTML = viewUsuario.template(montaUsuario.retornaUsuario);
                }

                catch(erro){
                    // para não esquecer: adiciona uma mensagem abaixo do form mostrando a mensagem do erro
                    console.log(erro)
                }
                

                
                
            }
           
           
        })
        

        reqGitHub.send();
    }

}