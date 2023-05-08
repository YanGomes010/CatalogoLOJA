

fetch("db.json").then((Response) => {
  Response.json().then((produto) => {
    var main = document.querySelector("main");
    var section_products = document.querySelector("#main_products")
    for (let i = 0; i < produto.produtos.length; i++) {
      //Criando cartão de produtos
      let card = document.createElement("div");
      card.setAttribute("class", "card");

      //Criando caixa de imagem
      let box_image = document.createElement("div");
      box_image.setAttribute("class", "box_image");

      let image = document.createElement("img");
      image.setAttribute("id", "img");
      image.src = `./images/telefone_${i}.jpg`;

      //Criando nome do produto
      let name_image = document.createElement("div");
      name_image.setAttribute("class", "name_image");
      name_image.innerText=produto.produtos[i].Nome;

      //Criando preço da imagem
      let price_image = document.createElement("div");
      price_image.setAttribute("class", "price_image");
      price_image.innerText= produto.produtos[i].preco;

      let button = document.createElement("button");
      button.setAttribute("class", "btn_buy");
      button.innerText="COMPRAR"

      box_image.appendChild(image);
      card.appendChild(box_image);
      card.appendChild(name_image);
      card.appendChild(price_image);
      card.appendChild(button);

      section_products.appendChild(card);
      main.appendChild(section_products)
    }
  });
});
