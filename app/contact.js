import Head from "next/head";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { useState } from 'react';

export default function Contact() {
   const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="min-h-screen w-full bg-[#9ECAD6] flex flex-col">
      <Head>
        <title>FakeStore | Розсилка</title>
      </Head>
      <Header />
      
      <main className="w-full min-h-[70vh] flex flex-col items-center justify-center">
      <div className=" w-2/5 h-[20vh] bg-gradient-to-r from-[#F5CBCB] to-[#FFE5E5] py-16 px-8 flex flex-col items-center justify-center rounded-3xl shadow-2xl">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              📧 Підпишіться на нашу розсилку
            </h2>
            <p className="text-xl text-gray-600">
              Отримуйте ексклюзивні знижки та новини про нові товари!
            </p>
          </div>

          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 justify-center items-center">
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" required className="w-full md:w-96 px-6 py-4 rounded-full border-3 border-[#9ECAD6] focus:outline-none focus:border-[#7ab5c4] text-gray-700 text-lg transition-all duration-300"/>
            <button type="submit" className="w-full md:w-auto bg-[#9ECAD6] text-white font-bold px-10 py-4 rounded-full hover:bg-[#7ab5c4] hover:scale-105 hover:shadow-xl transition-all duration-300 text-lg">
              Підписатись
            </button>
          </form>
        </div>
      </div>

      {showPopup && (
        <div className="absolute bottom-0 right-0 inset-0 flex items-center justify-center z-50 p-4">
          <div className="bg-gradient-to-br from-[#9ECAD6] to-[#7ab5c4] rounded-3xl p-12 max-w-md w-full shadow-2xl relative animate-scale-in">
            <button onClick={closePopup} className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-all duration-300 hover:scale-110">
              <span className="text-[#9ECAD6] text-2xl font-bold">×</span>
            </button>

            <div className="text-center">
              <div className="text-6xl mb-6">✉️</div>
              <h3 className="text-3xl font-bold text-white mb-6">
                Email збережено, дякуємо!
              </h3>
              <p className="text-white text-lg mb-8">
                Ви успішно підписалися на нашу розсилку. Очікуйте ексклюзивні пропозиції! 🎉
              </p>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes scale-in {
          from {
            transform: scale(0.9);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }
        .animate-scale-in {
          animation: scale-in 0.3s ease-out;
        }
      `}</style>
      </main>

      <Footer />
    </div>
  );
}