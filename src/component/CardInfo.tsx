import React  from "react";
import Button from '@mui/material/Button';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CardInfo = (props:{
    img:string,
    title:string,
    info:string,
    icon:any,
    buttonName:string,
    flip:boolean,
    rolIMG:string,
    arialLabelIMG:string,
    rolBUTTON:string,
    arialLabelBUTTON:string
}) => {
    return(
        <div className={props.flip === true ? "class-CardInfo class-flip" : "class-CardInfo"} role={props.rolBUTTON} aria-labelledby={props.arialLabelBUTTON}>
            <img src={props.img} alt={"image about " + props.title} role={props.rolIMG} aria-label={props.arialLabelIMG}/>
            <h3>{props.title}</h3>
            <p>{props.info}</p>
            <Button variant="contained" role={props.rolBUTTON} aria-label={props.buttonName}>
                <FontAwesomeIcon icon={props.icon} /> {props.buttonName}
            </Button>
        </div>
    )
}

export default CardInfo;