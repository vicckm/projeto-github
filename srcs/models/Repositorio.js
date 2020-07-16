class Repositorio {
    constructor(nome, url) {
        this._nome = nome;
        this._url = url;
    }

    _retornaRepositorio() {
        return {
            nome: this._nome,
            url: this._url
        }
    }

    get retornaRepositorio() {
        return this._retornaRepositorio();
    }
}