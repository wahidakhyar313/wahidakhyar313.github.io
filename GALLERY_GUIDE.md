# Panduan Mengelola & Menambah Foto pada Galeri Visual

Website portofolio Anda kini telah dilengkapi dengan **Photo Gallery ("Through the Lens")** yang modular, dilengkapi filter kategori dan modal **Lightbox** resolusi tinggi dengan navigasi keyboard (`Esc`, panah kiri/kanan).

---

## 1. Lokasi File Foto
Anda bisa menyimpan foto pribadi Anda di dalam folder:
```
assets/img/gallery/
```
*(Atau langsung di dalam `assets/img/`)*

> **Tips Resolusi & Format:**
> - Format terbaik: `.jpg`, `.jpeg`, atau `.webp` (ukuran file di bawah 500 KB agar website tetap super cepat).
> - Resolusi ideal pratinjau thumbnail: `800px × 600px` (atau aspek rasio 4:3 / 16:9).
> - Resolusi untuk tampilan Lightbox layar penuh: `1600px × 1200px`.

---

## 2. Cara Menambahkan Foto Baru ke Website

Buka file `index.html` dan cari bagian:
```html
<!-- ==================== PHOTO GALLERY SECTION ==================== -->
<div class="gallery-grid" id="gallery-grid">
```

Cukup tambahkan blok HTML baru berikut:

```html
<div class="gallery-item" 
     data-category="urban" 
     data-title="Judul Foto Anda"
     data-exif="Lokasi • Lensa / Kamera • Setting"
     data-full="assets/img/foto-anda-hd.jpg">
  <img src="assets/img/foto-anda.jpg" alt="Judul Foto Anda" loading="lazy">
  <div class="gallery-overlay">
    <h4 class="gallery-caption-title">Judul Foto Anda</h4>
    <div class="gallery-meta-tags">
      <span>Bandung, ID</span>
      <span>•</span>
      <span>35mm f/1.8</span>
    </div>
  </div>
  <div class="gallery-expand-icon">
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
      <polyline points="15 3 21 3 21 9"></polyline>
      <polyline points="9 21 3 21 3 15"></polyline>
      <line x1="21" y1="3" x2="14" y2="10"></line>
      <line x1="3" y1="21" x2="10" y2="14"></line>
    </svg>
  </div>
</div>
```

---

## 3. Pilihan Tampilan & Kategori (CSS Helper Classes)

### A. Ukuran Kartu:
- **Standar (Default)**: `<div class="gallery-item" ...>` (Rasio 4:3)
- **Tinggi / Portrait**: `<div class="gallery-item tall" ...>` (Rasio 3:4)
- **Lebar / Landscape 2 Kolom**: `<div class="gallery-item wide" ...>` (Rasio 16:9, mengambil 2 kolom)

### B. Nilai `data-category`:
- `urban`: Muncul saat filter "Urban & Jalanan" diklik.
- `workspace`: Muncul saat filter "Tech & Workspace" diklik.
- `lifestyle`: Muncul saat filter "Candid & Moments" diklik.
- *(Jika ingin menambah filter baru, cukup tambahkan tombol di `.filter-tabs` dan sesuaikan nilainya)*.

---

## 4. Cara Update ke GitHub Pages
Setelah menambah foto dan mengedit `index.html`, deploy perubahan Anda via terminal:

```bash
git add .
git commit -m "Update portfolio gallery photos"
git push origin main
```
Website di `wahidakhyar313.github.io` akan otomatis terupdate dalam 1-2 menit!
