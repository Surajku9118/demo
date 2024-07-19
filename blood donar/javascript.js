document.addEventListener("DOMContentLoaded", function () {
    const MAX_BOOKS_IN_CART = 10;
    let cart = [];

    // Event listener for adding books to cart
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", function () {
            const bookId = button.dataset.id;
            const bookTitle = button.parentNode.querySelector(".card-title").textContent;

            if (cart.length < MAX_BOOKS_IN_CART) {
                cart.push({ id: bookId, title: bookTitle });
                updateCartUI();
            } else {
                alert("You can only add up to 10 books to your cart.");
            }
        });
    });

    // Function to update the cart UI
    function updateCartUI() {
        const cartList = document.getElementById("cart-list");
        cartList.innerHTML = ""; // Clear existing cart items

        cart.forEach(item => {
            const li = document.createElement("li");
            li.textContent = item.title;
            cartList.appendChild(li);
        });

        // Update cart count indicator
        document.getElementById("cart-count").textContent = cart.length;
    }



    
















});
