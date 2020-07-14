class Usuario {
    constructor(id, nome, avatar, bio, blog, email){
        this._id = id;
        this._nome = nome;
        this._avatar = avatar;
        this._bio = bio;
        this._blog = blog;
        this._email = email;
    }

    _retornaUsuario(){
        return {
            id: this._id,
            nome: this._nome,
            avatar: this._avatar,
            bio: this._bio,
            blog: this._blog,
            email: this._email
        }
    }

     get retornaUsuario(){
         return this._retornaUsuario();
     }

}