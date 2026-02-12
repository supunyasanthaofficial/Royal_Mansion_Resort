import Header from "../components/Header";
import InfoSection from "../components/InfoSection";

import header1 from "../assets/images/Header1.jpg";
import ContactCTA from "../components/ContactCTA";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="where luxury meets tranquility. Experience an unforgettable escape with elegance, comfort, and breathtaking surroundings."
        bgImage={header1}
        showButton={true}
      />
      <InfoSection />
      <ContactCTA/>
    </main>
  );
};

export default Home;
