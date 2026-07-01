const bar = document.getElementById("bar");
const nav = document.getElementById("navbar"); 
const close = document.getElementById("close"); 

if (bar) {
    bar.addEventListener("click", (e) => {
        e.preventDefault();
        if (nav) nav.classList.add("active");
    });
} 

if (close) {
    close.addEventListener("click", (e) => {
        e.preventDefault();
        if (nav) nav.classList.remove("active");
    });
}

const themeToggle = document.getElementById("theme-toggle");
const mobileThemeToggle = document.getElementById("mobile-theme-toggle");

const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const iconClass = theme === "dark" ? "fas fa-sun" : "far fa-moon";
    if (themeToggle) {
        const icon = themeToggle.querySelector("i");
        if (icon) icon.className = iconClass;
    }
    if (mobileThemeToggle) {
        const icon = mobileThemeToggle.querySelector("i");
        if (icon) icon.className = iconClass;
    }
};

const savedTheme = localStorage.getItem("theme") || "light";
setTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setTheme(currentTheme === "dark" ? "light" : "dark");
    });
}

if (mobileThemeToggle) {
    mobileThemeToggle.addEventListener("click", (e) => {
        e.preventDefault();
        const currentTheme = document.documentElement.getAttribute("data-theme");
        setTheme(currentTheme === "dark" ? "light" : "dark");
    });
}

let cart = JSON.parse(localStorage.getItem("cart")) || [];

const updateCartBadges = () => {
    const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
    const cartBadge = document.getElementById("cart-badge");
    const mobileCartBadge = document.getElementById("mobile-cart-badge");
    if (cartBadge) cartBadge.innerText = totalQty;
    if (mobileCartBadge) mobileCartBadge.innerText = totalQty;
};

const saveCart = () => {
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartBadges();
    renderCart();
};

const showToast = (message) => {
    const container = document.getElementById("toast-container");
    if (!container) return;
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.innerHTML = `<span>${message}</span><i class="far fa-times" style="cursor:pointer"></i>`;
    container.appendChild(toast);
    
    toast.querySelector("i").addEventListener("click", () => {
        toast.remove();
    });

    setTimeout(() => {
        toast.classList.add("fade-out");
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
};

const addToCart = (id, name, price, img, qty, size) => {
    const existingItem = cart.find(item => item.id === id && item.size === size);
    if (existingItem) {
        existingItem.qty += qty;
    } else {
        cart.push({ id, name, price, img, qty, size });
    }
    saveCart();
    showToast(`Added ${qty} x ${name} (${size}) to cart`);
};

const cartSidebar = document.getElementById("cart-sidebar");
const cartBtn = document.getElementById("cart-btn");
const mobileCartBtn = document.getElementById("mobile-cart-btn");
const cartClose = document.getElementById("cart-close");

if (cartBtn) {
    cartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cartSidebar) cartSidebar.classList.add("active");
    });
}

if (mobileCartBtn) {
    mobileCartBtn.addEventListener("click", (e) => {
        e.preventDefault();
        if (cartSidebar) cartSidebar.classList.add("active");
    });
}

if (cartClose) {
    cartClose.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (cartSidebar) cartSidebar.classList.remove("active");
    });
}

