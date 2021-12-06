import React from 'react';

const CardDriver = (props: {
    img:string,
    position:number,
    name:string,
    info:string,
    rol:string,
    arialLabel:string
}) => {

    return(
        <div className="class-CardDriver" role={props.rol} aria-labelledby={props.arialLabel}>
            <span>{props.position}</span>
            <div>
                <img src={props.img} alt="IMG" role={props.rol} aria-label={props.arialLabel}/>
            </div>
            <h3>
                Drive{props.position}:
                <br/>
                {props.name}
            </h3>
            <p>
                {props.info}
            </p>
        </div>
    )
}

export default CardDriver;