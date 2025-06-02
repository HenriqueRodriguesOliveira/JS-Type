try {
  // TENTA executar algo.
  console.log(result);
} catch (error) {
  // CAPTURA o erro para tratar
  console.log(
    "Não foi possível executar seu pedido. Tente novamente mais tarde!"
  );
} finally {
  console.log("fim");
}

let result = 0;

try {
  if (result === 0) {
    throw new Error("O valor é igual a zero.");
  }
} catch (error) {
} finally {
  console.log("Fim");
}
