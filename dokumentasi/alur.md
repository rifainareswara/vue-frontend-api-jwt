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

---

_Catatan: Dokumen ini akan terus diperbarui seiring dengan berjalannya proses pengembangan proyek (seperti pembuatan fitur login, halaman dashboard, middleware proteksi rute, dll)._
