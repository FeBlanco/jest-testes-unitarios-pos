// Stubs são dublês de testes com comportamento pré-programado;
// podem substituir objetos ou funções reais e podem retornar um valor determinado,
// independente dos argumentos recebidos;
// são muito utilizado para o teste de estado
// e contribuem nos testes evitando a utilização de classes ou interfaces inconvenientes.

const consultaUsuario = jest.fn((id) => {
  return {
    id: 1,
    nome: "joão",
    idade: 40,
  };
});

test("Deveria retornar um usuario joão do banco de dados", () => {
  const usuario = consultaUsuario(1);
  expect(usuario).toEqual({
    id: 1,
    nome: "joão",
    idade: 40,
  });
});

test("Deveria verificar o estado dos parâmetros do objeto", () => {
  const usuario = consultaUsuario(1);
  expect(usuario).toMatchObject({
    id: expect.any(Number),
    nome: expect.any(String),
    idade: expect.any(Number),
  });
});

// Stubs como funções ou métodos
const salvarUsuarioStub = jest.fn((user) => {
  // if (user === 1) {
  //   return true;
  // } else {
  //   return false;
  // }

  return user === 1 ? true : false;
});

test("Deveria verificar o estado ada função salvarUsuario", () => {
  expect(salvarUsuarioStub(1)).toBeTruthy();
  expect(salvarUsuarioStub(2)).toBeFalsy();
  expect(salvarUsuarioStub(2)).not.toBeTruthy();
  expect(salvarUsuarioStub(1)).not.toBeFalsy();
});
