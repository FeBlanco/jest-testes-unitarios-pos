exports.soma = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a + b;
  } else {
    throw new Error("Incorrect data type");
  }
};

exports.subtracao = function (a, b) {
  if (typeof a === "number" && typeof b === "number") {
    return a - b;
  } else {
    throw new Error("Incorrect data type");
  }
};
