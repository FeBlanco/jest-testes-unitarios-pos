// Mockssão dublês de teste.
// São funções de simulação que permitem testar
// o comportamento de determinados componentes sem que seja necessário utilizar a real implementação.

//mocks functions: testando chamadas e os parâmetros das funções
test("Testando a quantidade de chamadas de uma função", () => {
  const mockFunction = jest.fn((x) => x * x);
  const listaDevalores = [2, 4, 6];
  listaDevalores.forEach(mockFunction);

  //expect(mockFunction.mock.calls.lenght).toBe(3);
  expect(mockFunction).toHaveBeenCalledTimes(3);
});

test("Testando os parâmetros nas chamadas das funções", () => {
  const mockFunction = jest.fn((x) => x * x);
  const listaDevalores = [2, 4, 6];
  listaDevalores.forEach(mockFunction);
  expect(mockFunction.mock.calls[0][0]).toBe(2);
  expect(mockFunction.mock.calls[1][0]).toBe(4);
  expect(mockFunction.mock.calls[2][0]).toBe(6);
});

// Mockando valores de retorno em funções
test("Testando retornos de funções", () => {
  const mockfuntion = jest.fn();
  mockfuntion.mockReturnValueOnce(true);

  expect(mockfuntion).toBeTruthy();
});

test("Testando multiplos retornos das funções", () => {
  const mockfuntion = jest.fn();
  mockfuntion
    .mockReturnValueOnce(true)
    .mockReturnValueOnce(false)
    .mockReturnValueOnce(true);

  expect(mockfuntion()).toBeTruthy();
  expect(mockfuntion()).toBeFalsy();
  expect(mockfuntion()).toBeTruthy();
});

test("Deveria  retorne os valores 1, 2 e 3 de forma sequencial a partir de uma mesma função.", () => {
  const mockfuntion = jest.fn();
  mockfuntion
    .mockReturnValueOnce(1)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(3);

  expect(mockfuntion()).toBe(1);
  expect(mockfuntion()).toBe(2);
  expect(mockfuntion()).toBe(3);
});

// Mockando módulos
const axios = require("axios");
const { getPost } = require("./index");

jest.mock("axios");

test("Testando retornos de funções", () => {
  const post = {
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  };
  const response = { data: post };
  axios.get.mockResolvedValue(response);
  return getPost().then((resp) => expect(resp.data).toEqual(post));
});
