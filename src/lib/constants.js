/** Label peran dalam Bahasa Indonesia. */
export const ROLE_LABELS = {
  admin: 'Admin',
  editor: 'Editor',
  user: 'Pengguna',
}

/** Semua peran yang boleh mengakses panel admin. */
export const ADMIN_ROLES = ['admin', 'editor']

export const ROLE_OPTIONS = [
  { value: 'admin', label: 'Admin' },
  { value: 'editor', label: 'Editor' },
  { value: 'user', label: 'Pengguna' },
]

/** Label status project dalam Bahasa Indonesia. */
export const PROJECT_STATUS_LABELS = {
  published: 'Terbit',
  draft: 'Draf',
  archived: 'Arsip',
}

export const PROJECT_STATUS_OPTIONS = [
  { value: 'published', label: 'Terbit' },
  { value: 'draft', label: 'Draf' },
  { value: 'archived', label: 'Arsip' },
]

export const CATEGORY_OPTIONS = [
  { value: 'design', label: 'Design' },
  { value: 'media', label: 'Media' },
  { value: 'it', label: 'IT Solution' },
  { value: 'web', label: 'Web Development' },
  { value: 'security', label: 'Security / CCTV' },
  { value: 'other', label: 'Lainnya' },
]

/** Kunci konten per section beserta label field-nya. */
export const CONTENT_FIELDS = {
  home: [
    { key: 'heroBadge', label: 'Label Hero', type: 'input' },
    { key: 'heroTitle', label: 'Judul Hero', type: 'input' },
    { key: 'heroSubtitle', label: 'Subjudul Hero', type: 'textarea', rich: false },
    { key: 'heroButton', label: 'Teks Tombol Hero', type: 'input' },
    { key: 'aboutTeaser', label: 'Cuplikan Tentang Kami', type: 'textarea', rich: true },
    { key: 'teaserSubtitle', label: 'Label Bagian Layanan', type: 'input' },
    { key: 'teaserTitle', label: 'Judul Bagian Layanan', type: 'input' },
    { key: 'statProjects', label: 'Angka Proyek Selesai', type: 'input' },
    { key: 'statYears', label: 'Angka Tahun Pengalaman', type: 'input' },
    { key: 'statSatisfaction', label: 'Angka Kepuasan (%)', type: 'input' },
    { key: 'teaserCards', label: 'Kartu Beranda (satu per baris: Judul | Deskripsi | Teks tombol)', type: 'textarea', rich: false },
  ],
  about: [
    { key: 'title', label: 'Judul Halaman', type: 'input' },
    { key: 'subtitle', label: 'Deskripsi Singkat', type: 'textarea', rich: false },
    { key: 'profileName', label: 'Nama Profil', type: 'input' },
    { key: 'profession', label: 'Profesi', type: 'input' },
    { key: 'profileHeading', label: 'Judul Profil', type: 'input' },
    { key: 'profileImage', label: 'URL Foto Profil', type: 'input' },
    { key: 'description', label: 'Deskripsi', type: 'textarea', rich: true },
    { key: 'vision', label: 'Visi', type: 'textarea', rich: false },
    { key: 'mission', label: 'Misi', type: 'textarea', rich: false },
    { key: 'skillHeading', label: 'Judul Keahlian', type: 'input' },
    { key: 'skills', label: 'Daftar Keahlian (satu per baris: Nama | Deskripsi | Persentase)', type: 'textarea', rich: false },
  ],
  project: [
    { key: 'title', label: 'Judul Halaman', type: 'input' },
    { key: 'subtitle', label: 'Deskripsi Singkat', type: 'textarea', rich: false },
  ],
  categoryPage: [
    { key: 'title', label: 'Judul Halaman', type: 'input' },
    { key: 'subtitle', label: 'Deskripsi Singkat', type: 'textarea', rich: false },
    { key: 'servicesEyebrow', label: 'Label Bagian Layanan', type: 'input' },
    { key: 'servicesTitle', label: 'Judul Bagian Layanan', type: 'input' },
    { key: 'servicesIntro', label: 'Deskripsi Bagian Layanan', type: 'textarea', rich: false },
    { key: 'services', label: 'Daftar Layanan (satu per baris: Judul | Deskripsi)', type: 'textarea', rich: false },
    { key: 'toolsTitle', label: 'Judul Tools / Peralatan', type: 'input' },
    { key: 'tools', label: 'Daftar Tools (pisahkan dengan koma)', type: 'textarea', rich: false },
    { key: 'projectsTitle', label: 'Judul Bagian Project', type: 'input' },
    { key: 'emptyTitle', label: 'Judul saat belum ada project', type: 'input' },
    { key: 'emptyDescription', label: 'Deskripsi saat belum ada project', type: 'textarea', rich: false },
  ],
  contact: [
    { key: 'title', label: 'Judul Halaman', type: 'input' },
    { key: 'subtitle', label: 'Deskripsi Singkat', type: 'textarea', rich: false },
    { key: 'availability', label: 'Status Ketersediaan', type: 'input' },
    { key: 'responseTime', label: 'Waktu Respons', type: 'input' },
    { key: 'panelTitle', label: 'Judul Informasi Kontak', type: 'input' },
    { key: 'panelDescription', label: 'Deskripsi Informasi Kontak', type: 'textarea', rich: false },
    { key: 'profileName', label: 'Nama Profil', type: 'input' },
    { key: 'profession', label: 'Profesi', type: 'input' },
    { key: 'email', label: 'Email', type: 'input' },
    { key: 'phone', label: 'Nomor Telepon', type: 'input' },
    { key: 'whatsapp', label: 'WhatsApp', type: 'input' },
    { key: 'address', label: 'Alamat', type: 'textarea', rich: false },
    { key: 'hours', label: 'Jam Operasional', type: 'input' },
    { key: 'responseNote', label: 'Catatan Waktu Respons', type: 'input' },
    { key: 'formTitle', label: 'Judul Formulir', type: 'input' },
    { key: 'formSubtitle', label: 'Deskripsi Formulir', type: 'textarea', rich: false },
    { key: 'mapTitle', label: 'Judul Peta', type: 'input' },
    { key: 'mapDescription', label: 'Deskripsi Lokasi', type: 'input' },
    { key: 'mapLink', label: 'Tautan Google Maps', type: 'input' },
    { key: 'mapUrl', label: 'URL Peta (Google Maps)', type: 'input' },
  ],
  services: [
    { key: 'intro', label: 'Paragraf Pembuka', type: 'textarea', rich: true },
  ],
}

