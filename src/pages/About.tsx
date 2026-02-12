import Header from "../components/Header";

import header2 from "../assets/images/Header2.jpg";
import AboutIntro from "../components/AboutIntro";
import OurStory from "../components/OurStory";

const Home = () => {
  return (
    <main>
      <Header
        title="Welcome to"
        subtitle="Royal Mansion Resort,"
        description="From a hidden tropicl escape to a symbol of elegance, Royal Mansion Resort Villa was born out of a dream to offer unforgettable getways in the heart of Sri Lanka."
        bgImage={header2}
        height="h-[80vh]"
      />
      <AboutIntro />
      <OurStory/>
    </main>
  );
};

export default Home;
