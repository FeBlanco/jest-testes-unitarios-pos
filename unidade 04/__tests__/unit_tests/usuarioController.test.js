const { UsuarioController } = require("../../index");

class Usuario {
  constructor(nome, email) {
    this.nome = nome;
    this.email = email;
  }
}

class BD_Oracle {
  static abriConexao() {}
  static fecharConexao() {}
}

describe("Testando a integração com banco de dados", () => {
  const jose = new Usuario("José", "jose@email.com");
  beforeEach(() => {
    BD_Oracle.abriConexao();
    console.log("Conexão aberta");
  });
  afterEach(() => {
    BD_Oracle.fecharConexao();
    console.log("Conexão fechada");
  });

  it("Deveria retornar verdadeiro se adicionou o usuário", () => {
    expect(UsuarioController.adicionar(jose)).toBeTruthy();
  });

  it("Deveria retornar verdadeiro se removeu o usuário", () => {
    expect(UsuarioController.remover(jose)).toBeTruthy();
  });
});
