// window.onscroll = function () {
//     stickyNavbar()
// };

// var navbar = document.querySelector(".navbar");
// var sticky = navbar.offsetTop;

// function stickyNavbar() {
//     if (window.pageYOffset > sticky) {
//         navbar.classList.add("sticky");
//     } else {
//         navbar.classList.remove("sticky");
//     }
// }

// // Inisialisasi array untuk produk yang di-like dan elemen-elemen terkait
// let likedProducts = [];
// const notificationCount = document.querySelector('.notification-icon .notification-count');
// const cartCount = document.querySelector('.cart-count');

// // Fungsi untuk memperbarui jumlah notifikasi di ikon lonceng
// function updateNotificationCount() {
//     notificationCount.textContent = likedProducts.length;
//     notificationCount.style.display = likedProducts.length > 0 ? 'block' : 'none';
// }

// // Fungsi untuk memperbarui jumlah item di keranjang
// function updateCartCount() {
//     // Memastikan bahwa cartCount dimulai dengan angka 0 jika belum ada
//     cartCount.textContent = parseInt(cartCount.textContent) || 0;
// }

// // Inisialisasi jumlah keranjang
// updateCartCount();

// // Interaksi untuk tombol wishlist
// document.querySelectorAll('.wishlist-button').forEach(button => {
//     button.addEventListener('click', function () {
//         const icon = this.querySelector('i');
//         const productCard = button.closest('.product-card');
//         const productTitle = productCard.querySelector('.product-title').textContent;

//         // Toggle ikon dan status produk di wishlist
//         if (likedProducts.includes(productTitle)) {
//             likedProducts = likedProducts.filter(item => item !== productTitle);
//             icon.classList.replace('fas', 'far'); // Ikon hati kosong
//             icon.style.color = 'black'; // Kembalikan warna ke hitam jika tidak disukai
//         } else {
//             likedProducts.push(productTitle);
//             icon.classList.replace('far', 'fas'); // Ikon hati penuh
//             icon.style.color = 'red'; // Mengubah warna ikon menjadi merah jika disukai
//         }

//         // Update notifikasi wishlist
//         updateNotificationCount();
//     });
// });

// // Interaksi untuk tombol quick add to cart
// document.querySelectorAll('.quick-add-btn').forEach(button => {
//     button.addEventListener('click', function () {
//         const originalText = this.textContent;

//         // Ubah teks tombol dan warna latar belakang dengan gradien
//         this.textContent = 'Telah Ditambahkan';
//         this.style.background = 'linear-gradient(to right, #4e2482, #5d1cad, #2a57aa)';

//         setTimeout(() => {
//             this.textContent = originalText;
//         }, 800);

//         // Tambahkan item ke jumlah keranjang
//         cartCount.textContent = parseInt(cartCount.textContent) + 1;
//     });
// });

// // Inisialisasi tampilan awal notifikasi wishlist
// updateNotificationCount();

// // Fungsi untuk menyaring produk berdasarkan ukuran yang dipilih
// function filterBySize() {
//     const sizeFilters = document.querySelectorAll('.size-checkbox');
//     const selectedSizes = [];

//     // Cek checkbox yang dicentang
//     sizeFilters.forEach(filter => {
//         if (filter.checked) {
//             selectedSizes.push(filter.id);
//         }
//     });

//     const productCards = document.querySelectorAll('.product-card');
//     productCards.forEach(card => {
//         const productSizes = card.querySelector('.product-size').innerText.split(' ');
//         const isMatch = selectedSizes.some(size => productSizes.includes(size));

//         const productImage = card.querySelector('.product-image'); // Mengambil elemen gambar

//         if (selectedSizes.length === 0 || isMatch) {
//             card.style.display = 'block'; // Menampilkan produk yang sesuai
//             if (productImage) {
//                 productImage.style.display = 'block'; // Menampilkan gambar produk
//             }
//         } else {
//             card.style.display = 'none'; // Menyembunyikan produk yang tidak sesuai
//             if (productImage) {
//                 productImage.style.display = 'none'; // Menyembunyikan gambar produk
//             }
//         }
//     });
// }

// // Menambahkan event listener untuk perubahan pada checkbox ukuran
// const sizeCheckboxes = document.querySelectorAll('.size-checkbox');
// sizeCheckboxes.forEach(checkbox => {
//     checkbox.addEventListener('change', filterBySize);
// });
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