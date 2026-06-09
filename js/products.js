// Sample Products Database
const productsData = [
    {
        id: 1,
        name: "Rainbow Water Bottle",
        category: "water-bottles",
        price: 14.99,
        image: "🌈",
        description: "Colorful water bottle with fun designs",
        affiliate: true
    },
    {
        id: 2,
        name: "Space Explorer T-Shirt",
        category: "clothing",
        price: 18.99,
        image: "👕",
        description: "Comfortable cotton t-shirt with space theme",
        affiliate: true
    },
    {
        id: 3,
        name: "Adventure Backpack",
        category: "accessories",
        price: 34.99,
        image: "🎒",
        description: "Durable backpack perfect for school or travel",
        affiliate: true
    },
    {
        id: 4,
        name: "Warm Winter Socks",
        category: "essentials",
        price: 9.99,
        image: "🧦",
        description: "Cozy wool-blend socks for cold weather",
        affiliate: true
    },
    {
        id: 5,
        name: "Pink Water Bottle",
        category: "water-bottles",
        price: 12.99,
        image: "🌸",
        description: "Pretty pink water bottle with flower designs",
        affiliate: true
    },
    {
        id: 6,
        name: "Superhero Hoodie",
        category: "clothing",
        price: 29.99,
        image: "🦸",
        description: "Cozy hoodie with superhero graphics",
        affiliate: true
    },
    {
        id: 7,
        name: "Baseball Cap",
        category: "accessories",
        price: 16.99,
        image: "🧢",
        description: "Classic adjustable baseball cap",
        affiliate: true
    },
    {
        id: 8,
        name: "Wool Mittens",
        category: "essentials",
        price: 11.99,
        image: "🧤",
        description: "Warm mittens for winter activities",
        affiliate: true
    }
];

// Load products from data
function loadProducts() {
    return productsData;
}

// Get product by ID
function getProductById(id) {
    return productsData.find(p => p.id === parseInt(id));
}

// Filter products
function filterProducts(category = '', maxPrice = 100, searchTerm = '') {
    return productsData.filter(product => {
        const matchCategory = !category || product.category === category;
        const matchPrice = product.price <= maxPrice;
        const matchSearch = !searchTerm || 
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase());
        
        return matchCategory && matchPrice && matchSearch;
    });
}

// Display products in grid
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    if (products.length === 0) {
        container.innerHTML = '<p style="grid-column: 1/-1; text-align: center; padding: 2rem;">No products found.</p>';
        return;
    }

    container.innerHTML = products.map(product => `
        <div class="product-card" data-id="${product.id}">
            <div class="product-image">${product.image}</div>
            <div class="product-info">
                <div class="product-category">${product.category.replace('-', ' ')}</div>
                <div class="product-name">${product.name}</div>
                <div class="product-price">$${product.price.toFixed(2)}</div>
                <div class="product-actions">
                    <button class="btn-view" onclick="showProductModal(${product.id})">View</button>
                    <button class="btn-add-cart" onclick="addToCart(${product.id})">Add to Cart</button>
                </div>
            </div>
        </div>
    `).join('');
}

// Show product details in modal
function showProductModal(productId) {
    const product = getProductById(productId);
    if (!product) return;

    const modal = document.getElementById('product-modal');
    if (!modal) return;

    const modalBody = document.getElementById('modal-body');
    modalBody.innerHTML = `
        <div style="text-align: center;">
            <div style="font-size: 5rem; margin-bottom: 1rem;">${product.image}</div>
            <h2>${product.name}</h2>
            <div style="color: #999; margin-bottom: 1rem;">Category: ${product.category.replace('-', ' ')}</div>
            <p style="margin-bottom: 1rem;">${product.description}</p>
            <div style="font-size: 2rem; color: #FF6B9D; font-weight: bold; margin-bottom: 1.5rem;">$${product.price.toFixed(2)}</div>
            <button class="btn btn-primary btn-full" onclick="addToCart(${product.id}); closeModal()">Add to Cart</button>
        </div>
    `;

    modal.style.display = 'block';
}

// Close modal
function closeModal() {
    const modal = document.getElementById('product-modal');
    if (modal) modal.style.display = 'none';
}

// Set up modal close listeners
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('product-modal');
    if (modal) {
        const closeBtn = modal.querySelector('.close');
        if (closeBtn) {
            closeBtn.onclick = closeModal;
        }

        window.onclick = function(event) {
            if (event.target === modal) {
                modal.style.display = 'none';
            }
        }
    }
});
