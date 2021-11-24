import React  from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardInfo = (props:{
    img:string,
    title:string,
    info:string,
    icon:any,
    buttonName:string
}) => {
    return(
        <div className="class-CardInfo">
            <img src={props.img} alt="IMG" />
            <h4>{props.title}</h4>
            <p>{props.info}</p>
            <Button variant="contained"><FontAwesomeIcon icon={props.icon} /> {props.buttonName}</Button>
        </div>
    )
}

export default CardInfo;