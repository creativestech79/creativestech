import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Check,
  Clock3,
  Globe2,
  Handshake,
  Laptop,
  Rocket,
  X,
} from 'lucide-react'

const PROCESS_STEPS = [
  {
    icon: Laptop,
    title: 'Pilih Paket yang Sesuai',
    description: 'Pilih paket Starter, Business, Premium, atau E-Commerce sesuai kebutuhan.',
  },
  {
    icon: Handshake,
    title: 'DP 30% dan Brief',
    description: 'Proyek dimulai setelah pembayaran uang muka dan materi dari Anda diterima.',
  },
  {
    icon: Clock3,
    title: 'Proses Pengerjaan',
    description: 'Starter selesai sekitar 7 hari kerja; Business dan Premium sekitar 14 hari kerja.',
  },
  {
    icon: Rocket,
    title: 'Review dan Launch',
    description: 'Tinjau tampilan di desktop dan mobile, lalu rayakan website baru Anda.',
  },
]

const PACKAGES = [
  {
    name: 'Starter',
    price: 'Rp 1.490.000',
    originalPrice: 'Rp 2.000.000',
    description: 'Untuk kebutuhan website sederhana dan profesional.',
    features: [
      'Mobile responsive',
      'Hosting dan domain gratis',
      'SSL gratis',
      'Kapasitas kecil',
      '5–10 halaman',
      'Hingga 100 media',
      'Tombol WhatsApp dan telepon',
      'Google Maps',
      'Template Envato',
      'Gratis support 3 bulan',
    ],
  },
  {
    name: 'Business',
    price: 'Rp 2.490.000',
    originalPrice: 'Rp 3.000.000',
    description: 'Untuk bisnis yang ingin tampil lebih lengkap secara online.',
    popular: true,
    features: [
      'Semua fitur Starter',
      'Kapasitas medium dan 10 email',
      '10–15 halaman',
      'Hingga 200 media',
      'Template Envato + kustomisasi',
      'Slider gambar',
      'Animasi halaman',
      'Blog post',
      'Logo gratis',
      'Gratis support 6 bulan',
    ],
  },
  {
    name: 'Premium',
    price: 'Rp 3.490.000',
    originalPrice: 'Rp 4.000.000',
    description: 'Fitur lengkap untuk brand yang siap berkembang.',
    features: [
      'Semua fitur Business',
      'Kapasitas dan email unlimited',
      '15–20 halaman',
      'Hingga 500 media',
      'Logo dan kartu nama gratis',
      'Formulir kontak',
      'Popup',
      'SEO on-page',
      'Optimasi kecepatan',
      'Gratis full support',
    ],
  },
  {
    name: 'E-Commerce',
    price: 'Rp 4.990.000',
    originalPrice: 'Rp 6.500.000',
    description: 'Mulai menjual produk melalui toko online Anda.',
    features: [
      'Semua fitur Premium',
      'Kapasitas dan email unlimited',
      '15–20 halaman',
      'Upload hingga 50 produk',
      'Template Envato + kustomisasi',
      'Slider gambar dan animasi',
      'Blog post',
      'Formulir kontak dan popup',
      'SEO dan optimasi kecepatan',
      'Setup payment gateway',
      'Gratis full support',
    ],
  },
]

const COMPARISON_ROWS = [
  { label: 'Mobile responsive', values: [true, true, true, true] },
  { label: 'Hosting, domain, dan SSL', values: [true, true, true, true] },
  { label: 'Jumlah halaman', values: ['5–10', '10–15', '15–20', '15–20'] },
  { label: 'Kapasitas media / produk', values: ['100 media', '200 media', '500 media', '50 produk'] },
  { label: 'WhatsApp, telepon, dan Google Maps', values: [true, true, true, true] },
  { label: 'Slider, animasi, dan blog', values: [false, true, true, true] },
  { label: 'Logo gratis', values: [false, true, true, true] },
  { label: 'Formulir kontak dan popup', values: [false, false, true, true] },
  { label: 'SEO on-page dan optimasi kecepatan', values: [false, false, true, true] },
  { label: 'Setup payment gateway', values: [false, false, false, true] },
]

