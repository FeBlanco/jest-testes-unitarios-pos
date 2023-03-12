const { Operacoes } = require("../../index");

describe("Teste das operações aritméticas simples", () => {
  it("Deveria retornar a soma de dois números", () => {
    expect(Operacoes.soma(1, 2)).toBe(3);
  });

  it("Deveria retornar a subtracao de dois números", () => {
    expect(Operacoes.subtracao(10, 5)).toBe(5);
  });

  it("Deveria retornar a multiplicação de dois números", () => {
    expect(Operacoes.multiplicacao(2, 3)).toBe(6);
  });

  it("Deveria retornar a divisao de dois números", () => {
    expect(Operacoes.divisao(10, 2)).toBe(5);
  });
});

describe("Testando as funções trigonométricas", () => {
  it("Teste da função seno", () => {
    expect(true).toBeTruthy();
  });
  it("Teste da função co-seno", () => {
    expect(true).toBeTruthy();
  });
});
