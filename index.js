let entrada_usuario;
let instrumento;

console.log("Você toca algum instrumento?");

process.stdin.on("data", function (data) {
  entrada_usuario = data.toString().trim();

  if (entrada_usuario == "s" || entrada_usuario == "sim") {
    console.log("Qual instrumento?");
  }else if (!instrumento) {
    instrumento = entrada_usuario;
    if (instrumento == "guitarra") {
      console.log("Então você é guitarrista!")
    }else if (instrumento == "bateria") {
      console.log("Então você é baterista!")
    }else if (instrumento == "baixo") {
      console.log("Então você é baixista!")
    }
    process.exit();
  } else {
    console.log("Não toca instrumento");
  }
});
