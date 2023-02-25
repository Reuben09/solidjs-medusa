import { A } from "solid-start";
import Footer from "~/components/Footer";
import Products from '~/components/Products';
import Header from '~/components/Header'
export default function Home() {
  return (
    <main>
       <Header />
       <Footer />
       <Products />
    </main>
  );
}
