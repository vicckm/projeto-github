class UsuarioView {

    template(usuario){
        return ` 
            
                <div class="usuario" id="usuario">
                    <img class="avatarGit" src="${usuario.avatar}">

                    <div>
                        <p>Login: ${usuario.nome}</p>
                    
                    </div>
            
                </div>
            
        `;
    }
}