import React  from "react";
import Button from '@mui/material/Button';

const CardInfo = () => {
    return(
        <div className="class-CardInfo">
            {/* <img src={} alt="IMG" /> */}
            <h4>Uloax for Every Pocket</h4>
            <p>
                It is a long established fact that a reader will be distracted 
                by the readable content of a page when looking at its layout. 
                The point of using Lorem Ipsum is that it has a more-or-less normal 
                distribution of letters, as It is a long established fact that a reader 
                will be distracted by the readable c
            </p>
            <Button variant="contained">Contained</Button>
        </div>
    )
}

export default CardInfo;