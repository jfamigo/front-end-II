const formulario = document.querySelector('form');
const divCartas = document.querySelector(".col-12");
var cartas = [];

const addCarta = function(titulo, origem, descricao, imagem){

    var template =  ` 
    <div class="container-fluid">
		<div class="cards d-flex flex-wrap">

            <!-- Cards -->
                    <div class="cards-module">
                    <!-- Thumbnail-->
                        <div class="thumbnail">
                            <div class="circle">
                            <div class="check">Check</div>
                            <div class="point">Point</div>
                        </div><img src="${imagem.value}" />
                    </div>
                    
                    <!-- Cards Content-->
                        <div class="post-content">
                            <div class="category">${origem.value}</div>
                            <h1 class="title">${titulo.value}</h1>
                            <h2 class="about">${descricao.value}</h2>
                        </div>
            
        </div>
    </div>
  
    `
    divCartas.innerHTML += template;
}


formulario.addEventListener("submit", (event) => {
    
    
    let titulo = document.querySelector('.name');
    // let tituloconteudo = titulo.value();
    
    let origem = document.querySelector('.origin');
    // let origemconteudo = origem.value();
    
    let descricao = document.querySelector('.description');
    // let descricaoconteudo = descricao.value();
    
    let imagem = document.querySelector('.pic');
    // let urlimagem = imagem.value();

    var carta = {
        titulo: titulo,
        origem: origem,
        descricao: descricao,
        imagem: imagem
    }
    cartas.push(carta);

    addCarta(titulo, origem, descricao, imagem);
    
    event.preventDefault();

})



// Veja se esse preventDefault() funciona para impedir a pagina de carregar. Se funcionar, veja se isso funciona direitinho. 
// botao.addEventListener('.form-btn',(event) => {
//     event.preventDefault();

//     // Aqui fica a montagem das novas tags que formaram os cards após a coleta das informações. 
//     // Caso isso não funcione, tente criar uma div pra colocar as cartas como filhos
//     // const divcartas = document.createElement('div');
//     // divcartas.innerHTML += cardjs;
//     // document.body.appendChild(divcartas);
// })


// $(window).load(function() {
//     $('.post-module').hover(function() {
//       $(this).find('.description').stop().animate({
//         height: "toggle",
//         opacity: "toggle"
//       }, 300);
//     });
//   });