const FREE_DOMAINS = '.com, .info, .xyz, .org, .promo, .club, .pet, .website, .space, .online, .store, .kim, .blue, .red, .pink, .fit, .link, .click, .my.id, .biz.id, .or.id, .ac.id, .sch.id, .ponpes.id, .men, .vip, .name, .work, .site, .pw, .asia, .icu, .monster, .cyou, .help, .pics, .today, .wiki, .ink, .photo, .guru, .life, .world, .rodeo, .bid, .trade, .webcam, .party, .science, .review, .date, .faith, .download, .loan, .racing, .win, .tech, .web.id, .stream, .fun, .shop, .art, .pro, .live, .top'

function ComparisonValue({ value }) {
  if (typeof value === 'string') return <span>{value}</span>
  return value
    ? <Check className="price-table-check" size={18} aria-label="Termasuk" />
    : <X className="price-table-unavailable" size={18} aria-label="Tidak termasuk" />
}

export default function Prices() {
  return (
    <main className="prices-page">
      <header className="price-hero">
        <div className="price-hero-content">
          <span className="price-eyebrow">Paket dan Harga</span>
          <h1>Harga Website</h1>
          <p>Website profesional untuk bisnis Anda. Harga transparan, fitur lengkap, dan siap membantu bisnis berkembang.</p>
        </div>
      </header>

      <section className="price-section price-process" aria-labelledby="process-title">
        <div className="price-section-heading">
          <span className="price-eyebrow">Cara Kerja</span>
          <h2 id="process-title">Proses Kerja yang Jelas</h2>
        </div>
        <div className="price-process-grid">
          {PROCESS_STEPS.map(({ icon: Icon, title, description }, index) => (
            <article className="price-process-card" key={title}>
              <span className="price-process-number">0{index + 1}</span>
              <span className="price-process-icon"><Icon size={22} aria-hidden="true" /></span>
              <h3>{title}</h3>
              <p>{description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="price-section price-packages" aria-labelledby="packages-title">
        <div className="price-section-heading">
          <span className="price-eyebrow">Paket All-in-One</span>
          <h2 id="packages-title">Pilih Paket Website Anda</h2>
          <p>Setiap paket sudah termasuk domain, hosting, SSL, dan bantuan support.</p>
        </div>
        <div className="price-package-grid">
          {PACKAGES.map((plan) => (
            <article className={`price-package-card${plan.popular ? ' is-popular' : ''}`} key={plan.name}>
              {plan.popular && <span className="price-popular-label">Paling populer</span>}
              <h3>{plan.name}</h3>
              <p className="price-package-description">{plan.description}</p>
              <div className="price-amount">{plan.price}<span> / tahun</span></div>
              <p className="price-original">Harga normal <s>{plan.originalPrice}</s> / tahun</p>
              <div className="price-features-label">Fitur termasuk</div>
              <ul className="price-feature-list">
                {plan.features.map((feature) => (
                  <li key={feature}><Check size={16} aria-hidden="true" />{feature}</li>
                ))}
              </ul>
              <Link to="/contact" className="price-cta">
                Konsultasi paket <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>

        <aside className="price-domain-note">
          <Globe2 size={24} aria-hidden="true" />
          <div>
            <h3>Domain gratis untuk tahun pertama</h3>
            <p>{FREE_DOMAINS}</p>
          </div>
        </aside>
      </section>

      <section className="price-section price-comparison" aria-labelledby="comparison-title">
        <div className="price-section-heading">
          <span className="price-eyebrow">Bandingkan Fitur</span>
          <h2 id="comparison-title">Pilih Paket Sesuai Kebutuhan</h2>
          <p>Bandingkan fitur utama setiap paket sebelum menentukan pilihan.</p>
        </div>
        <div className="price-table-scroll">
          <table className="price-table">
            <thead>
              <tr>
                <th scope="col">Fitur</th>
                {PACKAGES.map((plan) => <th scope="col" key={plan.name}>{plan.name}</th>)}
              </tr>
            </thead>
            <tbody>
              {COMPARISON_ROWS.map(({ label, values }) => (
                <tr key={label}>
                  <th scope="row">{label}</th>
                  {values.map((value, index) => (
                    <td key={PACKAGES[index].name}><ComparisonValue value={value} /></td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="price-contact-banner">
        <span className="price-eyebrow">Siap Memulai?</span>
        <h2>Wujudkan website untuk bisnis Anda</h2>
        <p>Hubungi kami untuk konsultasi gratis dan diskusikan paket yang paling sesuai.</p>
        <Link to="/contact" className="price-cta price-cta-light">
          Konsultasi sekarang <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </section>
    </main>
  )
}
