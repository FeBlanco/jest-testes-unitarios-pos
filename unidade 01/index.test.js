// Conhecendo o Jest e Matchers Comuns
//.toBe() função testa a igualdade exata, semelhante ao operador relacional '==='
const { soma, subtração } = require("./index");
test("Deveria retornar a soma entre dois números", () => {
  expect(soma(2, 2)).toBe(4);
});

test("Deveria retornar a subtração entre dois números", () => {
  expect(subtração(10, 5)).toBe(5);
});

//.toEqual() avalia apenas os valores, e como os valores de cada uma das propriedades dos objetos correspondem,
test("Teste de igualdade com o ToEqual", () => {
  const a = {
    one: 1,
    two: 2,
  };
  expect(a).toEqual({ one: 1, two: 2 });
});

// .not() Ela permite que se teste um resultado específico que é indesejado.
function totalDeParcelas(p) {
  return p;
}
test("Verificar se o total de parcelas é diferente de 0", () => {
  expect(totalDeParcelas(1)).not.toBe(0);
  //   expect(totalDeParcelas(0)).not.toBe(0);
});

// .toMatch() Essa função avalia uma string a partir de uma expressão regular
function getEmail(email) {
  return email;
}
test("Verificar se o formato do e-mail retornado é válido", () => {
  expect(getEmail("aluno@uninabuco.com.br")).toMatch(
    /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i
  );
});

// Testando valores booleanos, nulos e indefinidos
function getNome(nome) {
  return nome;
}

test("Verifica se o objeto é nulo ou indefinido", () => {
  const nome = getNome("Fulano");

  expect(nome).not.toBeNull();
  expect(nome).toBeDefined();
  expect(nome).not.toBeUndefined();
});

//pode combinar as funções toBeTruthy() e toBeFalsy() com o .not para realizar qualquer tipo de avaliação booleana
function isAtivo(func) {
  return func.situacaoAtivo;
}

test("Verificar se o funcionario é ativo", () => {
  const funcionario = {
    nome: "xxx",
    sobrenome: "yyy",
    situacaoAtivo: true,
  };

  expect(isAtivo(funcionario)).not.toBeFalsy();
  expect(isAtivo(funcionario)).toBeTruthy();
});

// Testando números
function getNota(disciplina) {
  const disc = disciplina;
  const nota = Math.random() * (10 - 0) + 0;
  return nota;
}

test("Verifica se a nota está dentro de um intervalo válido", () => {
  expect(getNota(234)).not.toBeGreaterThan(10);
  expect(getNota(234)).not.toBeLessThan(0);
});

// interessante de ressaltar é que não é recomendado o uso do toBe() ou toEqual() para testar pontos flutuantes.
// mais recomendado que utilizemos a função toBeClosedTo() para esses casos.
test("Verifica  a corretude da soma de pontos flutuantes", () => {
  //expect(0.1 + 0.2).toBe(0.3);
  expect(0.1 + 0.2).toBeCloseTo(0.3);
});

// Testando Arrays
//Pode-se utilizar a função toContain() para verificar se um determinado item está contido dentro de um objeto iterável.
const estados = ["PE", "PB", "RN"];

test.only("Verificar objetos dentro de um array", () => {
  expect(estados).toContain("PE");
  expect(estados).not.toContain("SP");
});

//Testando Exceções
// utilizar a função toThrow()  sem nenhum argumento, testamos simplesmente se a função getInfoApi() lança algum tipo de erro.
// Porém, podemos também verificar se além de lançar o erro, ele corresponde ao esperado.
const getInfoApi = () => {
  //ocorre uma condição que retorna um erro
  throw new Error();
};

test.only("Verifica se laná a exceção corretamente", () => {
  expect(getInfoApi).toThrow();
  expect(getInfoApi).toThrow(Error);
});
