import React from 'react'
import PropTypes from 'prop-types';
import { AppBar, Tabs, Tab, Typography, Box} from '@material-ui/core';
import BookList from '../Books';
import BookForm from '../Books/create';
import { makeStyles,Theme } from '@material-ui/core/styles';


interface TabPanelProps {
    children?: React.ReactNode;
    index: any;
    value: any;
  }

function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  function a11yProps(index: any) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme: Theme) => ({
    root: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.paper,
    },
  }));


export default function Index() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
      setValue(newValue);
    };
  
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
            <Tab label="Book list" {...a11yProps(0)} />
            <Tab label="Add book" {...a11yProps(1)} />
        
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
          <BookList/>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <BookForm/>
        </TabPanel>
        
      </div>
    );
}
