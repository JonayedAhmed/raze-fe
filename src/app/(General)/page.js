import ProductCard from "@/common/cards/ProductCard";
import HomepageCarousel from "@/components/HomepageCarousel";
import Head from "next/head";
import cloth2 from '../../../public/images/cloth2.png'

const product = {
  image: cloth2,
  title: 'Cool T-Shirt',
  subname: 'Summer Collection',
  rating: 4,
  reviews: 120,
  description: 'A cool t-shirt from the summer collection. Made from 100% cotton.',
  price: 29.99
};

export default function Home() {
  return (
    <>
      <Head>
        <title>Home - RAZE</title>
        <meta name="description" content="discover the best deals and discounts around" />
        <meta name="keywords" content="discount, RAZE, char, offer, shoe, sneaker, dress, clothing, buffet, personal care, beauty products, electronics, gadget" />
      </Head>

      <main>
        <section aria-label="Carousel">
          <HomepageCarousel />
        </section>


        <div className="p-4">
          <ProductCard product={product} />
        </div>

      </main>
    </>
  );
}
