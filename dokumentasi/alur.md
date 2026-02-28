# 🚀 Alur Pembuatan Project (Flow)

Dokumen ini berisi catatan langkah-demi-langkah (alur) yang sudah dilakukan dalam membangun proyek **Vue Frontend API JWT** ini. Tujuannya adalah untuk memudahkan pelacakan (tracking) progres pengembangan.

## 1. Tahap Persiapan (Inisialisasi)

- [x] Membuat project menggunakan **Vue 3** + **Vite** + **TypeScript**.
- [x] Menginisialisasi repositori **Git** lokal dan menghubungkannya dengan GitHub (`origin`).

## 2. Tahap Instalasi Dependencies

Menambahkan _package_ atau pustaka yang akan digunakan:

- [x] Instalasi **Axios** (`npm install axios`) untuk menangani komunikasi HTTP/API dengan backend.
- [x] Instalasi **js-cookie** (`npm install js-cookie`) untuk mempermudah penyimpanan dan pembacaan token JWT di _browser cookies_.
- [x] Instalasi **Nodemon** (`npm install --save-dev nodemon`).

## 3. Tahap Konfigurasi Inti (Core Setup)

- [x] **Setup Service API**: Membuat file konfigurasi utama untuk Axios di `src/services/api.ts`.
  - Mengatur `baseURL: 'http://localhost:3000'`. Endpoint ini akan menjadi referensi utama setiap kali aplikasi frontend melakukan panggilan data (fetch API) ke backend lokal.
- [x] **Setup Vue Query**: Menginstal `@tanstack/vue-query` (`npm install @tanstack/vue-query`) dan mendaftarkan _plugin_-nya secara global ke dalam struktur Vue di file core utama `src/main.ts` (`app.use(VueQueryPlugin)`).

## 4. Tahap Pembuatan Composables (Autentikasi)

Membuat fungsionalitas logika yang dapat digunakan ulang _(reusable)_ untuk sistem Autentikasi menggunakan service API dan Vue Query:

- [x] **Register (`useRegister.ts`)**: Menggunakan `useMutation` untuk mengirim request `Api.post('/api/register')`.
- [x] **Login (`useLogin.ts`)**: Menggunakan `useMutation` untuk mengirim request `Api.post('/api/login')`.
- [x] **Logout (`useLogout.ts`)**: Membuat fungsi logout untuk menghapus session `Cookies.remove("token")` dan `Cookies.remove("user")`, lalu me-redirect _user_ ke halaman login menggunakan Vue Router.
- [x] **Get User (`composables.ts`)**: Membuat fungsi pembantu `useAuthUser` untuk mengambil data `Cookies.get('user')` dan mengubahnya menjadi objek dengan tipe (interface) `User`.

## 5. Tahap Konfigurasi Layout & Routing (Vue Router)

Membuat halaman antar muka (Views) dan mengatur navigasi halaman menggunakan Vue Router:

- [x] **Instalasi Vue Router**: Menambahkan `vue-router` ke dalam proyek.
- [x] **Membuat Views**: Membuat file komponen halaman untuk beranda (`src/views/home/index.vue`), halaman registrasi (`src/views/auth/register.vue`), dan halaman login (`src/views/auth/login.vue`).
- [x] **Setup Router (`src/routes/index.ts`)**: Mendaftarkan _routes_ (jalur) untuk ketiga views yang sudah dibuat menggunakan `createRouter` dan `createWebHistory`.
- [x] **Registrasi Global**: Menyuntikkan konfigurasi router ke dalam Vue App di `src/main.ts` (`app.use(routes)`).
- [x] **Update App.vue**: Memodifikasi komponen akar (`src/App.vue`) untuk memuat elemen Navbar Bootstrap dasar dan merender komponen dari router menggunakan `<router-view>`.

---

_Catatan: Dokumen ini akan terus diperbarui seiring dengan berjalannya proses pengembangan proyek (seperti pembuatan fitur login, halaman dashboard, middleware proteksi rute, dll)._
