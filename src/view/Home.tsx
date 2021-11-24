import React  from "react";
import AppDownloadInfo from "../component/AppDownloadInfo";
import CardDriver from "../component/CardDriver";
import CardInfo from "../component/CardInfo";
import TabHome from "../component/TabHome";
import DRIVER_1 from "../assets/img/driver_1.jpg";
import DRIVER_2 from "../assets/img/driver_2.jpg";
import DRIVER_3 from "../assets/img/driver_3.jpg";

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

const Home = () => {
    return(
        <div className="class-Home">
            <TabHome />
            <div>
                <h1>Our <strong>Taxi Drivers</strong></h1>
                {CardDriverArray.map((item)=>(
                    <CardDriver 
                        img={item.img}
                        position={item.position}
                        name={item.name}
                        info={item.info}
                    />
                ))}
            </div>
            <div>
                <h1>Why Ride <strong>With Uloax</strong></h1>
                <CardInfo />
                <CardInfo />
                <CardInfo />
                <CardInfo />
            </div>
            <AppDownloadInfo />
        </div>
    )
}

export default Home;