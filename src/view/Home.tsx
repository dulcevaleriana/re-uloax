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
        info:"act that a reader will be distracted",
        rol:"image Andrea Paredes",
        arialLabel:"primary"
    },
    {
        img: DRIVER_2,
        position: 2,
        name:"Andres Dominguez",
        info:"act that a reader will be distracted",
        rol:"image Andres Dominguez",
        arialLabel:"primary"
    },
    {
        img: DRIVER_3,
        position: 3,
        name:"Karla Perez",
        info:"act that a reader will be distracted",
        rol:"image Andres Dominguez",
        arialLabel:"primary"
    }
]

const CardInfoArray = [
    {
        img: DRIVER_4,
        title:"Uloax for Every Pocket",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:false,
        rolSubArrya:[
            {
                rol: "Image Uloax for Every Pocket",
                arialLabel: "primary image Uloax for Every Pocket"
            },
            {
                rol: "button take a trip now",
                arialLabel: "primary button take a trip now"
            }
        ]
    },
    {
        img: DRIVER_7,
        title:"Secure and Safer Rides",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:true,
        rolSubArrya:[
            {
                rol: "Image Secure and Safer Rides",
                arialLabel: "primary image Secure and Safer Rides"
            },
            {
                rol: "button take a trip now",
                arialLabel: "primary button take a trip now"
            }
        ]
    },
    {
        img: DRIVER_5,
        title:"Uloax for Every Pocket",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:false,
        rolSubArrya:[
            {
                rol: "Image Uloax for Every Pocket",
                arialLabel: "primary image Uloax for Every Pocket"
            },
            {
                rol: "button take a trip now",
                arialLabel: "primary button take a trip now"
            }
        ]
    },
    {
        img: DRIVER_6,
        title:"No 1 in the industry",
        info:"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c",
        icon:faThumbsUp,
        buttonName:"Take a Trip Now!",
        flip:true,
        rolSubArrya:[
            {
                rol: "Image No 1 in the industry",
                arialLabel: "primary image No 1 in the industry"
            },
            {
                rol: "button take a trip now",
                arialLabel: "primary button take a trip now"
            }
        ]
    }
]

const Home = () => {
    return(
        <div className="class-Home">
            <TabHome />
            <div id="ourTaxiDrivers">
                <h2>Our <strong>Taxi Drivers</strong></h2>
                {CardDriverArray.map((item,key)=>(
                    <CardDriver 
                        key={key}
                        img={item.img}
                        position={item.position}
                        name={item.name}
                        info={item.info}
                        rol={item.rol}
                        arialLabel={item.arialLabel}
                    />
                ))}
            </div>
            <div id="rideWithUs">
                <h2>Why Ride <strong>With Uloax</strong></h2>
                {CardInfoArray.map((item,key)=>(
                    <CardInfo 
                        key={key}
                        img={item.img}
                        title={item.title}
                        info={item.info}
                        icon={item.icon}
                        buttonName={item.buttonName}
                        flip={item.flip}
                        rolIMG={item.rolSubArrya[0].rol}
                        arialLabelIMG={item.rolSubArrya[0].arialLabel}
                        rolBUTTON={item.rolSubArrya[1].rol}
                        arialLabelBUTTON={item.rolSubArrya[1].arialLabel}
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