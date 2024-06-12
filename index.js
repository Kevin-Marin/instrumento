let entrada_usuario;

console.log("Você toca algum instrumento?");

process.stdin.on("data", function (data) {
  entrada_usuario = data.toString().trim();

  if (entrada_usuario == "s" || entrada_usuario == "sim") {
    console.log("Toca instrumento");
  } else {
    console.log("Não toca instrumento");
  }
});
