import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Products from './components/Products';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-luxury-black">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Products />
      </main>
      <Footer />
    </div>
  );
}
