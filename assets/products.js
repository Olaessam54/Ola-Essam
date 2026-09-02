console.log("products.js loaded");

const icons = document.querySelectorAll(".product-icon");

const card = document.querySelector(".product-details");

const image = document.querySelector(".details-image");
const title = document.querySelector(".details-title");
const price = document.querySelector(".details-price");
const description = document.querySelector(".details-description");

const colorOptions = document.querySelector(".color-options");

const sizeInput = document.querySelector(".size-input");
const options = document.querySelector(".options");
const arrow = document.querySelector(".arrow");

const closeButton = document.querySelector(".close-product");


// =========================
// Open Product
// =========================

icons.forEach((icon) => {

  icon.addEventListener("click", () => {

    // Product data

    const productTitle = icon.dataset.title;
    const productPrice = icon.dataset.price;
    const productImage = icon.dataset.image;
    const productDescription = icon.dataset.description;

    const colors = JSON.parse(icon.dataset.colors || "[]");
      console.log("Product:", productTitle);
      console.log("Colors:", colors);

    const sizes = JSON.parse(icon.dataset.sizes || "[]");


    // =========================
    // Product Information
    // =========================

    image.src = productImage;
    image.alt = productTitle;

    title.textContent = productTitle;

    price.textContent = productPrice;

    description.textContent = productDescription;


    // =========================
    // Colors
    // =========================

    colorOptions.innerHTML = "";

    colors.forEach((color) => {

      const colorBox = document.createElement("button");

      colorBox.type = "button";

      colorBox.classList.add("color-box");

      colorBox.textContent = color;

      colorBox.dataset.color = color;

      // Border color comes from Shopify
      colorBox.style.borderColor = color;

      colorOptions.appendChild(colorBox);

    });


    // =========================
    // Sizes
    // =========================

    options.innerHTML = "";

    sizeInput.value = "";

    sizes.forEach((size) => {

      const option = document.createElement("div");

      option.classList.add("option");

      option.textContent = size;

      option.dataset.value = size;

      options.appendChild(option);

    });


    // Close size dropdown

    options.classList.remove("open");

    arrow.classList.remove("open");


    // Remove previous selected color

    document.querySelectorAll(".color-box").forEach((box) => {

      box.classList.remove("selected");

    });


    // Open product details card
const product = icon.closest(".product");
const list = document.querySelector(".product-list");

const productRect = product.getBoundingClientRect();
const listRect = list.getBoundingClientRect();

const cardWidth = 331;
const gap = 20;

const spaceRight = window.innerWidth - productRect.right;
const spaceLeft = productRect.left;


// إزالة أي transform قديم
card.style.transform = "";


// مكان الكارد عموديًا
card.style.top =
  productRect.top - listRect.top + "px";


// على اليمين
if (spaceRight >= cardWidth + gap) {

  card.style.left =
    productRect.right - listRect.left + gap + "px";

}


// على الشمال
else if (spaceLeft >= cardWidth + gap) {

  card.style.left =
    productRect.left - listRect.left - cardWidth - gap + "px";

}


// لو مفيش مساحة
else {

  card.style.left = "50%";

  card.style.transform =
    "translateX(-50%)";

}

card.classList.add("active");
  })})

// =========================
// Size Dropdown
// =========================

arrow.addEventListener("click", () => {

  options.classList.toggle("open");

  arrow.classList.toggle("open");

});


// =========================
// Select Size
// =========================

options.addEventListener("click", (e) => {

  if (e.target.classList.contains("option")) {

    sizeInput.value = e.target.dataset.value;

    options.classList.remove("open");

    arrow.classList.remove("open");

  }

});


// =========================
// Select Color
// =========================

colorOptions.addEventListener("click", (e) => {

  if (e.target.classList.contains("color-box")) {

    document.querySelectorAll(".color-box").forEach((box) => {

      box.classList.remove("selected");

    });

    e.target.classList.add("selected");

  }

});


// =========================
// Close Product Card
// =========================

closeButton.addEventListener("click", () => {

  card.classList.remove("active");

  options.classList.remove("open");

  arrow.classList.remove("open");

});


// =========================
// Close when clicking outside
// =========================

document.addEventListener("click", (e) => {

  if (
    !card.contains(e.target) &&
    !e.target.closest(".product-icon")
  ) {

    card.classList.remove("active");

    options.classList.remove("open");

    arrow.classList.remove("open");

  }

});