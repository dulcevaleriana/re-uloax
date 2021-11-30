import React  from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardInfo = (props:{
    img:string,
    title:string,
    info:string,
    icon:any,
    buttonName:string,
    flip:boolean
}) => {
    return(
        <div className={props.flip === true ? "class-CardInfo class-flip" : "class-CardInfo"}>
            <img src={props.img} alt="IMG" />
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <Button variant="contained"><FontAwesomeIcon icon={props.icon} /> {props.buttonName}</Button>
        </div>
    )
}

export default CardInfo;