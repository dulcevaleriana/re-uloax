import React  from "react";
import AppDownloadInfo from "../component/AppDownloadInfo";
import CardDriver from "../component/CardDriver";
import CardInfo from "../component/CardInfo";
import TabHome from "../component/TabHome";

const Home = () => {
    return(
        <div className="class-Home">
            <TabHome />
            <div>
                <h2>Our Taxi Drivers</h2>
                <CardDriver />
                <CardDriver />
                <CardDriver />
            </div>
            <h2>Why Ride With Uloax</h2>
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <CardInfo />
            <AppDownloadInfo />
        </div>
    )
}

export default Home;