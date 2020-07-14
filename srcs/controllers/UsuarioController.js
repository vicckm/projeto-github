class UsuarioController {
    constructor() { throw new Error("Operação inválida") }

    static geraUsuario(){
        let reqGitHub = new XMLHttpRequest();

        reqGitHub.open("GET", "https://api.github.com/users/Felipe-Streva");

        form.addEventListener("click", (event) => {
            event.preventDefault();
           
           
            reqGitHub.onload = () => {
                try {
                    if(reqGitHub.status !== 200) { throw new Error("Não foi possível realizar a requisição.")} 
                
                    let divUsuario = document.getElementById("usuario");
                    let reqParse = JSON.parse(reqGitHub.responseText);

                    let usuarioGit = {
                        id: reqParse.id,
                        nome: reqParse.name || "O usuário não preencheu esse dado.",
                        bio: reqParse.bio || "O usuário não preencheu esse dado.",
                        blog: reqParse.blog || "O usuário não preencheu esse dado.",
                        avatar: reqParse.avatar_url,
                        email: reqParse.email || "O usuário não preencheu esse dado."  
                    }
            
                    let montaUsuario = new Usuario(
                            usuarioGit.id, 
                            usuarioGit.nome, 
                            usuarioGit.avatar, 
                            usuarioGit.bio, 
                            usuarioGit.blog,
                            usuarioGit.email
                        );
                    console.log(montaUsuario)
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