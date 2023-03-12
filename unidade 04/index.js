exports.Operacoes = class {
  static soma(a, b) {
    return a + b;
  }
  static subtracao(a, b) {
    return a - b;
  }
  static multiplicacao(a, b) {
    return a * b;
  }
  static divisao(a, b) {
    return a / b;
  }
};

exports.UsuarioController = class {
  static adicionar(usuario) {
    return true;
  }
  static remover(usuario) {
    return true;
  }
};
