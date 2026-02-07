
import React from "react";
import Navbar from "../components/home/Navbar";
import Footer from "../components/home/footer";
import IndustriesGrid from "../components/home/industriesgrid";
import { industriesData } from "../constants/industriesData";
// We can reuse the IndustriesGrid component but pass the full data
// Or if we need a different layout, we can create a custom grid here.
// IndustriesGrid seems to handle layout well, let's reuse it.

const AllIndustries = () => {
    const [dynamicIndustries, setDynamicIndustries] = React.useState([]);

    React.useEffect(() => {
        const fetchDynamic = async () => {
            try {
                const res = await fetch(`${process.env.REACT_APP_API_URL}/api/getindustries`);
                if (res.ok) {
                    const data = await res.json();
                    setDynamicIndustries(data);
                }
            } catch (err) {
                console.error("Error fetching industries:", err);
            }
        };
        fetchDynamic();
    }, []);

    const allIndustries = [...industriesData, ...dynamicIndustries];

    return (
        <div>
            <Navbar />
            <div className="pt-20">
                <IndustriesGrid industries={allIndustries} separate="false" />
            </div>
            <Footer />
        </div>
    );
};

export default AllIndustries;
