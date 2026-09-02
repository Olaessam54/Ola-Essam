const icons = document.querySelectorAll(".product-icon");
const closeButtons = document.querySelectorAll(".close-product");

icons.forEach((icon) => {

    icon.addEventListener("click", () => {

        const index = icon.dataset.product;

        const card = document.querySelector(
            `[data-details="${index}"]`
        );

        card.style.display = "block";

    });

});


closeButtons.forEach((button) => {

    button.addEventListener("click", () => {

        const card = button.closest(".product-details");

        card.style.display = "none";

    });

});