import Nav from "./components/Nav";
import { CustomerReviews, Footer, Hero, Services, SuperQuality, Subscribe,PopularProducts, SpecialOffer } from "./sections";
const App = () => (
  <main className="realtive">
    <Nav />
    <section className="xl:padding-l wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services />
    </section>
    <section className="padding">
      <SpecialOffer />
    </section>
    <section className="padding bg-plate-blue">
      <CustomerReviews />
    </section>
    <section className="padding padding-x sm:py-32 py-16 w-full">
      <Subscribe />
    </section>
    <section className="padding bg-black padding-x padding-t pb-8">
      <Footer />
    </section>
  </main>
);

export default App;