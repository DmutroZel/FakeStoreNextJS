import Head from "next/head";
import Link from "next/link";

export default function Header() {
  return (
      <header className="w-full h-[15vh] bg-[#9ECAD6] text-[#F5CBCB] text-3xl font-bold border-b-8 border-[#F5CBCB] flex items-center justify-around">
        <Link href="/">
          <h1 className="cursor-pointer text-5xl hover:scale-110 transition-transform duration-300 hover:text-white">
            FakeStore
          </h1>
        </Link>
        <nav>
          <ul className="flex gap-10">
            <li>
              <Link href="/" className="hover:text-white hover:scale-110 inline-block transition-all duration-300 hover:drop-shadow-lg">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="hover:text-white hover:scale-110 inline-block transition-all duration-300 hover:drop-shadow-lg">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-white hover:scale-110 inline-block transition-all duration-300 hover:drop-shadow-lg">
                Mailing
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bg-[#FFEAEA] text-[#F5CBCB] rounded-full w-16 h-16 flex items-center justify-center text-4xl cursor-pointer hover:scale-110 hover:bg-white hover:shadow-xl transition-all duration-300">
          <i className="fa-solid fa-basket-shopping"></i>
        </div>
      </header>
  );
}