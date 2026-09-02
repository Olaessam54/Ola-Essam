console.log("products.js loaded");

const icons = document.querySelectorAll(".product-icon");

const card = document.querySelector(".product-details");

const closeButton = document.querySelector(".close-product");

const image = document.querySelector(".details-image");
const title = document.querySelector(".details-title");
const price = document.querySelector(".details-price");
const description = document.querySelector(".details-description");

const colorSelect = document.querySelector(".details-color");

const sizeInput = document.querySelector(".size-input");
const arrow = document.querySelector(".arrow");
const options = document.querySelector(".options");


/* Open product */

icons.forEach((icon) => {

  icon.addEventListener("click", () => {

    const index = icon.dataset.product;

    const product = productsData[index];

    console.log(product);

    image.src = product.image;
    image.alt = product.title;

    title.textContent = product.title;
    price.textContent = product.price;
    description.textContent = product.description;


    /* Color */

    colorSelect.innerHTML = "";

    product.colors.forEach((color) => {

      const option = document.createElement("option");

      option.value = color;
      option.textContent = color;

      colorSelect.appendChild(option);

    });


    /* Size */

    options.innerHTML = "";

    sizeInput.value = "";

    product.sizes.forEach((size) => {

      const option = document.createElement("div");

      option.classList.add("option");

      option.textContent = size;

      option.dataset.value = size;

      options.appendChild(option);

    });


    /* Show card */

    card.classList.add("active");

  });

});


/* Close */

closeButton.addEventListener("click", () => {

  card.classList.remove("active");

});


/* Open size options */

arrow.addEventListener("click", () => {

  options.classList.toggle("open");

  arrow.classList.toggle("open");

});


/* Select size */

options.addEventListener("click", (e) => {

  if (e.target.classList.contains("option")) {

    sizeInput.value = e.target.dataset.value;

    options.classList.remove("open");

    arrow.classList.remove("open");

  }

});