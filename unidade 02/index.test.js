// TDD
// 1 - Escreva um teste que falhe (Vermelho)
// 2 - Escreva um código para passar no teste (Verde) baby-step
// 3 - Elimine a redundância (Refatorar)
const { soma, subtracao } = require("./index");
test("Deveria retornar a soma dos valores", () => {
  expect(soma(2, 2)).toBe(4);
  expect(soma(10, 10)).toBe(20);
});

test("Deve lançar uma exceção caso os dois valores recebidos não sejam numéricos", () => {
  expect(() => soma("a", "b")).toThrow();
  expect(() => soma("a", "b")).toThrow(Error);
});

test("Deve lançar uma exceção caso apenas um dos valores não seja númerico", () => {
  expect(() => soma("a", 1)).toThrow();
  expect(() => soma(1, "b")).toThrow();
  expect(() => soma("a", 1)).toThrow(Error);
  expect(() => soma(1, "b")).toThrow(Error);
});

test("Deveria retornar a subtração dos valores", () => {
  expect(subtracao(5, 2)).toBe(3);
  expect(subtracao(10, 5)).toBe(5);
});

test("Deve lançar uma exceção caso os dois valores recebidos não sejam numéricos", () => {
  expect(() => subtracao("a", "b")).toThrow();
  expect(() => subtracao("a", "b")).toThrow(Error);
});

test("Deve lançar uma exceção caso apenas um dos valores não seja númerico", () => {
  expect(() => subtracao("a", 1)).toThrow();
  expect(() => subtracao(1, "b")).toThrow();
  expect(() => subtracao("a", 1)).toThrow(Error);
  expect(() => subtracao(1, "b")).toThrow(Error);
});
