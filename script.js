
fetch("db.json").then((Response) => {
  Response.json().then((produto) => {
    var section_products = document.querySelector("#main_products");
    for (let i = 0; i < produto.produtos.length; i++) {
      section_products.innerHTML += `
      <div class="card">
        <div class="box_image">
          <img id="img" src="./images/telefone_${i}.jpg"/>
        </div>
        <div  class="name_image">
        ${produto.produtos[i].Nome}
        </div>
        <div class="price_image">
        ${produto.produtos[i].preco}
        </div>
        <button key="${produto.produtos[i].id}" class="btn_buy">COMPRAR</button>
      </div>
      `;
    }
    let btn_buy = document.getElementsByTagName("button");

    for (let a = 0; a < btn_buy.length; a++) {
      btn_buy[a].addEventListener("click", function () {
        let key = this.getAttribute("key");
        produto.produtos[key].quantidade++;
        console.log(key)
        atualizarCarro();
        return false;
      });
    }

    function atualizarCarro(){
      
      let carrinho = document.querySelector(".carrinho");
    carrinho.innerHTML="";
    produto.produtos.map((val)=>{
      if(val.quantidade>0){
        carrinho.innerHTML+=`
        
        <p>${val.Nome} e quantidade = ${val.quantidade}</p>
        
        `
      }
    })
    }
  });
});

function abrirCarrinho(){
  let carrinho = document.querySelector(".carrinho");
  let btn_fechar = document.querySelector("#fechar")
  
  carrinho.classList.remove("none")
  btn_fechar.classList.remove("none")
  btn_fechar.classList.add("block")
}

function fechar(){
  let carrinho = document.querySelector(".carrinho");
  let btn_fechar = document.querySelector("#fechar")
  
  
  
carrinho.classList.add("none")
btn_fechar.classList.remove("block")
btn_fechar.classList.add("none")

}
