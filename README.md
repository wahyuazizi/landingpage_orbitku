# Orbitku

Landing page untuk Orbitku, platform VTuber dan kreator yang sedang dikembangkan. Halaman menjelaskan konsep produk, menyediakan simulasi follow dan dashboard, serta menampilkan status akses awal secara jujur.

## Menjalankan

Gunakan Node.js 24 (lihat `.nvmrc`).

```bash
npm ci
npm run dev
```

```bash
npm run lint
npm run build
npm run preview
```

Build statis tersedia di `dist/`. Jika lingkungan membatasi antarmuka jaringan, jalankan `npm run dev -- --host 127.0.0.1`.

## Teknologi dan pengalaman

- React, TypeScript, dan Vite; tanpa backend atau kredensial aplikasi utama.
- Font Inter dan Space Grotesk di-host bersama aplikasi melalui Fontsource.
- Animasi orbit CSS, scroll reveal berbasis IntersectionObserver, transisi interaksi, dan dukungan `prefers-reduced-motion`.
- Preview dashboard: filter Semua / Live / Terjadwal dan detail tiap kreator.
- Alur tiga langkah: temukan kreator → pilih follow → dashboard yang mengikuti pilihan pengguna, termasuk keadaan kosong.
- Menu mobile, tab yang bisa dioperasikan lewat keyboard, navigasi anchor, dan CTA kreator yang otomatis memilih peran Kreator.
- Semua nama, status live, dan jadwal di preview adalah data contoh. Tidak ada koneksi YouTube nyata pada landing page ini.

## Akses awal

Secara default, pendaftaran **belum dibuka**. Input email dinonaktifkan; tombol menjelaskan status tanpa menyimpan email atau menampilkan keberhasilan palsu.

Jika sudah punya kanal penerima:

1. Salin `.env.example` menjadi `.env.local`.
2. Isi `VITE_WAITLIST_ENDPOINT` dengan path satu origin (misalnya `/api/waitlist`) atau endpoint HTTPS yang kamu kelola.
3. Endpoint menerima POST JSON:

```json
{ "email": "contoh@example.com", "role": "fan", "consent": true }
```

Nilai `role` adalah `fan` atau `creator`. Respons HTTP 2xx berarti pendaftaran benar-benar diterima; respons gagal menampilkan pesan dan memungkinkan mencoba lagi. Backend wajib memvalidasi email dan persetujuan, menyimpan data, membatasi abuse, serta mendukung pengelolaan persetujuan email. Untuk endpoint lintas origin, atur CORS untuk domain landing page. Jangan gunakan URL berisi secret di variabel `VITE_*` karena masuk ke bundle publik.

Form yang terhubung meminta persetujuan email. Tidak ada email yang disimpan di localStorage. Variabel build perlu disetel sebelum `npm run build` dan deploy ulang.

## Deploy

Hosting statis seperti Cloudflare Pages atau Vercel: build command `npm run build`, output directory `dist`, Node.js 24. Untuk GitHub Pages, unggah isi `dist/` melalui workflow Pages; base relatif sudah disetel agar aset mendukung subpath repository. Hosting dan domain belum dikonfigurasi oleh repository ini.

## Struktur

`src/App.tsx` menyusun section. Komponen di `src/components/`, data contoh di `src/data/creators.ts`, scroll reveal di `src/hooks/useScrollReveal.ts`, dan token / responsive layout di `src/styles.css`. Baca `docs/agent-context.md` untuk konteks pengembangan dan `docs/design.md` untuk arahan desain.
