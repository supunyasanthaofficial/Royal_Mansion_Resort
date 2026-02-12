import Header from "../components/Header";

import header2 from "../assets/images/Header2.jpg";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="From a hidden tropicl escape to a symbol of elegance, Royal Mansion Resort Villa was born out of a dream to offer unforgettable getways in the heart of Sri Lanka."
        bgImage={header2}
        height="h-[70vh]"
      />

      {/* <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif">Explore Our Story</h2>
      </section> */}
    </main>
  );
};

export default Home;
