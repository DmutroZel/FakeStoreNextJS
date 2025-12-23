import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full min-h-[30vh] flex flex-col items-center justify-center bg-gradient-to-br from-[#6ea3b3] via-[#7ab5c4] to-[#9ECAD6] border-t-4 border-white/30 text-white">
      <div className="container mx-auto px-6 py-12">
        <div className="flex justify-around gap-12 mb-12">
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-3 ">
              <div className="text-5xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 ease-in-out">
                🛍️
              </div>
              <h3 className="text-3xl font-bold group-hover:scale-105 transition-transform duration-300">
                FakeStore
              </h3>
            </Link>
            <p className="text-white/90 text-base leading-relaxed max-w-xs">
              Ваш найкращий вибір для онлайн-покупок. Ми пропонуємо якість, швидкість та надійність у кожній покупці!
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-[#F5CBCB] hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out border-2 border-white/30 shadow-md">
                <i className="fa-brands fa-facebook-f"></i>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-[#F5CBCB] hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out border-2 border-white/30 shadow-md">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"aria-label="Twitter"className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-[#F5CBCB] hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out border-2 border-white/30 shadow-md">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://telegram.org" target="_blank" rel="noopener noreferrer"aria-label="Telegram"className="bg-white/20 backdrop-blur-md text-white w-12 h-12 rounded-full flex items-center justify-center text-xl hover:bg-[#F5CBCB] hover:scale-110 hover:rotate-6 transition-all duration-300 ease-in-out border-2 border-white/30 shadow-md">
                <i className="fa-brands fa-telegram"></i>
              </a>
            </div>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">🔗</span> Навігація
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span> 
                  <span className="group-hover:font-semibold">Головна</span>
                </Link>
              </li>
              <li>
                <Link href="/shop" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span> 
                  <span className="group-hover:font-semibold">Магазин</span>
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span> 
                  <span className="group-hover:font-semibold">Розсилка</span>
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">→</span> 
                  <span className="group-hover:font-semibold">Про нас</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">📦</span> Категорії
            </h4>
            <ul className="space-y-4">
              <li>
                <Link href="/electronics" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">📱</span> 
                  <span className="group-hover:font-semibold">Електроніка</span>
                </Link>
              </li>
              <li>
                <Link href="/clothing" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">👕</span> 
                  <span className="group-hover:font-semibold">Одяг</span>
                </Link>
              </li>
              <li>
                <Link href="/accessories" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">💍</span> 
                  <span className="group-hover:font-semibold">Аксесуари</span>
                </Link>
              </li>
              <li>
                <Link href="/home" className="text-white/90 hover:text-white hover:translate-x-2 inline-flex items-center gap-3 transition-all duration-300 ease-in-out text-lg group">
                  <span className="text-xl group-hover:scale-110 transition-transform duration-300">🏠</span> 
                  <span className="group-hover:font-semibold">Для дому</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-6">
            <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <span className="text-3xl">📞</span> Контакти
            </h4>
            <div className="space-y-6">
              <div className="group">
                <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-md">
                    <i className="fa-solid fa-location-dot"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Адреса</p>
                    <p className="font-semibold text-base">Київ, Україна</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-md">
                    <i className="fa-solid fa-phone"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Телефон</p>
                    <p className="font-semibold text-base">+380 (44) 123-45-67</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-md">
                    <i className="fa-solid fa-envelope"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Email</p>
                    <p className="font-semibold text-base">info@fakestore.ua</p>
                  </div>
                </div>
              </div>
              
              <div className="group">
                <div className="flex items-center gap-3 text-white/90 hover:text-white transition-all duration-300 ease-in-out hover:translate-x-2">
                  <div className="bg-white/20 backdrop-blur-md w-10 h-10 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300 border border-white/30 shadow-md">
                    <i className="fa-solid fa-clock"></i>
                  </div>
                  <div>
                    <p className="text-sm text-white/70">Графік</p>
                    <p className="font-semibold text-base">Пн-Пт: 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t-2 border-white/30 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
            <p className="text-white/90 hover:text-white transition-colors duration-300">
              © 2025 <span className="font-bold">FakeStore</span>. Всі права захищені.
            </p>
            <div className="flex flex-wrap gap-6 text-white/80">
              <Link href="/privacy" className="hover:text-white hover:scale-105 transition-all duration-300 font-medium">
                Політика конфіденційності
              </Link>
              <Link href="/terms" className="hover:text-white hover:scale-105 transition-all duration-300 font-medium">
                Умови використання
              </Link>
              <Link href="/faq" className="hover:text-white hover:scale-105 transition-all duration-300 font-medium">
                FAQ
              </Link>
            </div>
          </div>

          <div className="text-center mt-6">
            <p className="text-white/70 text-sm hover:text-white transition-colors duration-300 group">
              Зроблено з <span className="text-red-400 text-base animate-pulse group-hover:animate-bounce">❤️</span> в Україні
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}