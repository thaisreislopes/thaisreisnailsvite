import { Catalogo } from "../components/Catalogo";
import { Equipe } from "../components/Equipe";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Newsletter } from "../components/Newsletter";
import { Slide } from "../components/Slide";

export function Home() {
  return (
    <>
      <Header />
      <main className="w-screen block pt-16 antialiased">
        <Slide />
        <Catalogo />
        <Equipe />
        <Newsletter />
        <Footer />
      </main>
    </>
  );
}
