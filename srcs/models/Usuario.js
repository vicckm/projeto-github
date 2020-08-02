class Usuario {
  constructor(login, nome, avatar, bio, email, repos) {
    this._login = login;
    this._nome = nome;
    this._avatar = avatar;
    this._bio = bio;
    this._email = email;
    this._repos = repos;
  }

  _retornaUsuario() {
    return {
      login: this._login,
      nome: this._nome,
      avatar: this._avatar,
      bio: this._bio,
      email: this._email,
      repos: this._repos,
    };
  }

  get retornaUsuario() {
    return this._retornaUsuario();
  }
}
