import Header from "../components/Header";
import Offers from "../components/Offers";
import header3 from "../assets/images/Header3.jpg";
import Services from "../components/Services"
const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="We do not give you just rooms to stay. We give you an environment so you can expierence the best while on a holiday with us.Walk into our hotel and enjoy a refreshing, rejuvenating,day-off with us."
        bgImage={header3}
        height="h-[80vh]"
      />

      <Offers />
      <Services/>
    </main>
  );
};

export default Home;
