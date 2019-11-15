import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import Paper from '@material-ui/core/Paper';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import Header from './Header';
import Footer from './Footer';
import LeftMenu from './LeftMenu';
import MovieTreeView from './TreeView';
import GridView from './GridView';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
  control: {
    padding: theme.spacing(2),
  },
}));

export default function App() {
  const [spacing, setSpacing] = React.useState(2);
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = event => {
    setSpacing(Number(event.target.value));
  };

  return (
    <Router>
    
    <Grid container className={classes.root} spacing={2}>
     <LeftMenu></LeftMenu>
    </Grid>

      <Switch>
        <Route path="/list">
        <GridView/>
        </Route>
        <Route path="/tree">
         <MovieTreeView/>
        </Route>
        <Route path="/">
        <GridView/>
        </Route>
      </Switch>
    
  </Router>
  
    
  );
}




