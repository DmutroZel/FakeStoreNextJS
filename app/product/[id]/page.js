
import Link from "next/link";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";



export async function generateStaticParams() {
  const res = await fetch("https://fakestoreapi.com/products");
  const products = await res.json();

  return products.map((product) => ({
    id: product.id.toString(),
  }));
}
export async function generateMetadata({ params }) {
  const res = await fetch(`https://fakestoreapi.com/products/${params.id}`);
  const product = await res.json();

  return {
    title: `${product.title} | FakeStore`,
  };
}


export default async function ProductPage({ params }) {
  const res = await fetch(
    `https://fakestoreapi.com/products/${params.id}`
  );
  const product = await res.json();

  return (
    <div className="min-h-screen w-full bg-[#9ECAD6] flex flex-col">
      <Head>
        <title>{product.title} | FakeStore</title>
      </Head>
      <Header />

      <main className="flex-grow flex items-center justify-center px-4 py-12">
        <div className="container mx-auto max-w-6xl">
          <Link href="/shop" className="inline-flex items-center gap-2 text-white text-lg font-semibold mb-8 hover:translate-x-2 transition-transform duration-300">
            <span className="text-2xl">←</span> Назад до магазину
          </Link>
          <div className="bg-gradient-to-br from-[#FFE5E5] to-[#FFF5F5] rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-shadow duration-300">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
              <div className="bg-white p-12 flex items-center justify-center">
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#9ECAD6] to-[#F5CBCB] rounded-3xl blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-300"></div>
                  <img src={product.image} alt={product.title} className="relative max-h-[500px] object-contain group-hover:scale-110 transition-transform duration-500" />
                </div>
              </div>
              <div className="p-12 flex flex-col justify-center space-y-6">
                <div className="inline-flex items-center gap-2 w-fit">
                  <span className="bg-[#9ECAD6] text-white px-4 py-2 rounded-full text-sm font-bold hover:scale-110 transition-transform duration-300">
                    {product.category}
                  </span>
                  <span className="bg-white px-4 py-2 rounded-full text-sm font-bold text-gray-700 hover:scale-110 transition-transform duration-300 flex items-center gap-1">
                    ⭐ {product.rating?.rate || "N/A"}
                    <span className="text-gray-500 text-xs">({product.rating?.count})</span>
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-gray-800 hover:text-[#9ECAD6] transition-colors duration-300 leading-tight">
                  {product.title}
                </h1>
                <p className="text-gray-600 leading-relaxed text-lg hover:text-gray-800 transition-colors duration-300">
                  {product.description}
                </p>
                <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300">
                  <p className="text-sm text-gray-500 mb-2">Ціна:</p>
                  <p className="text-5xl font-bold text-[#9ECAD6] hover:scale-110 transition-transform duration-300 inline-block">
                    ${product.price}
                  </p>
                </div>
                <div className="flex gap-4 pt-4">
                  <button className="flex-1 bg-[#9ECAD6] text-white font-bold py-4 px-8 rounded-2xl hover:bg-[#7ab5c4] hover:scale-105 hover:shadow-2xl transition-all duration-300 text-lg">
                    🛒 Додати в кошик
                  </button>
                  <button className="bg-white text-[#9ECAD6] font-bold py-4 px-6 rounded-2xl hover:bg-[#F5CBCB] hover:text-white hover:scale-105 hover:shadow-2xl transition-all duration-300 text-2xl">
                    ❤️
                  </button>
                </div>
                <div className="grid grid-cols-3 gap-4 pt-6 border-t-2 border-gray-200">
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl mb-2">🚚</div>
                    <p className="text-sm text-gray-600 font-semibold">Швидка доставка</p>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl mb-2">🔒</div>
                    <p className="text-sm text-gray-600 font-semibold">Безпечна оплата</p>
                  </div>
                  <div className="text-center hover:scale-110 transition-transform duration-300">
                    <div className="text-3xl mb-2">↩️</div>
                    <p className="text-sm text-gray-600 font-semibold">Легке повернення</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}


