
import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import IndustriesGrid from "../components/home/industriesgrid";
import { industriesData } from "../constants/industriesData";
// We can reuse the IndustriesGrid component but pass the full data
// Or if we need a different layout, we can create a custom grid here.
// IndustriesGrid seems to handle layout well, let's reuse it.

const AllIndustries = () => {
    return (
        <div>
            <Navbar />
            {/* Reusing IndustriesGrid with separate="true" to show learn more button or similar if needed 
          However, IndustriesGrid props are: ({ industries, separate })
          If separate is true, it shows "Learn more" button linking to casestudy.
          If separate is false (default), it shows placement count.
          
          The user wanted "like blogs page", which usually means a grid of cards.
          IndustriesGrid provides exactly that. 
          Let's pass separate="false" to show placements as that looks cleaner for a general listing,
          or we can modify IndustriesGrid to be more flexible if needed.
          
          Wait, the user said "industry dropdown used in the admin panel... show blogs like page (not only industry names get some more info for each)"
          
          The `industriesData` has images and descriptions, so passing it to IndustriesGrid should work perfectly.
      */}
            <div className="pt-20"> {/* Add padding for fixed navbar if needed, though Navbar in this project might not be fixed. Checking other pages... */}
                <IndustriesGrid industries={industriesData} separate="false" />
            </div>
            <Footer />
        </div>
    );
};

export default AllIndustries;
