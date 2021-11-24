import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BG_TABHOME_1 from '../assets/img/BG_TABHOME_1.png';
import BG_TABHOME_2 from '../assets/img/BG_TABHOME_2.png';
import BG_TABHOME_3 from '../assets/img/BG_TABHOME_3.png';
import { Button } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';

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
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="Item One" {...a11yProps(0)} />
            <Tab label="Item Two" {...a11yProps(1)} />
            <Tab label="Item Three" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <h2>
            Drive with us <br/>
            Be your own boss
          </h2>
          <p>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as It is a long established fact that a reader will be distracted by the readable c
          </p>
          <Button variant="contained">
              <FontAwesomeIcon icon={faUserPlus} /> Become a UloaxDriver
          </Button>
          <img src={BG_TABHOME_1} alt="IMG" />
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
          <img src={BG_TABHOME_2} alt="IMG" />
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
          <img src={BG_TABHOME_3} alt="IMG" />
        </TabPanel>
      </Box>
    );
}

export default TabHome;