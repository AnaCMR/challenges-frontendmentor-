const foto_produto = document.getElementById("foto_produto");

let block = false 
function imagem_saber_mais() {
     hover_imagem.style.visibility = "visible";
     }


function imagem_inicial(){
    setTimeout (function(){
        hover_imagem.style.visibility = "hidden";
    })

}

foto_produto.addEventListener('mouseenter', imagem_saber_mais);
foto_produto.addEventListener('mouseleave',imagem_inicial);
