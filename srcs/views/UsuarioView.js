class UsuarioView {

    template(usuario){
        return ` 
            
        <div class="usuario" id="usuario">
            <img class="avatarGit" src="${usuario.avatar}">

            <div class="descricaoUsuario">
                <p><span class="spanUsuario">Login:</span>  ${usuario.login}</p>
                <p><span class="spanUsuario">Nome:</span>  ${usuario.nome}</p>
                <p><span class="spanUsuario">Biografia:</span>  ${usuario.bio}</p>
                <p><span class="spanUsuario">E-mail:</span>  ${usuario.email}</p>
                <p><span class="spanUsuario">Repositório:</span>  ${usuario.repos}</p>
            </div>
        </div>
                    
            
              
            
        `;
    }
}
