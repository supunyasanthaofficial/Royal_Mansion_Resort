import Header from "../components/Header";

import header3 from "../assets/images/Header3.jpg";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="We do not give you just rooms to stay. We give you an environment so you can expierence the best while on a holiday with us.Walk into our hotel and enjoy a refreshing, rejuvenating,day-off with us."
        bgImage={header3}
        height="h-[70vh]"
      />

      {/* <section className="py-20 bg-white text-center">
        <h2 className="text-3xl font-serif">Explore Our Story</h2>
      </section> */}
    </main>
  );
};

export default Home;
