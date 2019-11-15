import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

const drawerWidth = 240;


const data=

  [{"title":"Stroman Inc","year":"26.04.2011","image":"https://robohash.org/blanditiisnonquaerat.png?size=50x50&set=set1"},
  {"title":"Kuvalis-Gaylord","year":"01.12.2017","image":"https://robohash.org/velmolestiaedolore.jpg?size=50x50&set=set1"},
  {"title":"Bashirian-Ledner","year":"20.11.2018","image":"https://robohash.org/facilisomnisquia.jpg?size=50x50&set=set1"},
  {"title":"Cole Group","year":"13.04.2006","image":"https://robohash.org/illoetautem.jpg?size=50x50&set=set1"},
  {"title":"Davis LLC","year":"13.10.2011","image":"https://robohash.org/nemoipsumillo.png?size=50x50&set=set1"},
  {"title":"Bode-Mueller","year":"09.12.2003","image":"https://robohash.org/aliquidenimconsequuntur.png?size=50x50&set=set1"},
  {"title":"Schaefer-Mraz","year":"11.06.2007","image":"https://robohash.org/omnisautemculpa.png?size=50x50&set=set1"},
  {"title":"Lynch, Blanda and Steuber","year":"12.12.2005","image":"https://robohash.org/liberoetest.bmp?size=50x50&set=set1"},
  {"title":"Walter, Brekke and Senger","year":"26.02.2013","image":"https://robohash.org/undeconsequaturexpedita.png?size=50x50&set=set1"},
  {"title":"Little LLC","year":"26.06.2015","image":"https://robohash.org/etvoluptatumnihil.jpg?size=50x50&set=set1"},
  {"title":"Kautzer LLC","year":"17.11.2008","image":"https://robohash.org/consecteturexaut.png?size=50x50&set=set1"},
  {"title":"Dibbert Inc","year":"25.02.2009","image":"https://robohash.org/quasexcepturiet.png?size=50x50&set=set1"},
  {"title":"Osinski-Swaniawski","year":"22.12.2001","image":"https://robohash.org/etfacilisid.png?size=50x50&set=set1"},
  {"title":"Purdy-Krajcik","year":"19.10.2018","image":"https://robohash.org/quamprovidentquas.bmp?size=50x50&set=set1"},
  {"title":"Abbott, Ward and Cummings","year":"14.01.2017","image":"https://robohash.org/harumnisiad.bmp?size=50x50&set=set1"},
  {"title":"Langosh Inc","year":"27.02.2004","image":"https://robohash.org/laboriosamvoluptatequam.png?size=50x50&set=set1"},
  {"title":"Sauer, Padberg and Tillman","year":"26.01.2010","image":"https://robohash.org/officiadolorumrecusandae.bmp?size=50x50&set=set1"},
  {"title":"Labadie, Hills and Hartmann","year":"03.09.2011","image":"https://robohash.org/utillodolorem.bmp?size=50x50&set=set1"},
  {"title":"Tremblay-Olson","year":"09.02.2004","image":"https://robohash.org/consequaturvoluptateet.bmp?size=50x50&set=set1"},
  {"title":"Swift, Haley and Franecki","year":"13.03.2011","image":"https://robohash.org/repudiandaedoloresinventore.png?size=50x50&set=set1"},
  {"title":"Turcotte, Tromp and Cremin","year":"09.12.2007","image":"https://robohash.org/perferendisquasaut.bmp?size=50x50&set=set1"},
  {"title":"Langworth and Sons","year":"27.07.2016","image":"https://robohash.org/eligendiodioa.bmp?size=50x50&set=set1"},
  {"title":"Block, Christiansen and Runolfsson","year":"30.07.2003","image":"https://robohash.org/quiveniamexpedita.jpg?size=50x50&set=set1"},
  {"title":"Pfannerstill, Upton and Bashirian","year":"04.06.2015","image":"https://robohash.org/architectoiureoccaecati.jpg?size=50x50&set=set1"},
  {"title":"Leffler LLC","year":"23.07.2014","image":"https://robohash.org/totamaliasfacere.jpg?size=50x50&set=set1"},
  {"title":"Shanahan and Sons","year":"12.05.2006","image":"https://robohash.org/enimnihileaque.bmp?size=50x50&set=set1"},
  {"title":"Wolf-Rosenbaum","year":"16.09.2016","image":"https://robohash.org/inventoredelenitinulla.bmp?size=50x50&set=set1"},
  {"title":"Quitzon, Kovacek and Quigley","year":"29.01.2019","image":"https://robohash.org/nemoerrorsunt.bmp?size=50x50&set=set1"},
  {"title":"Simonis LLC","year":"01.11.2017","image":"https://robohash.org/temporibusconsecteturnon.png?size=50x50&set=set1"},
  {"title":"Cartwright and Sons","year":"10.08.2016","image":"https://robohash.org/eaquenatusofficia.jpg?size=50x50&set=set1"},
  {"title":"Daugherty, Altenwerth and Weimann","year":"27.02.2011","image":"https://robohash.org/minusutquibusdam.png?size=50x50&set=set1"},
  {"title":"McDermott, Leannon and Ritchie","year":"20.08.2006","image":"https://robohash.org/doloremhicrem.jpg?size=50x50&set=set1"},
  {"title":"Donnelly-Zieme","year":"16.02.2003","image":"https://robohash.org/temporaquodnostrum.bmp?size=50x50&set=set1"},
  {"title":"Jacobs and Sons","year":"10.01.2014","image":"https://robohash.org/facilispariatursed.png?size=50x50&set=set1"},
  {"title":"Schaefer-Leuschke","year":"22.12.2015","image":"https://robohash.org/temporibusaliquidaut.bmp?size=50x50&set=set1"},
  {"title":"Dibbert Group","year":"01.05.2015","image":"https://robohash.org/commodirepellatillo.png?size=50x50&set=set1"},
  {"title":"Hartmann LLC","year":"21.03.2006","image":"https://robohash.org/teneturliberovoluptas.bmp?size=50x50&set=set1"},
  {"title":"Kovacek Group","year":"23.11.2006","image":"https://robohash.org/etetvoluptatum.png?size=50x50&set=set1"},
  {"title":"Gleason, Heidenreich and Cassin","year":"09.09.2009","image":"https://robohash.org/hicnullarepellendus.bmp?size=50x50&set=set1"},
  {"title":"Becker-Dietrich","year":"15.10.2015","image":"https://robohash.org/idquaelabore.jpg?size=50x50&set=set1"},
  {"title":"Romaguera-Hintz","year":"05.03.2013","image":"https://robohash.org/quiadolorearum.jpg?size=50x50&set=set1"},
  {"title":"Volkman and Sons","year":"14.05.2005","image":"https://robohash.org/sequimagnamsit.png?size=50x50&set=set1"},
  {"title":"O'Reilly Inc","year":"20.08.2003","image":"https://robohash.org/aquienim.bmp?size=50x50&set=set1"},
  {"title":"Graham Inc","year":"24.03.2002","image":"https://robohash.org/quiquishic.png?size=50x50&set=set1"},
  {"title":"Gusikowski and Sons","year":"07.11.2017","image":"https://robohash.org/autvoluptatemin.png?size=50x50&set=set1"},
  {"title":"Kirlin-Bradtke","year":"06.11.2015","image":"https://robohash.org/doloremquedoloremsit.png?size=50x50&set=set1"},
  {"title":"Reinger, Stark and West","year":"04.09.2011","image":"https://robohash.org/etquiaeligendi.bmp?size=50x50&set=set1"},
  {"title":"Towne Group","year":"15.12.2013","image":"https://robohash.org/natusetaut.jpg?size=50x50&set=set1"},
  {"title":"Swift, Kohler and Hermann","year":"04.02.2009","image":"https://robohash.org/voluptatemsaepecommodi.bmp?size=50x50&set=set1"},
  {"title":"Rowe-Rau","year":"17.03.2002","image":"https://robohash.org/quoadipiscipariatur.bmp?size=50x50&set=set1"}]




const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));

export default function LeftMenu() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Movie Browser
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Treeview', 'ListView'].map((text, index) => (
            
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ?<Link to="/tree">Movies by Year</Link> : <Link to="/list">Movie by List</Link>}</ListItemIcon>
            </ListItem>
          ))}
        </List>
       
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       
      </main>
    </div>
  );
}
