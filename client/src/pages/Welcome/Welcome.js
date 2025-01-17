import React from "react";
import BottomBar from "../../components/BottomBar/BottomBar";
import FeatureStash from "../../components/Feature-stash/Feature-stash";
import FeatureSpeed from "../../components/Feature-speed/Feature-speed";
import FeatureScrape from "../../components/Feature-scrape/Feature-scrape";

import "./Welcome.scss";

const Welcome = props => {
  
  return (
    <div className="welcome">
      <FeatureStash />
      <FeatureSpeed />
      <FeatureScrape />
      <BottomBar />
    </div>
  );
};

export default Welcome;
