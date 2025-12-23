import Head from "next/head";
import Link from "next/link";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#9ECAD6] flex flex-col gap-10">
      <Head>
        <title>FakeStore | Головна</title>
      </Head>
      <Header />
      
      <main className="min-h-[70vh] w-full bg-[#9ECAD6] flex flex-col items-center gap-10 ">
        <div className="text-center space-y-8 mb-20">
          <div className="text-8xl hover:scale-110 transition-transform duration-300">
            🛍️
          </div>
          <h1 className="text-6xl font-bold text-white hover:scale-105 transition-transform duration-300 leading-tight">
            Ласкаво просимо до<br />
            <span className="text-[#F5CBCB]">FakeStore!</span>
          </h1>
          <p className="text-2xl text-white hover:text-[#F5CBCB] transition-colors duration-300 max-w-2xl mx-auto">
            Відкрийте для себе найкращі товари за вигідними цінами. Якість, швидкість, надійність!
          </p>
          
        </div>
        <div className="w-150 h-40 flex items-center justify-center flex-col bg-gradient-to-r from-white to-[#F5CBCB] rounded-3xl p-12 text-center shadow-2xl hover:scale-105 hover:shadow-2xl transition-all duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-6 hover:scale-105 transition-transform duration-300">
            Готові почати покупки?
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Приєднуйтесь до тисяч задоволених клієнтів, які вже обрали FakeStore
          </p>
          <div className="flex gap-6 justify-center flex-wrap">
            <Link href="/shop" className="bg-[#9ECAD6] text-white w-40 h-12 flex items-center justify-center font-bold px-10 py-4 rounded-full hover:bg-[#7ab5c4] hover:scale-110 hover:shadow-xl transition-all duration-300 text-lg">
              🛍️ До магазину
            </Link>
            <Link href="/contact" className="bg-white text-[#9ECAD6] flex items-center justify-center font-bold px-10 py-4 rounded-full hover:bg-gray-100 hover:scale-110 hover:shadow-xl transition-all duration-300 text-lg border-2 border-[#9ECAD6]">
              📞 Зв'язатися з нами
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}