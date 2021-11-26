import React  from "react";
import AppDownloadInfo from "../component/AppDownloadInfo";
import CardDriver from "../component/CardDriver";
import CardInfo from "../component/CardInfo";
import TabHome from "../component/TabHome";
import DRIVER_1 from "../assets/img/driver_1.jpg";
import DRIVER_2 from "../assets/img/driver_2.jpg";
import DRIVER_3 from "../assets/img/driver_3.jpg";
import DRIVER_4 from "../assets/img/IMG_4.png";
import DRIVER_5 from "../assets/img/IMG_5.png";
import DRIVER_6 from "../assets/img/IMG_6.png";
import DRIVER_7 from "../assets/img/BG_TABHOME_2.png";

import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';

const CardDriverArray = [
    {
        img: DRIVER_1,
        position: 1,
        name:"Andrea Paredes",
        info:"act that a reader will be distracted"
    },
    {
        img: DRIVER_2,
        position: 2,
        name:"Andres Dominguez",
        info:"act that a reader will be distracted"
    },
    {
        img: DRIVER_3,
        position: 3,
        name:"Karla Perez",
        info:"act that a reader will be distracted"
    }
]

const CardInfoArray = [
    {
        img: DRIVER_4,
        title:"Uloax for Every Pocket",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:false
    },
    {
        img: DRIVER_7,
        title:"Secure and Safer Rides",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:true
    },
    {
        img: DRIVER_5,
        title:"Uloax for Every Pocket",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:false
    },
    {
        img: DRIVER_6,
        title:"No 1 in the industry",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:true
    }
]

const Home = () => {
    return(
        <div className="class-Home">
            <TabHome />
            <div id="ourTaxiDrivers">
                <h1>Our <strong>Taxi Drivers</strong></h1>
                {CardDriverArray.map((item,key)=>(
                    <CardDriver 
                        key={key}
                        img={item.img}
                        position={item.position}
                        name={item.name}
                        info={item.info}
                    />
                ))}
            </div>
            <div id="rideWithUs">
                <h1>Why Ride <strong>With Uloax</strong></h1>
                {CardInfoArray.map((item,key)=>(
                    <CardInfo 
                        key={key}
                        img={item.img}
                        title={item.title}
                        info={item.info}
                        icon={item.icon}
                        buttonName={item.buttonName}
                        flip={item.flip}
                    />
                ))}
            </div>
            <span id="app">
                <AppDownloadInfo />
            </span>
        </div>
    )
}

export default Home;