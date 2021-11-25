import React from 'react';
import Button from '@mui/material/Button';
import BG_App from '../assets/img/BG_App.png';
import Google_Play from '../assets/img/Google_Play.png';
import IOS from '../assets/img/IOS.png';

const AppDownloadInfo = () => {
    return(
        <div className="class-AppDownloadInfo">
            <h1>
                Downloads <br/>
                <strong>Our App Today</strong>
            </h1>
            <Button variant="text">
                <img src={Google_Play} alt="IMG" />
            </Button>
            <Button variant="text">
                <img src={IOS} alt="IMG" />
            </Button>
            <img src={BG_App} alt="IMG" />
        </div>
    )
}

export default AppDownloadInfo;