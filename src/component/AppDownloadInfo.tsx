import React from 'react';
import Button from '@mui/material/Button';
import BG_App from '../assets/img/BG_App.png';
import Google_Play from '../assets/img/Google_Play.png';
import IOS from '../assets/img/IOS.png';

const AppDownloadInfo = () => {
    const rolArray = [
        {
            rol: "Image Download Uloax App",
            arialLabel: "Secondary Image Download Uloax App"
        },
        {
            rol: "Button / Image Download Uloax App on Google Play",
            arialLabel: "Primary Button / Image Download Uloax App on Google Play"
        },
        {
            rol: "Button / Image Download Uloax App on Apple App Store",
            arialLabel: "Primary Button / Image Download Uloax App on Apple App Store"
        }
    ]

    return(
        <div className="class-AppDownloadInfo">
            <h2>
                Downloads <br/>
                <strong>Our App Today</strong>
            </h2>
            <Button variant="text" role={rolArray[1].rol} aria-label={rolArray[1].arialLabel}>
                <img src={Google_Play} alt="IMG" role={rolArray[1].rol} aria-label={rolArray[1].arialLabel}/>
            </Button>
            <Button variant="text" role={rolArray[2].rol} aria-label={rolArray[2].arialLabel}>
                <img src={IOS} alt="IMG" role={rolArray[2].rol} aria-label={rolArray[2].arialLabel}/>
            </Button>
            <img src={BG_App} alt="IMG" role={rolArray[0].rol} aria-label={rolArray[0].arialLabel}/>
        </div>
    )
}

export default AppDownloadInfo;