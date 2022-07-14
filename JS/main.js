let shop = document.getElementById("shop");

let basket = JSON.parse(localStorage.getItem("data")) || [];

let shopItemsData = [
	{
		id: "fkasf",
		name: "Casual Shirt",
		price: 50,
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
		img: "img/ OIP (1).jfif",
 	}, {
		id: "dasd",
		name: "Casual",
		price: 60,
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
		img: "img/OIP (2).jfif",
	}, {
		id: "asfas",
		name: "Shirt",
		price: 30,
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
		img: "img/OIP .jfif",
	}, {
		id: "sadas",
		name: "Classic",
		price: 1500,
		desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
		img: "img/ R (1).jfif",
	}
]

let generateShop = () => {
  return (shop.innerHTML = shopItemsData
    .map((x) => {
      let { id, name, price, desc, img } = x;
      let search = basket.find((x) => x.id === id) || [];
      return `
    <div id=product-id-${id} class="item">
        <img width="220" src=${img} alt="">
        <div class="details">
          <h3>${name}</h3>
          <p>${desc}</p>
          <div class="price-quantity">
            <h2>$ ${price} </h2>
            <div class="buttons">
              <i onclick="decrement(${id})" class="bi bi-dash-lg"></i>
              <div id=${id} class="quantity">
              ${search.item === undefined ? 0 : search.item}
              </div>
              <i onclick="increment(${id})" class="bi bi-plus-lg"></i>
            </div>
          </div>
        </div>
      </div>
    `;
    })
    .join(""));
};

generateShop();
