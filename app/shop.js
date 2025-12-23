import Head from "next/head";
import Link from "next/link";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";


export async function getStaticProps() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return {
    props: { products },
  };
}

export default function Shop({ products }) {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-[#9ECAD6] via-[#a8d4df] to-[#b8dde8] flex flex-col gap-6">
      <Head>
        <title>FakeStore | Магазин</title>
      </Head>
      <Header />
      
      <main className="flex flex-wrap justify-center items-center gap-10">
        
          <div className="text-center mb-16">
            <div className="inline-block mb-6">
              <span className="text-8xl hover:scale-125 transition-transform duration-300">🛍️</span>
            </div>
            <h1 className="text-6xl font-bold text-white mb-6 hover:scale-105 transition-transform duration-300 drop-shadow-lg">
              Наш магазин
            </h1>
            <p className="text-2xl text-white/90 max-w-2xl mx-auto">
              Знайдіть те, що вам потрібно серед найкращих товарів!
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <button className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full font-semibold hover:bg-white/30 hover:scale-105 transition-all duration-300 border-2 border-white/40">
                🔍 Всі категорії
              </button>
              <button className="bg-white text-[#9ECAD6] px-6 py-3 rounded-full font-semibold hover:bg-[#F5CBCB] hover:text-white hover:scale-105 transition-all duration-300 shadow-lg">
                ⭐ Популярні
              </button>
            </div>
          </div>
          
          <div className="flex flex-wrap justify-center items-center gap-10">
            {products.map((product, index) => {
              return (
                 <Link key={product.id} href={`/product/${product.id}`} className="w-[400px]  h-[400px] bg-white backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden border border-white/40">
                  <div className="relative">
                    <div className="p-6">
                      <div className="relative w-full h-72 mb-5 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl overflow-hidden flex items-center justify-center p-8 group-hover:from-[#9ECAD6]/5 group-hover:to-[#F5CBCB]/5 transition-all duration-500">
                        <div className="absolute top-4 right-4 w-12 h-12 bg-[#9ECAD6] flex justify-center items-center text-white px-4 py-1.5 rounded-full text-sm font-bold shadow-lg z-10 group-hover:scale-110 transition-transform duration-300">
                          ⭐ {product.rating?.rate}
                        </div>
                        <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-700 shadow-md">
                          {product.category}
                        </div>
                        <img src={product.image} className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-700" />
                      </div>
                      <div className="space-y-4">
                        <h2 className="text-xl font-bold text-gray-800 line-clamp-2 group-hover:text-[#7ab5c4] transition-colors duration-300 min-h-[3.5rem] leading-tight">
                          {product.title}
                        </h2>
                        <div className="flex items-end justify-between  border-gray-100 p-5 m-5">
                          <div>
                            <p className="text-xs text-gray-500 font-semibold uppercase tracking-wide mb-1">Ціна</p>
                            <p className="text-4xl font-black bg-gradient-to-r from-[#9ECAD6] to-[#7ab5c4] bg-clip-text text-transparent">
                              ${product.price}
                            </p>
                          </div>
                          <button className="bg-[#9ECAD6] text-white w-20 h-12 font-bold rounded-xl cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300 active:scale-95">
                            Купити
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
      </main>

      <Footer />
    </div>
  );
}