const renderCart = () => {
    const container = document.getElementById("cart-items-container");
    if (!container) return;
    container.innerHTML = "";
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price * item.qty;
        const itemEl = document.createElement("div");
        itemEl.className = "cart-item";
        itemEl.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="cart-item-details">
                <h4>${item.name}</h4>
                <div class="price">$${item.price} (${item.size})</div>
                <div class="cart-item-qty">
                    <button class="qty-dec" data-index="${index}">-</button>
                    <input type="number" value="${item.qty}" min="1" readonly>
                    <button class="qty-inc" data-index="${index}">+</button>
                </div>
            </div>
            <i class="far fa-trash cart-item-remove" data-index="${index}"></i>
        `;
        container.appendChild(itemEl);
    });

    const totalPriceEl = document.getElementById("cart-total-price");
    if (totalPriceEl) totalPriceEl.innerText = `$${total.toFixed(2)}`;
};

const cartItemsContainer = document.getElementById("cart-items-container");
if (cartItemsContainer) {
    cartItemsContainer.addEventListener("click", (e) => {
        const index = parseInt(e.target.getAttribute("data-index"));
        if (isNaN(index)) return;
        
        if (e.target.classList.contains("qty-dec")) {
            if (cart[index].qty > 1) {
                cart[index].qty--;
            } else {
                cart.splice(index, 1);
            }
            saveCart();
        } else if (e.target.classList.contains("qty-inc")) {
            cart[index].qty++;
            saveCart();
        } else if (e.target.classList.contains("cart-item-remove")) {
            cart.splice(index, 1);
            saveCart();
        }
    });
}

const checkoutBtn = document.getElementById("checkout-btn");
if (checkoutBtn) {
    checkoutBtn.addEventListener("click", () => {
        if (cart.length === 0) {
            showToast("Your cart is empty!");
            return;
        }
        showToast("Thank you for your purchase! Checkout completed.");
        cart = [];
        saveCart();
        if (cartSidebar) cartSidebar.classList.remove("active");
    });
}

const quickviewModal = document.getElementById("quickview-modal");
const closeModal = document.getElementById("close-modal");
const modalImg = document.getElementById("modal-product-img");
const modalBrand = document.getElementById("modal-product-brand");
const modalTitle = document.getElementById("modal-product-title");
const modalPrice = document.getElementById("modal-product-price");
const modalSize = document.getElementById("modal-product-size");
const qtyInput = document.getElementById("qty-input");
const qtyMinus = document.getElementById("qty-minus");
const qtyPlus = document.getElementById("qty-plus");
const modalAddToCartBtn = document.getElementById("modal-add-to-cart-btn");

let currentSelectedProduct = null;

if (closeModal) {
    closeModal.addEventListener("click", (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (quickviewModal) quickviewModal.classList.remove("active");
    });
}

window.addEventListener("click", (e) => {
    if (e.target === quickviewModal) {
        if (quickviewModal) quickviewModal.classList.remove("active");
    }
});

if (qtyMinus) {
    qtyMinus.addEventListener("click", () => {
        let val = parseInt(qtyInput.value) || 1;
        if (val > 1) qtyInput.value = val - 1;
    });
}

if (qtyPlus) {
    qtyPlus.addEventListener("click", () => {
        let val = parseInt(qtyInput.value) || 1;
        qtyInput.value = val + 1;
    });
}

document.querySelectorAll(".pro").forEach((proCard) => {
    proCard.addEventListener("click", (e) => {
        const cartIcon = proCard.querySelector(".cart");
        if (e.target === cartIcon || cartIcon.contains(e.target)) {
            e.preventDefault();
            const name = proCard.querySelector(".des h5").innerText;
            const priceVal = parseFloat(proCard.querySelector(".des h4").innerText.replace("$", ""));
            const img = proCard.querySelector("img").src;
            addToCart(name, name, priceVal, img, 1, "M");
            return;
        }
        
        const img = proCard.querySelector("img").src;
        const brand = proCard.querySelector(".des span").innerText;
        const name = proCard.querySelector(".des h5").innerText;
        const priceText = proCard.querySelector(".des h4").innerText;
        const priceVal = parseFloat(priceText.replace("$", ""));
        
        currentSelectedProduct = { id: name, name, price: priceVal, img };
        
        modalImg.src = img;
        modalBrand.innerText = brand;
        modalTitle.innerText = name;
        modalPrice.innerText = priceText;
        modalSize.value = "Select Size";
        qtyInput.value = "1";
        
        quickviewModal.classList.add("active");
    });
});

if (modalAddToCartBtn) {
    modalAddToCartBtn.addEventListener("click", () => {
        if (!currentSelectedProduct) return;
        const size = modalSize.value;
        if (size === "Select Size") {
            showToast("Please select a size first!");
            return;
        }
        const qty = parseInt(qtyInput.value) || 1;
        addToCart(
            currentSelectedProduct.id,
            currentSelectedProduct.name,
            currentSelectedProduct.price,
            currentSelectedProduct.img,
            qty,
            size
        );
        if (quickviewModal) quickviewModal.classList.remove("active");
    });
}

updateCartBadges();
renderCart();