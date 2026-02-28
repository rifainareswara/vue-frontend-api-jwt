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

## 6. Tahap Integrasi UI dan Autentikasi (Forms)

Melakukan implementasi form pada halaman Register dan Login serta menghubungkannya ke composables:

- [x] **Integrasi Register (`src/views/auth/register.vue`)**: Membuat antarmuka form pendaftaran menggunakan Bootstrap, menyambungkannya dengan variabel reaktif Vue (`ref`, `reactive`), dan mengeksekusi fungsi `mutate` dari `useRegister` saat form disubmit. Serta meng-_handle_ error validasi dari API.
- [x] **Integrasi Login (`src/views/auth/login.vue`)**: Membuat antarmuka form masuk, menyambungkannya dengan `useLogin`. Jika login berhasl, mengamankan `token` dan data `user` (yang disimpan ke dalam cookie), lalu me-redirect ke halaman _dashboard_ (Admin) menggunakan router.
- [x] **Global Layout**: Update judul title dokumen HTML (`index.html`) menjadi "Rifai Test Vue".

## 7. Tahap Halaman Admin & Proteksi Rute (Middleware)

Membuat halaman khusus admin (Dashboard) dan mengamankan halamannya agar hanya bisa diakses user yang sudah login:

- [x] **Sidebar Component (`src/components/SidebarMenu.vue`)**: Membuat komponen navigasi menu admin yang terisolasi dan memanggil fungsi `logout` (dari _composable_ `useLogout.ts`) di dalamnya.
- [x] **Dashboard View (`src/views/admin/dashboard/index.vue`)**: Membuat view utama papan kontrol admin, merender `SidebarMenu`, serta memanggil _composable_ `useAuthUser` untuk menampilkan nama admin yang sedang login secara dinamis.
- [x] **Route Protection/Guards (`src/routes/index.ts`)**:
  - Mendaftarkan rute baru untuk `/admin/dashboard` dan melengkapinya dengan _meta data_ `requiresAuth: true`.
  - Membuat _Global Navigation Guard_ (`router.beforeEach`) untuk mengekstrak token dari cookie. Jika _user_ menuju halaman yang diproteksi tanpa token, ia dialihkan ke Login. Sebaliknya, _user_ yang sudah memiliki token tak bisa kembali ke halaman Login/Register, tapi dialihkan secara paksa ke Dashboard.

## 8. Tahap Pembuatan Composables (Manajemen User/CRUD)

Membuat fungsionalitas Hook/Composable logika untuk operasi CRUD (Create, Read, Update, Delete) entitas User menggunakan Vue Query dan menyisipkan JWT Bearer Token ke dalam _Headers_:

- [x] **Get Users (`useUsers.ts`)**: Menggunakan `useQuery` untuk mengambil daftar semua user (`GET /api/users`).
- [x] **Create User (`useUserCreate.ts`)**: Menggunakan `useMutation` untuk menambahkan user baru (`POST /api/users`).
- [x] **Get User by ID (`useUserById.ts`)**: Menggunakan `useQuery` untuk mengambil detail satu user berdasarkan parameter ID (`GET /api/users/:id`).
- [x] **Update User (`useUserUpdate.ts`)**: Menggunakan `useMutation` untuk memperbarui data user (`PUT /api/users/:id`).
- [x] **Delete User (`useUserDelete.ts`)**: Menggunakan `useMutation` untuk menghapus data user (`DELETE /api/users/:id`).

---

_Catatan: Dokumen ini akan terus diperbarui seiring dengan berjalannya proses pengembangan proyek (seperti pembuatan fitur login, halaman dashboard, middleware proteksi rute, dll)._
