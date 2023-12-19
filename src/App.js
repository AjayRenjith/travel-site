import React from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Layouts/Header/Header";
import BucketList from "./Pages/Home/BucketList/BucketList";
import Experience from "./Pages/Home/Experience/Experience";
import { HoverProvider } from "./assets/js/HoverContext";
import FeaturedOffers from "./Pages/Home/FeaturedOffers/FeaturedOffers";
import ExploreDifferent from "./Pages/Home/ExploreDifferent/ExploreDifferent";
import TravelEasier from "./Pages/Home/TravelEasier/TravelEasier";
import TravelDeals from "./Pages/Home/TravelDeals/TravelDeals";
import CountryWise from "./Pages/Home/CountryWise/CountryWise";
import TravelersChoice from "./Pages/Home/TravelersChoice/TravelersChoice";
import Plan from "./Pages/Home/Plan/Plan";
import StartJourney from "./Pages/Home/StartJourney/StartJourney";
import StartJourneyCard from "./Pages/Home/StartJourneyCard/StartJourneyCard";
import Map from "./Pages/Home/Map/Map";
import TrendingDestinations from "./Pages/Home/TrendingDestinations/TrendingDestinations";
import NewsLetterForm from "./Pages/Home/NewsLetterForm/NewsLetterForm";
import Footer from "./Layouts/Footer/Footer";

const App = () => {
  return (
    <div className="overflow-hidden">
      <HoverProvider>
        <Header />
      </HoverProvider>
      <BucketList />
      <StartJourney />
      <Experience />
      <TravelDeals />
      <Map />
      <FeaturedOffers />
      <TravelEasier />
      <CountryWise />
      <TravelersChoice />
      <ExploreDifferent />
      <StartJourneyCard />
      <Plan />
      <TrendingDestinations />
      <NewsLetterForm />
      <Footer />
    </div>
  );
};

export default App;
