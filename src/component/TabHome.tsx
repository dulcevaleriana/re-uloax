import React, {useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BG_TABHOME_1 from '../assets/img/BG_TABHOME_1.png';
import BG_TABHOME_2 from '../assets/img/BG_TABHOME_2.png';
import BG_TABHOME_3 from '../assets/img/BG_TABHOME_3.png';
import { Button } from '@mui/material';
import TextField from '@mui/material/TextField';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTaxi } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
  }
  
  function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        className="class-TabHome"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

const TabHome = () => {
    const [value, setValue] = useState(0);
    const [whereAreYou, setWhereAreYou] = useState(" ");
    const [whereDoYouWantToGo, setWhereDoYouWantToGo] = useState(" ");
    const [validForm, setValidForm] = useState(false);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Drive with us" {...a11yProps(0)} />
            <Tab label="Take a Trip" {...a11yProps(1)} />
            <Tab label="Call Classics Service" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h1>
            Drive with us <br/>
            Be your own boss
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c
          </p>
          <Button variant="contained" className="class-button-black">
              <FontAwesomeIcon icon={faTaxi} /> Become a UloaxDriver
          </Button>
          <img src={BG_TABHOME_1} alt="IMG" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <h1>
            Take a Trip <br />
            You will save with us
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by the 
          </p>
          <Box
            component="form"
            sx={{
              '& > :not(style)': { m: 1 },
            }}
            noValidate
            autoComplete="off"
          >
            <span className="class-line"/>
            <span>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FontAwesomeIcon icon={faLocationDot} className=""/> 
                <TextField 
                  error={(validForm && whereAreYou === " ") ? true : false}
                  onChange={(a)=>setWhereAreYou(a.target.value)} 
                  // CHECK HERE
                  value={whereAreYou === " " ? null : whereAreYou}
                  label="Where are you?" 
                  variant="standard" 
                  id="Where-are-you"
                  helperText={(validForm && whereAreYou === " ") ? "You have to tell us where you are" : false}
                />
              </Box>
            </span>
            <span>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FontAwesomeIcon icon={faLocationDot} className=""/> 
                <TextField 
                  error={(validForm && whereDoYouWantToGo === " ") ? true : false}
                  onChange={(b)=>setWhereDoYouWantToGo(b.target.value)}
                  // CHECK HERE
                  value={whereDoYouWantToGo === " " ? null : whereDoYouWantToGo}
                  label="Where do you want to go?" 
                  variant="standard" 
                  id="Where-do-you-want-to-go"
                  helperText={(validForm && whereDoYouWantToGo === " ") ? "You have to tell us where you want to go" : false}
                />
              </Box>
            </span>
            <Button 
              onClick={
                // CHECK HERE
                (validForm && whereDoYouWantToGo !== " " && whereAreYou !== " " && whereDoYouWantToGo !== null && whereAreYou !== null) ? 
                (()=>{alert("Get it!, you'are in " + whereAreYou + " and, you wanna go to " + whereDoYouWantToGo + " in 5 minutes one of us Taxi Driver will comming for you, wait for us :)");setValidForm(false);setWhereDoYouWantToGo(" ");setWhereAreYou(" ")}) 
                : 
                (()=>setValidForm(true))
              } 
              variant="contained" 
              className="class-button-black"
            >
              <FontAwesomeIcon icon={faThumbsUp} className="class-icono-rotate-and-flip"/> Take a Trip Now!
            </Button>
          </Box>
          <img src={BG_TABHOME_2} alt="IMG" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <h1>
            If you prefer... <br/>
            Call Classics Service
          </h1>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of
          </p>
          <strong>
            (+71) 1234567890
          </strong>
          <Button variant="contained" className="class-button-black">
              <FontAwesomeIcon icon={faPhone} /> Call Classics Service
          </Button>
          <img src={BG_TABHOME_3} alt="IMG" />
        </TabPanel>
      </Box>
    );
}

export default TabHome;