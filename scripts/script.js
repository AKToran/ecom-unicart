const loadCategories = () =>{
  fetch("https://fakestoreapi.com/products/categories")
  .then(res => res.json())
  .then(data => displayCategories(data))
}

const displayCategories = (categories) =>{
  const categoryContainer = document.getElementById("category-container");

  categories.forEach(category =>{
    categoryContainer.innerHTML+= `<button class="btn btn-outline btn-primary">${category[0].toUpperCase()+category.slice(1)}</button>`
  })
}


loadCategories();