export const CONTENT_SECTIONS = [
  { key: 'home', label: 'Beranda' },
  { key: 'about', label: 'Tentang Kami' },
  { key: 'project', label: 'Project' },
  { key: 'design', label: 'Creative Design' },
  { key: 'media', label: 'Multimedia' },
  { key: 'web', label: 'Web Development' },
  { key: 'security', label: 'CCTV Specialist' },
  { key: 'contact', label: 'Kontak' },
]

/** Nama aksi untuk audit log. */
export const AUDIT_ACTIONS = {
  create: 'Menambah',
  update: 'Memperbarui',
  delete: 'Menghapus',
  login: 'Masuk',
  logout: 'Keluar',
  upload: 'Mengunggah',
}

export const SETTINGS_FIELDS = [
  { key: 'siteName', label: 'Nama Website', type: 'input' },
  { key: 'tagline', label: 'Tagline', type: 'input' },
  { key: 'contactEmail', label: 'Email Kontak Utama', type: 'input' },
  { key: 'defaultLanguage', label: 'Bahasa Default', type: 'select', options: [
    { value: 'id', label: 'Bahasa Indonesia' },
    { value: 'en', label: 'English' },
  ] },
  { key: 'maintenanceMode', label: 'Mode Maintenance', type: 'switch' },
  { key: 'allowRegistration', label: 'Izinkan Pendaftaran Publik', type: 'switch' },
  { key: 'itemsPerPage', label: 'Jumlah Item per Halaman', type: 'number' },
]