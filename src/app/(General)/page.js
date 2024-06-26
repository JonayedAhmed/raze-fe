import AllProducts from "@/components/AllProducts";
import HomePageRoundedOptions from "@/components/HomePageRoundedOptions";
import HomepageCarousel from "@/components/HomepageCarousel";
import Head from "next/head";

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
        <section aria-label="Categories">
          <HomePageRoundedOptions />
        </section>
        <section aria-label="Products">
          <AllProducts />
        </section>
      </main>
    </>
  );
}
