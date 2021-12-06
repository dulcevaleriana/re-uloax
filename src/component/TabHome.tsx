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
    const [whereAreYou, setWhereAreYou] = useState("");
    const [whereDoYouWantToGo, setWhereDoYouWantToGo] = useState("");
    const [validForm, setValidForm] = useState(false);

    
    const rolArray = [
      {
          rol: "tab make client engagement",
          arialLabel: "primary"
      },
      {
          rol: "tab drive with us",
          arialLabel: "secondary"
      },
      {
          rol: "tab take a trip",
          arialLabel: "secondary"
      },
      {
          rol: "tab call classics service",
          arialLabel: "secondary"
      },
      {
          rol: "button become a uloaxdriver",
          arialLabel: "primary button become a uloaxdriver"
      },
      {
          rol: "form make a trip with uloax",
          arialLabel: "primary"
      },
      {
          rol: "input Where are you",
          arialLabel: "secondary"
      },
      {
          rol: "input Where do you want to go",
          arialLabel: "secondary"
      },
      {
          rol: "button Take a Trip Now",
          arialLabel: "secondary"
      },
      {
          rol: "button Call Classics Service",
          arialLabel: "primary"
      }
    ]

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    const validFormChange = () =>{
      alert("Get it!, you'are in " + whereAreYou + " and, you wanna go to " + whereDoYouWantToGo + " in 5 minutes one of us Taxi Driver will coming for you, wait for us :)");
      setValidForm(false);
      setWhereDoYouWantToGo(" ");
      setWhereAreYou(" ");
    }
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} role={rolArray[0].rol} aria-labelledby={rolArray[0].arialLabel}>
            <Tab label="Drive with us" {...a11yProps(0)} role={rolArray[1].rol} aria-label={rolArray[1].arialLabel}/>
            <Tab label="Take a Trip" {...a11yProps(1)} role={rolArray[2].rol} aria-label={rolArray[2].arialLabel}/>
            <Tab label="Call Classics Service" {...a11yProps(2)} role={rolArray[3].rol} aria-label={rolArray[3].arialLabel}/>
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
          <Button variant="contained" className="class-button-black" role={rolArray[4].rol} aria-label={rolArray[4].arialLabel}>
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
            role={rolArray[5].rol} 
            aria-labelledby={rolArray[5].arialLabel}
          >
            <span className="class-line"/>
            <span>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FontAwesomeIcon icon={faLocationDot} className=""/> 
                <TextField 
                  error={(validForm && whereAreYou === "") ? true : false}
                  onChange={(a)=>setWhereAreYou(a.target.value)} 
                  value={whereAreYou !== "" ? whereAreYou : ""}
                  label="Where are you?" 
                  variant="standard" 
                  id="Where-are-you"
                  role={rolArray[6].rol} 
                  aria-label={rolArray[6].arialLabel}
                  helperText={(validForm && whereAreYou === "") ? "You have to tell us where you are" : false}
                />
              </Box>
            </span>
            <span>
              <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
                <FontAwesomeIcon icon={faLocationDot} className=""/> 
                <TextField 
                  error={(validForm && whereDoYouWantToGo === "") ? true : false}
                  onChange={(b)=>setWhereDoYouWantToGo(b.target.value)}
                  value={whereDoYouWantToGo !== "" ? whereDoYouWantToGo : ""}
                  label="Where do you want to go?" 
                  variant="standard" 
                  id="Where-do-you-want-to-go"
                  role={rolArray[7].rol} 
                  aria-label={rolArray[7].arialLabel}
                  helperText={(validForm && whereDoYouWantToGo === "") ? "You have to tell us where you want to go" : false}
                />
              </Box>
            </span>
            <Button 
              onClick={
                (validForm && whereDoYouWantToGo !== "" && whereAreYou !== "") ? 
                (validFormChange) 
                : 
                (()=>setValidForm(true))
              } 
              variant="contained" 
              className="class-button-black"
              role={rolArray[8].rol} 
              aria-label={rolArray[8].arialLabel}
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
          <Button variant="contained" className="class-button-black" role={rolArray[9].rol} aria-label={rolArray[9].arialLabel}>
              <FontAwesomeIcon icon={faPhone} /> Call Classics Service
          </Button>
          <img src={BG_TABHOME_3} alt="IMG" />
        </TabPanel>
      </Box>
    );
}

export default TabHome;