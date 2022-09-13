import { Catalogo } from "../components/Catalogo";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Slide } from "../components/Slide";

export function Home() {
  return (
    <>
      <Header />
      <main className="w-screen block pt-20">
        <Slide />
        <Catalogo />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
