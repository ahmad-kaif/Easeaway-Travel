import React from "react";

import GlobalVacation from "./globalVacation/GlobalVacation";
import IndianPackage from "./indianPackages/IndianPackage";
import BikeTrips from "./bikePackages/BikeTrips";
import HoneymoonPackage from "./honeymoonPackages/HoneymoonPackage";
import CommunityPackage from "./communityPackage/CommunityPackage";

const Packages = () => {

  return (
    <>
      <GlobalVacation/>
      <IndianPackage/>
      <BikeTrips/>
      <HoneymoonPackage/> 
      <CommunityPackage/>
    </>
  );
};

export default Packages;
