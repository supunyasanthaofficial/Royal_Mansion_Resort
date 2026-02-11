import Header from "../components/Header";

import header2 from "../assets/images/Header2.jpg";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="where luxury meets tranquility. Experience an unforgettable escape with elegance, comfort, and breathtaking surroundings."
        bgImage={header2}
      />

      {/* <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif">Explore Our Story</h2>
      </section> */}
    </main>
  );
};

export default Home;
