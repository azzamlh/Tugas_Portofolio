import ReactDOM from 'react-dom/client';
import {
  Mail,
  Instagram,
  Linkedin,
  Users,
  Mic,
  Clock,
  MessageSquare,
  Sheet,
  Palette,
} from 'lucide-react';
import '../css/app.css';

const PERSONAL_INFO = {
  nama: 'Azza Amaliah Zahara',
  tagline: 'Mahasiswa Aktif - D3 Teknologi Multimedia Broadcasting',
  deskripsi:
    'Seorang mahasiswi aktif yang sedang menempuh pendidikan di jurusan Teknologi Multimedia Broadcasting dengan ketertarikan pada bidding desain dan konten kreator. Memiliki komunikasi yang baik serta kemampuan berkolaborasi dalam tim.',
  profilLengkap:
    'Seorang mahasiswi aktif yang sedang menempuh pendidikan di jurusan Teknologi Multimedia Broadcasting dengan ketertarikan pada bidang desain dan konten kreator. Memiliki komunikasi yang baik serta kemampuan berkolaborasi dalam tim, mampu mengelola waktu dengan baik.',
  komitmen:
    'Saya berkomitmen untuk terus mengoptimalkan dan meningkatkan kapasitas diri dengan tanggung jawab penuh dalam setiap proyeksi.',
};

const CONTACT_INFO = {
  email: 'azzamlh75@gmail.com',
  telepon: '081334932052',
  alamat: 'Kaputih Gg. 3B Sukolilo, Surabaya Timur',
  instagram: 'https://instagram.com',
  linkedin: 'https://linkedin.com',
};

const EDUCATION = [
  {
    institusi: 'Politeknik Elektronika Negeri Surabaya',
    jurusan: 'Teknologi Multimedia Broadcasting',
    tahun: '2024 - Sekarang',
  },
  {
    institusi: 'SMAN 2 Lumajang',
    jurusan: 'MIPA',
    tahun: '2021 - 2024',
  },
];

const SKILLS = [
  { name: 'Leadership', icon: Users, percentage: 95 },
  { name: 'Initiative', icon: Mic, percentage: 90 },
  { name: 'Public Speaking', icon: Mic, percentage: 85 },
  { name: 'Time Management', icon: Clock, percentage: 90 },
  { name: 'Communication', icon: MessageSquare, percentage: 80 },
  { name: 'Spreadsheet', icon: Sheet, percentage: 85 },
  { name: 'UI/UX Design', icon: Palette, percentage: 85 },
];

const EXPERIENCES = [
  {
    title: 'Staff Muda Departemen PSDM',
    organization: 'HIMA Multimedia Broadcasting',
    period: '2025 - Sekarang',
    description: 'Menjalankan program kerja dan aktif dalam kegiatan HIMA',
  },
  {
    title: 'Sekretaris',
    organization: 'Komunitas Society Renewable Energy PENS (SRE PENS)',
    period: '2025 = Sekarang',
    description:
      'Mengelola Laporan Pertanggung Jawaban, data staff, serta surat menyurat komunitas',
  },
  {
    title: 'Anggota Divisi Data PKKMB PENS 2025',
    organization: 'Panitia PKKMB PENS 2025',
    period: 'Juli - Agustus 2025',
    description:
      'Berkontribusi dalam perencanaan dan pelaksanaan acara festival kampus',
  },
  {
    title: 'Koordinator Divisi Acara Wisuda Sekolah',
    organization: 'SMAN 2 Lumajang',
    period: 'Februari - Mei 2024',
    description:
      'Mengkoordinasikan seluruh kegiatan acara wisuda sekolah',
  },
];

