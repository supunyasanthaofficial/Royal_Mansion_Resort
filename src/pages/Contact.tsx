import Header from "../components/Header";

import header4 from "../assets/images/Header4.jpg";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="Do you want enquire about our pricing, current offers and arrangements we can help you with? Give us a call or send in your concerns through the form below."
        bgImage={header4}
        height="h-[70vh]"
      />

      {/* <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif">Explore Our Story</h2>
      </section> */}
    </main>
  );
};

export default Home;
