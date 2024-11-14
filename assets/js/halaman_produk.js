function startCountdown(id, endTime) {
    const countdownElement = document.getElementById(id);
    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = endTime - now;

        if (distance < 0) {
            clearInterval(interval);
            countdownElement.innerHTML = "Selesai"; // Jika waktu habis
        } else {
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);
            countdownElement.innerHTML = `${pad(hours)}:${pad(minutes)}:${pad(seconds)} <br> Sedang Berjalan`;
        }
    }, 1000);

    function pad(number) {
        return number < 10 ? '0' + number : number;
    }
}

const countdown1Time = new Date().getTime() + 6 * 60 * 60 * 1000;
const countdown2Time = new Date().getTime() + 12 * 60 * 60 * 1000;
const countdown3Time = new Date().getTime() + 24 * 60 * 60 * 1000;

startCountdown("countdown1", countdown1Time);
startCountdown("countdown2", countdown2Time);
startCountdown("countdown3", countdown3Time);

// Mendapatkan tombol-tombol add to cart
document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', function () {
        // Ambil informasi produk dari data atribut
        const productId = this.getAttribute('data-id');
        const productName = this.getAttribute('data-name');
        const productPrice = parseInt(this.getAttribute('data-price'));

        // Cek apakah keranjang sudah ada di localStorage
        let cart = JSON.parse(localStorage.getItem('cart')) || [];

        // Cek apakah produk sudah ada di keranjang
        const existingProduct = cart.find(item => item.id === productId);
        if (existingProduct) {
            // Jika sudah ada, tambah jumlahnya
            existingProduct.quantity += 1;
        } else {
            // Jika belum ada, tambahkan produk baru
            cart.push({
                id: productId,
                name: productName,
                price: productPrice,
                quantity: 1
            });
        }

        // Simpan keranjang kembali ke localStorage
        localStorage.setItem('cart', JSON.stringify(cart));

        // Opsional: Tampilkan pesan atau update ikon cart
        alert(`${productName} berhasil ditambahkan ke keranjang!`);
    });
});

// Menampilkan jumlah produk dalam keranjang di ikon cart
function updateCartIcon() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
    document.getElementById('cart-count').textContent = cartCount;
}

// Update ikon cart setiap kali halaman dimuat
window.onload = updateCartIcon;

// Data produk yang memiliki harga
const products = [{
        name: "Celana Chino",
        price: 40000,
        image: "/assets/img/Celana Chino.jpg"
    },
    {
        name: "Kaos Polos",
        price: 60000,
        image: "/assets/img/Kaos Polos.jpg"
    },
    {
        name: "Jaket Denim",
        price: 120000,
        image: "/assets/img/Jaket Denim.jpg"
    },
    {
        name: "Sepatu Boots",
        price: 180000,
        image: "/assets/img/Sepatu Boots.jpg"
    },
    {
        name: "Celana Jeans",
        price: 220000,
        image: "/assets/img/Celana Jeans.jpg"
    },
    // Tambahkan produk lainnya
];

// Menampilkan produk berdasarkan harga yang dipilih
function filterProducts() {
    const selectedPriceRanges = Array.from(document.querySelectorAll('.price-filter:checked'))
        .map(checkbox => checkbox.value.split('-').map(Number));

    const filteredProducts = products.filter(product => {
        return selectedPriceRanges.some(range => {
            return product.price >= range[0] && product.price <= range[1];
        });
    });

    // Tampilkan produk yang sudah difilter
    displayProducts(filteredProducts);
}

// Menampilkan produk di halaman
function displayProducts(products) {
    const productContainer = document.getElementById('product-container');
    productContainer.innerHTML = ''; // Bersihkan container produk

    products.forEach(product => {
        const productCard = `
            <div class="col-md-4 mb-4">
                <div class="card product-card">
                    <img src="${product.image}" class="card-img-top" alt="Product Image">
                    <div class="card-body d-flex flex-column">
                        <h5 class="card-title mb-auto text-start">${product.name}</h5>
                        <div class="d-flex justify-content-between align-items-center mt-3">
                            <span class="price">Rp. ${product.price.toLocaleString()}</span>
                            <i class="bi bi-plus-circle"></i>
                        </div>
                    </div>
                </div>
            </div>
        `;
        productContainer.innerHTML += productCard;
    });
}

// Event listener untuk checkbox
document.querySelectorAll('.price-filter').forEach(checkbox => {
    checkbox.addEventListener('change', filterProducts);
});

// Menampilkan semua produk saat halaman pertama kali dimuat
document.addEventListener('DOMContentLoaded', () => {
    displayProducts(products);
});