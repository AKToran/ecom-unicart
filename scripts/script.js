const loadCategories = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((data) => displayCategories(data));
};

const displayCategories = (categories) => {
  const categoryContainer = document.getElementById("category-container");

  categories.forEach((category) => {
    if (categoryContainer) {
      categoryContainer.innerHTML += `<button class="btn btn-outline btn-primary">${category[0].toUpperCase() + category.slice(1)}</button>`;
    }
  });
};

const loadAllProducts = () => {
  fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => displayAllProducts(data));
};

const displayAllProducts = (products) => {
  const productContainer = document.getElementById("product-container");
  if(productContainer) productContainer.innerHTML = "";

  products.map((product) => {
    const productCard = document.createElement("div");
    productCard.classList.add("shadow-sm")
    productCard.innerHTML = `

            <div class="rounded-t-xl h-[300px] flex justify-center items-center bg-slate-300">
              <img class="w-3/4 h-[250px]" src="${product.image}" alt="photo">
            </div>
            <div class="p-4 rounded-b-xl space-y-2">

              <div class="flex justify-between">
                <p class="badge bg-slate-400">${product.category}</p>
                <p><i class="text-orange-400 fa-solid fa-star"></i>${product.rating.rate}(${product.rating.count})</p>
              </div>
              <p class="text-xl font-semibold">${product.title.slice(0,20)}...</p>
              <p class="text-xl font-bold">$${product.price}</p>
              <div class="flex gap-2">
                <button class="btn flex-1"><i class="fa-regular fa-eye"></i>Details</button>
                <button class="btn flex-1 btn-primary"><i class="fa-solid fa-cart-plus"></i>Add</button>
              </div>
            </div>
    `;

    if(productContainer) productContainer.append(productCard);
  });
};


loadCategories();
loadAllProducts();