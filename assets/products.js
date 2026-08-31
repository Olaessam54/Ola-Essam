const icons = document.querySelectorAll(".product-icon");

icons.forEach((icon) => {

    icon.addEventListener("click", () => {

        const index = icon.dataset.product;

        const card = document.querySelector(
            `[data-details="${index}"]`
        );

        card.style.display = "block";

    });

});