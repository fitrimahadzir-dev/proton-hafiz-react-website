import React, { useState, useEffect } from 'react';
import { Mail, Phone, MessageCircle, MapPin, CheckCircle2, Wrench, Car, ShieldCheck, Building2, Menu, X, ChevronLeft, ChevronRight, Facebook } from 'lucide-react';
//import dp from "./asset/dp.png"; // 👈 Gambar DP

const TiktokIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isBannerHovered, setIsBannerHovered] = useState(false);

  

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'UTAMA', href: '#utama' },
    { name: 'TENTANG SAYA', href: '#tentang-saya' },
    { name: 'MODEL KERETA', href: '#model-kereta' },
    { name: 'KEISTIMEWAAN PROTON', href: '#keistimewaan' },
    { name: 'GALERI', href: '#galeri' },
    { name: 'HUBUNGI SAYA', href: '#hubungi' },
  ];

 const carList = ["saga","iriz","persona","s70","x50","x70","x90"];

const bannerSlides = carList.map((name, index) => ({
  id: index + 1,
  image: `/images/banner-${name}.avif`,
  alt: `Proton ${name.toUpperCase()} Banner`
}));

  useEffect(() => {
    if (isBannerHovered) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [isBannerHovered, bannerSlides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % bannerSlides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? bannerSlides.length - 1 : prev - 1));
  };

  const models = [
  { name: 'Saga', fullName: 'PROTON SAGA', price: 'Bermula Dari RM37,990', image: '/images/saga.png', logo: '/images/logo-saga.png' },
  { name: 'Iriz', fullName: 'PROTON IRIZ', price: 'Bermula Dari RM42,800', image: '/images/iriz.png', logo: '/images/logo-iriz.png' },
  { name: 'Persona', fullName: 'PROTON PERSONA', price: 'Bermula Dari RM47,800', image: '/images/persona.png', logo: '/images/logo-persona.png' },
  { name: 'S70', fullName: 'PROTON S70', price: 'Bermula Dari RM73,800', image: '/images/s70.png', logo: '/images/logo-s70.png' },
  { name: 'X50', fullName: 'PROTON X50', price: 'Bermula Dari RM86,300', image: '/images/x50.png', logo: '/images/logo-x50.png' },
  { name: 'X70', fullName: 'PROTON X70', price: 'Bermula Dari RM98,800', image: '/images/x70.png', logo: '/images/logo-x70.png' },
  { name: 'X90', fullName: 'PROTON X90', price: 'Bermula Dari RM123,800', image: '/images/x90.png', logo: '/images/logo-x90.png' },
];

  const features = [
    {
      title: 'Harga Mampu Milik',
      description: 'Proton menawarkan harga yang mampu dimiliki oleh hampir keseluruhan rakyat Malaysia dimana harga ini adalah lebih rendah dibandingkan harga-harga kereta dari syarikat pengeluar kereta yang lain.',
      icon: <CheckCircle2 className="w-12 h-12 text-emerald-500" />,
    },
    {
      title: 'Mudah Trade In',
      description: 'Anda tidak akan menemui kesukaran untuk menjual kereta Proton anda, sekiranya berhasrat untuk menukar ke kereta baru, suatu masa nanti kerana kereta Proton sangat popular dikalangan rakyat Malaysia.',
      icon: <MessageCircle className="w-12 h-12 text-blue-500" />,
    },
    {
      title: 'Pusat Service',
      description: 'Pusat Jualan & Servis Proton boleh didapati di seluruh negara. Malah, ia juga didapati di sebahagian bandar kecil. Maka, tidak sukar untuk anda mendapatkan perkhidmatan selepas jualan.',
      icon: <Wrench className="w-12 h-12 text-orange-500" />,
    },
    {
      title: 'Kereta Berprestasi',
      description: 'Kereta Proton dibangunkan dengan menggunakan teknologi pintar dan terkini. Enjinnya direka untuk pemanduan yang sempurna, pantas, dan menjimatkan minyak!',
      icon: <Car className="w-12 h-12 text-red-500" />,
    },
    {
      title: 'Selamat Dipandu',
      description: 'Walaupun ditawarkan pada harga mampu milik, namun Proton tidak mengabaikan aspek keselamatan pemandu dan penumpangnya. Buktinya, Proton telah dianugerahkan 5 bintang oleh Asean NCAP Safety.',
      icon: <ShieldCheck className="w-12 h-12 text-blue-600" />,
    },
    {
      title: 'Syarikat Pengeluaran',
      description: 'Proton telah berada di pasaran Malaysia sejak dari tahun 1993 dan kekal menjadi pilihan rakyat Malaysia sehingga sekarang. Malah, telah berjaya menembusi pasaran enam negara, termasuk United Kingdom.',
      icon: <Building2 className="w-12 h-12 text-gray-700" />,
    },
  ];

  //const galleryImages = Array(9).fill('https://images.unsplash.com/photo-1560958089-b8a1929cea89?auto=format&fit=crop&q=80&w=600&h=600');

  const galleryImages = Array.from({ length: 12 }, (_, i) => `/images/${i + 1}.avif`); // gambar testimoni

  return (
  <div className="min-h-screen bg-white font-sans text-gray-800">

   {/* Top Bar */}
<div className="bg-[#092b33] h-5">
  <div className="max-w-7xl mx-auto h-full"></div>
</div>

    {/* Header */}
    <header className={`sticky top-0 z-50 bg-white transition-all duration-300 flex items-center ${isScrolled ? 'shadow-md py-2' : 'py-3 md:py-3'}`}>
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">

        {/* Left side: Logo */}
        <div className="flex items-center">
          <img 
            src="/images/proton-hafiz[logo].png" 
            alt="Proton Logo" 
            className="h-8 lg:h-14 object-contain"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right side: CTAs + Contact Info */}
        <div className="flex items-center space-x-3 md:space-x-6">
          
          {/* Desktop Contact Info */}
          <div className="hidden lg:flex flex-col items-end mr-2">
            <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider mb-0.5">Hubungi Penasihat Jualan</span>
            <a href="tel:0199178981" className="text-xl font-black text-gray-900 hover:text-red-600 transition-colors flex items-center">
              <Phone className="w-5 h-5 mr-2 text-red-600" />
              019-917 8981
            </a>
          </div>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <a 
              href="https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20ingin%20membuat%20tempahan%20pandu%20uji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center bg-[#092b33] text-white px-5 py-2.5 rounded font-bold text-sm hover:bg-[#0c3f4b] transition-colors shadow-sm"
            >
              <Car className="w-4 h-4 mr-2" />
              Test Drive
            </a>
            <a 
              href="https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20ingin%20bertanya%20tentang%20kereta%20Proton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hidden lg:flex items-center justify-center bg-[#25D366] text-white px-6 py-2.5 rounded font-bold text-sm hover:bg-[#1ebd5a] transition-colors shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2"></i>
              <span>WhatsApp Saya</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-gray-800 p-1 hover:bg-gray-100 rounded"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

        </div>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-gray-100 py-2 flex flex-col">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-sm font-bold text-gray-800 hover:text-red-600 hover:bg-gray-50 py-3 px-6 border-b border-gray-50"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <div className="p-4 flex flex-col space-y-3 bg-gray-50">
            <a 
              href="https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20ingin%20bertanya%20tentang%20kereta%20Proton" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-[#25D366] text-white px-4 py-3 rounded font-bold text-sm w-full shadow-sm"
            >
              <i className="fa-brands fa-whatsapp text-xl mr-2"></i>
              WhatsApp Saya
            </a>
            <a 
              href="https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20ingin%20membuat%20tempahan%20pandu%20uji" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-center bg-black text-white px-4 py-3 rounded font-bold text-sm w-full shadow-sm"
            >
              <Car className="w-5 h-5 mr-2" />
              Book Test Drive
            </a>
          </div>
        </div>
      )}
    </header>

      {/* Hero Section */}
      <section id="utama" className="w-full bg-white">
        <div 
          className="w-full bg-white relative overflow-hidden group"
          onMouseEnter={() => setIsBannerHovered(true)}
          onMouseLeave={() => setIsBannerHovered(false)}
        >
          {/* Carousel Track */}
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {bannerSlides.map((slide) => (
              <div key={slide.id} className="w-full flex-shrink-0 flex justify-center">
                <img 
                  src={slide.image} 
                  alt={slide.alt} 
                  className="w-full h-auto object-contain block mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-2 md:left-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button 
            onClick={nextSlide}
            className="absolute right-2 md:right-6 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Pagination Dots */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
            {bannerSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors duration-300 ${
                  currentSlide === index ? 'bg-red-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
        <div className="container mx-auto px-4 py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-anton font-black text-gray-900 uppercase tracking-wide mb-4">
            Promosi Hebat Terkini
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Rebut peluang untuk memiliki kereta idaman anda dengan tawaran yang tidak masuk akal. Hubungi saya sekarang untuk maklumat lanjut!
          </p>
          <a href="#model-kereta" className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors shadow-lg shadow-red-600/30">
            <Car className="w-5 h-5 mr-2" />
            LIHAT MODEL
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang-saya" className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-8 max-w-6xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-5/12">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/images/dp.avif"
                  alt="Hafiz - Penasihat Jualan" 
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div className="w-full md:w-7/12">
              <h4 className="text-red-600 font-anton font-bold text-sm tracking-wider uppercase mb-2">Proton Hafiz</h4>
              <h2 className="text-4xl md:text-5xl font-anton font-black text-gray-900 mb-6 uppercase tracking-wide">Hi, Saya Hafiz</h2>
              
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Saya merupakan <strong className="text-gray-900">Penasihat Jualan Kereta Proton di Teluk Intan</strong> yang berpengalaman lebih <strong className="text-gray-900">10 tahun</strong> dalam bidang pengurusan pembelian kereta dan pakar dalam bidang loan kereta Proton.
                </p>
                <p>
                  Saya telah berjaya membantu dan menguruskan banyak tempahan pelanggan dari Teluk Intan & sekitar Perak serta dari seluruh Malaysia untuk mendapatkan kereta Proton.
                </p>
                <p>
                  Hubungi saya sekarang untuk sebarang pertanyaan berkaitan <strong className="text-gray-900">promosi terbaru Proton</strong>. Saya akan bantu uruskan order anda dengan <strong className="text-gray-900">Pantas & Profesional</strong>.
                </p>
                <p className="font-bold text-gray-900 text-lg">
                  #OnlineBooking #ProtonTelukIntan #ProtonMalaysia
                </p>
              </div>

              <div className="flex gap-4 pt-4">
                  <a href="https://www.facebook.com/muhammad.hafiz.980315/" className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md">
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a href="https://www.tiktok.com/@proton_hafizhaidher88" className="w-10 h-10 bg-black text-white rounded-xl flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md">
                    <TiktokIcon className="w-5 h-5" />
                  </a>
                </div>

            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h3 className="text-4xl md:text-5xl font-anton font-black text-red-600 tracking-wide mb-2">1,000+</h3>
              <p className="text-gray-600 font-medium">Kereta Terjual</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-anton font-black text-red-600 tracking-wide mb-2">10+</h3>
              <p className="text-gray-600 font-medium">Pengalaman</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-anton font-black text-red-600 tracking-wide mb-2">95%</h3>
              <p className="text-gray-600 font-medium">Kereta Lulus</p>
            </div>
            <div>
              <h3 className="text-4xl md:text-5xl font-anton font-black text-red-600 tracking-wide mb-2">1,000+</h3>
              <p className="text-gray-600 font-medium">Pelanggan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Models Section */}
      <section id="model-kereta" className="py-24 bg-[#092b33]">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-anton font-black text-white uppercase tracking-wide mb-4">Model Kereta Proton</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model, index) => (
              <div key={index} className="flex flex-col items-center bg-white rounded-3xl p-6 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100 group hover:shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-shadow duration-300">
                <div className="w-full h-48 mb-6 overflow-hidden flex items-center justify-center">
                  <img 
                    src={model.image} 
                    alt={model.name} 
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                
                <div className="text-center mb-4">
                  <img src={model.logo} alt={model.fullName} className="h-8 mx-auto object-contain" referrerPolicy="no-referrer" />
                </div>
                
                <p className="text-xl font-bold text-[#00205B] mb-6">{model.price}</p>
                
                <a 
                  href={`https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20berminat%20dengan%20model%20${encodeURIComponent(model.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-[40px] w-auto bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 rounded-full inline-flex flex-row items-center justify-center whitespace-nowrap shrink-0 transition-colors"
                >
                  <i className="fa-brands fa-whatsapp text-base mr-2 shrink-0"></i>
                  WhatsApp
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

{/* VIDEO Section */}
      <section id="video" className="py-24 bg-gray-50">
  <div className="container mx-auto px-4 max-w-6xl">
    
    {/* header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-anton font-black text-gray-900 uppercase tracking-wide mb-4">
        Video Kereta Idaman Anda
      </h2>
      <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-2xl mx-auto">
        Tonton video model Proton terkini.
      </p>
    </div>

    {/* Video Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      
      {[
        "https://www.youtube.com/embed/y4vS1jVcbCI",
        "https://www.youtube.com/embed/Iocuz8fz1Pk",
        "https://www.youtube.com/embed/mT2c8fpX2yI",
        "https://www.youtube.com/embed/bIpZt8o8SQM",
        "https://www.youtube.com/embed/_y1Yq9xI_Q8",
        "https://www.youtube.com/embed/Bg8ZvIDuk1I",
      ].map((video, index) => (
        
        <div key={index} className="aspect-video rounded-lg overflow-hidden shadow-md">
          <iframe
            src={video}
            title={`YouTube video ${index + 1}`}
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      ))}

    </div>
  </div>
</section>

{/* KELEBIHAN */}
<section id="kelebihan" className="py-24 bg-white">
  <div className="max-w-5xl mx-auto px-4">
    
    {/* Header */}
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-anton font-black text-gray-900 uppercase mb-4">
        Kenapa Pilih Saya?
      </h2>
      <div className="w-12 h-1 bg-red-600 mx-auto mb-6"></div>
      <p className="text-gray-600 max-w-xl mx-auto">
        Saya komited membantu anda mendapatkan kereta impian dengan proses yang mudah dan pantas.
      </p>
    </div>

    {/* Grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">

      {[
        {
          title: "Lulus Loan Tinggi",
          desc: "Kadar kelulusan pinjaman yang tinggi dengan pelbagai bank panel.",
          icon: "📈",
        },
        {
          title: "Proses Pantas",
          desc: "Permohonan cepat, kelulusan dalam masa singkat.",
          icon: "⚡",
        },
        {
          title: "Free Gift Menarik",
          desc: "Pelbagai hadiah percuma untuk setiap pembelian.",
          icon: "🎁",
        },
        {
          title: "Trade-In Mudah",
          desc: "Tukar kereta lama dengan harga terbaik.",
          icon: "🚗",
        },
        {
          title: "Servis Profesional",
          desc: "Layanan mesra dan profesional dari awal hingga akhir.",
          icon: "🤝",
        },
        {
          title: "Support Sepanjang Masa",
          desc: "Bantuan sebelum dan selepas pembelian.",
          icon: "💬",
        },
      ].map((item, index) => (

        <div 
          key={index}
          className="p-6 border border-gray-100 rounded-xl hover:shadow-md transition duration-300"
        >
          <div className="text-3xl mb-4">{item.icon}</div>
          <h3 className="font-semibold text-lg text-gray-900 mb-2">
            {item.title}
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            {item.desc}
          </p>
        </div>

      ))}

    </div>
  </div>
</section>



     

      {/* Gallery Section */}
      <section id="galeri" className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-anton font-black text-gray-900 uppercase tracking-wide mb-4">Galeri Gambar 'Happy Customer'</h2>
            <div className="w-16 h-1 bg-red-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Ramai pelanggan dah berjaya dapatkan kereta impian mereka — mungkin giliran anda pula.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-lg shadow-sm group">
                <img 
                  src={img}
                  alt={`Happy Customer ${index + 1}`} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="hubungi" className="py-24 bg-[#ebfafc] border-t border-gray-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex flex-col lg:flex-row gap-16">
            {/* Left Column - Info & Map */}
            <div className="w-full lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-anton font-black text-gray-900 uppercase tracking-wide mb-4">Tempah Sekarang</h2>
              <div className="w-16 h-1 bg-red-600 mb-8"></div>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                Hubungi saya sekarang untuk tempah kereta Proton idaman anda. Saya sedia membantu anda merialisasikan impian anda untuk memiliki kereta Proton.
              </p>
              <p className="text-gray-900 font-semibold mb-8">
                Pandu pulang kereta baru anda hari ini!
              </p>

              <a 
                href="https://wa.me/60199178981?text=Hi%20Hafiz,%20saya%20dari%20website%20ingin%20menempah%20kereta%20Proton"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-full inline-flex items-center transition-colors shadow-lg shadow-green-600/30 mb-12"
              >
                <i className="fa-brands fa-whatsapp text-xl mr-2"></i>
                WHATSAPP SEKARANG
              </a>

              {/* Map */}
              <div className="w-full h-64 bg-gray-200 rounded-xl overflow-hidden shadow-inner relative">
                <iframe 
                  src="https://maps.google.com/maps?q=Proton+Han+333+Otomobil+3S+-+Teluk+Intan&t=&z=15&ie=UTF8&iwloc=&output=embed" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Proton Han 333 Otomobil 3S - Teluk Intan"
                ></iframe>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="w-full lg:w-1/2">
              <div className="bg-white p-4 md:p-8 rounded-2xl shadow-xl border border-gray-100">
                <iframe src="https://whatsform.com/xtg7bo" width="100%" height="600" frameBorder="0"></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#092b33] text-white pt-16 pb-8">
        <div className="container mx-auto px-4 max-w-6xl text-center">
          <div className="flex flex-col items-center justify-center mb-5">
            <img 
              src="/images/proton-hafiz[whitelogo].png" 
              alt="Proton Logo" 
              className="h-12 lg:h-16 object-contain mb-1 brightness-0 invert"
              referrerPolicy="no-referrer"
            />
          </div>

           <div className="flex gap-4 justify-center">
              <a href="https://www.facebook.com/muhammad.hafiz.980315/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center hover:bg-blue-600 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@proton_hafizhaidher88" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 text-white rounded-xl flex items-center justify-center hover:bg-white hover:text-black transition-colors">
                <TiktokIcon className="w-5 h-5" />
              </a>
            </div>

            <div className="h-6"></div>  {/* tukar h-6 ke h-8/h-10 ikut nak lebih space */}
          
          {/* <h3 className="text-xl font-bold mb-6">Proton Hafiz - Pengedar Sah Proton</h3> */}
          
          <p className="text-gray-400 text-sm max-w-4xl mx-auto leading-relaxed mb-12">
            <strong className="text-white">Proton Hafiz</strong> - Saya merupakan penasihat jualan Proton yang sah dan berdaftar. Perkhidmatan saya meliputi kawasan Teluk Intan, seluruh Perak & seluruh semenanjung Malaysia. Saya menawarkan pelbagai model dan promosi terkini dari Proton. Saya berpengalaman lebih 10 tahun sebagai penasihat jualan kereta dan saya telah bantu ramai pelanggan mendapatkan kereta idaman mereka. Saya juga menawarkan khidmat nasihat dan pencerahan secara percuma untuk pelanggan-pelanggan.
          </p>
          
          <div className="border-t border-gray-800 pt-8 text-xs text-gray-500 space-y-2">
            <p>COPYRIGHT © 2026 - protonhafiz.com - All Right Reserved.</p>
            <p><strong className="text-gray-400">Disclaimer:</strong> Ini laman web Penasihat Jualan Proton yang sah dan berdaftar, bukannya laman web rasmi Proton.</p>
            <p>Web Design By <a href="https://www.fitrimaahdzir.my" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white font-bold transition-colors">Fitri Mahadzir</a></p>
          </div>
        </div>
      </footer>
    </div>
  );
}
