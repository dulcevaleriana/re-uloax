import React from 'react';

const CardDriver = (props: {
    img:string,
    position:number,
    name:string,
    info:string
}) => {

    return(
        <div className="class-CardDriver">
            <span>{props.position}</span>
            <div>
                <img src={props.img} alt="IMG" />
            </div>
            <h4>
                Drive{props.position}:
                <br/>
                {props.name}
            </h4>
            <p>
                {props.info}
            </p>
        </div>
    )
}

export default CardDriver;