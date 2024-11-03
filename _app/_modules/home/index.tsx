/* eslint-disable prettier/prettier */
import HomeBanner from "@/root/_app/components/molecules/HomeBanner";
import IncredibleDeals from "@/root/_app/components/molecules/IncredibleDeals";
import NewestHappeing from "@/root/_app/components/molecules/NewestHappening";
import BestThingsToDo from "@/root/_app/components/molecules/BestThingsToDo";
import Accomodation from "@/root/_app/components/molecules/Accommodation";

const Home: React.FC = () => {
  return (
    <div>
      <HomeBanner />
      <div className="pt-40">
        <IncredibleDeals />
      </div>
      <div className="pt-40">
        <NewestHappeing />
      </div>
      <div className="pt-40">
        <BestThingsToDo />
      </div>
      <div className="pt-40">
        <Accomodation />
      </div>
    </div>
  );
};

export default Home;
