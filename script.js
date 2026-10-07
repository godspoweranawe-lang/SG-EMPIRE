let cart = [];


// =========================
// ADD PRODUCT TO CART
// =========================

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " has been added to your cart!");
}


// =========================
// UPDATE CART
// =========================

function updateCart() {

    const cartItems = document.getElementById("cart-items");
    const cartCount = document.getElementById("cart-count");
    const cartTotal = document.getElementById("cart-total");

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item, index) => {

        total += item.price;

        const div = document.createElement("div");

        div.className = "cart-item";

        div.innerHTML = `
            <strong>${item.name}</strong>

            <p>₦${item.price.toLocaleString()}</p>

            <button onclick="removeFromCart(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(div);
    });

    cartCount.textContent = cart.length;

    cartTotal.textContent =
        total.toLocaleString();
}


// =========================
// REMOVE PRODUCT
// =========================

function removeFromCart(index) {

    cart.splice(index, 1);

    updateCart();
}


// =========================
// OPEN CART
// =========================

function openCart() {

    document.getElementById("cart").style.display = "block";
}


// =========================
// CLOSE CART
// =========================

function closeCart() {

    document.getElementById("cart").style.display = "none";
}