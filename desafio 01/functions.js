const foto_produto = document.getElementById("foto_produto");

function teste() {
     hover_imagem.style.visibility = "visible";
   setTimeout(function () {
     hover_imagem.style.visibility = "hidden";
   }, 500);
console.log("teste")
}
foto_produto.addEventListener('mouseenter', teste);