export default function App() {
  return (
    <div className="min-h-screen overflow-y-auto bg-white">
      <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-bold text-xl text-gray-900">Portfolio</div>
          <div className="flex gap-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900 transition">
              Tentang
            </a>
            <a href="#skills" className="text-gray-600 hover:text-gray-900 transition">
              Keahlian
            </a>
            <a href="#experience" className="text-gray-600 hover:text-gray-900 transition">
              Pengalaman
            </a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900 transition">
              Kontak
            </a>
          </div>
        </div>
      </nav>

      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-amber-50 to-orange-100 pt-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <div className="inline-block mb-4 px-4 py-2 bg-amber-100 text-amber-800 rounded-full text-sm">
            Selamat datang di portfolio saya
          </div>
          <h1 className="text-6xl font-bold text-gray-900 mb-6">
            Hi, Saya <span className="text-rose-800">{PERSONAL_INFO.nama}</span>
          </h1>
          <p className="text-2xl text-gray-600 mb-8">{PERSONAL_INFO.tagline}</p>
          <p className="text-lg text-gray-500 mb-12 max-w-2xl mx-auto">{PERSONAL_INFO.deskripsi}</p>
          <div className="flex gap-4 justify-center">
            <a href="#experience" className="px-8 py-3 bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition">
              Lihat Pengalaman
            </a>
            <a href="#contact" className="px-8 py-3 border-2 border-amber-800 text-amber-900 rounded-lg hover:border-amber-900 transition">
              Hubungi Saya
            </a>
          </div>
          <div className="flex gap-4 justify-center mt-8">
            <a href={CONTACT_INFO.instagram} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Instagram className="w-5 h-5 text-gray-700" />
            </a>
            <a href={CONTACT_INFO.linkedin} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Linkedin className="w-5 h-5 text-gray-700" />
            </a>
            <a href={`mailto:${CONTACT_INFO.email}`} className="p-3 bg-white rounded-full shadow-md hover:shadow-lg transition">
              <Mail className="w-5 h-5 text-gray-700" />
            </a>
          </div>
        </div>
      </section>

      <section id="about" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Tentang Saya</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="aspect-square bg-gradient-to-br from-amber-400 to-rose-700 rounded-2xl" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Profil</h3>
              <p className="text-lg text-gray-600 mb-6">{PERSONAL_INFO.profilLengkap}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Pendidikan</h3>
              <div className="space-y-4 mb-6">
                {EDUCATION.map((edu, index) => (
                  <div key={index}>
                    <p className="font-semibold text-gray-900">{edu.institusi}</p>
                    <p className="text-gray-600">{edu.jurusan}</p>
                    <p className="text-sm text-gray-500">{edu.tahun}</p>
                  </div>
                ))}
              </div>
              <p className="text-lg text-gray-600">{PERSONAL_INFO.komitmen}</p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Keterampilan</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {SKILLS.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-10 h-10 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-rose-800" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900">{skill.name}</h3>
                  </div>
                  <div className="relative">
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <div
                        className="bg-gradient-to-r from-amber-500 to-rose-700 h-3 rounded-full transition-all duration-500"
                        style={{ width: `${skill.percentage}%` }}
                      />
                    </div>
                    <span className="text-sm text-gray-600 mt-1 inline-block">{skill.percentage}%</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section id="experience" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Pengalaman Organisasi</h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="bg-white border-2 border-gray-200 rounded-xl p-6 hover:border-rose-300 hover:shadow-lg transition">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-lg text-rose-800 font-semibold mb-2">{exp.organization}</p>
                    <p className="text-gray-600 mb-3">{exp.description}</p>
                  </div>
                  <div className="flex-shrink-0">
                    <span className="inline-block px-4 py-2 bg-amber-50 text-amber-900 rounded-full text-sm font-medium">{exp.period}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 bg-gradient-to-br from-amber-50 to-orange-100">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Mari Berkolaborasi</h2>
          <p className="text-xl text-gray-600 mb-8">
            Saya terbuka untuk berdiskusi tentang proyek baru, ide kreatif, atau kesempatan kolaborasi.
          </p>
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-8 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Email</h3>
                <a href={`mailto:${CONTACT_INFO.email}`} className="text-rose-800 hover:text-rose-900">
                  {CONTACT_INFO.email}
                </a>
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-2">Telepon</h3>
                <a href={`tel:${CONTACT_INFO.telepon}`} className="text-rose-800 hover:text-rose-900">
                  {CONTACT_INFO.telepon}
                </a>
              </div>
              <div className="md:col-span-2">
                <h3 className="font-bold text-gray-900 mb-2">Alamat</h3>
                <p className="text-gray-600">{CONTACT_INFO.alamat}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href={`mailto:${CONTACT_INFO.email}`} className="px-8 py-4 bg-rose-800 text-white rounded-lg hover:bg-rose-900 transition inline-flex items-center justify-center gap-2">
              <Mail className="w-5 h-5" />
              Kirim Email
            </a>
            <a href={CONTACT_INFO.linkedin} className="px-8 py-4 bg-white text-amber-900 rounded-lg hover:bg-amber-50 transition inline-flex items-center justify-center gap-2">
              <Linkedin className="w-5 h-5" />
              Hubungi via LinkedIn
            </a>
          </div>
        </div>
      </section>

      <footer className="bg-rose-950 text-white py-8">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-rose-200">© 2026 {PERSONAL_INFO.nama}. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

const rootElement = document.getElementById('root');
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(<App />);
}

