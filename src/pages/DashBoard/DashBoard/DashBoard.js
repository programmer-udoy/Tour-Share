import * as React from 'react';
import "./DashBoard.css"
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import DashBoardHome from "../DashBoardHome/DashBoard";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import MakeAgency from "../MakeAgency/MakeAgency";
import ManageTranding from "../ManageTranding/ManageTranding";
import ManageHappening from '../ManageHappening/ManageHappening';
import AddTranding from "../AddTranding/AddTranding";
import AddHappening from "../AddHappening/AddHappening";
import JoinRequest from "../JoinRequest/JoinRequest";
import MyTeam from "../MyTeam/MyTeam";
import useAuth from "../../../hooks/useAuth";
  
import {
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
  } from "react-router-dom";


const drawerWidth = 200;

function DashBoard(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  let { path, url } = useRouteMatch();
  const {admin,user,logOut}=useAuth()

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Toolbar />
      <Divider />
{

  admin ?
   <Box  className="link-set">
<Link to="/home"><Button>home</Button></Link>
  <Link to="/home"><Button  onClick={logOut}>Logout</Button></Link>
  <Link to={`${url}`}><Button>DashBoard</Button></Link>
  <Link to={`${url}/makeadmin`}><Button>Make Admin</Button></Link>
  <Link to={`${url}/makeagency`}><Button>Make Agency</Button></Link>
  <Link to={`${url}/tranding`}><Button>Manage Tranding Section</Button></Link>
  <Link to={`${url}/happening`}><Button>Manage Happening Section</Button></Link>
  <Link to={`${url}/addhappening`}><Button>Add Happening Section</Button></Link>
  <Link to={`${url}/addtranding`}><Button>Add Tranding Section</Button></Link>
  </Box>
  :
  <Box  className="link-set">

  <Link to="/home"><Button>home</Button></Link>
  <Link to="/home"><Button  onClick={logOut}>Logout</Button></Link>
  
  <Link to={`${url}`}><Button>DashBoard</Button></Link>
  <Link to={`${url}/myteam`}><Button>my team</Button></Link>
  <Link to={`${url}/joinrequest`}><Button>join request</Button></Link>
  <Link to={`${url}/mybooking`}><Button>my booking</Button></Link>
  <Link to={`${url}/reveiw`}><Button>Reveiw</Button></Link>
  
  <Link to={`${url}/addtranding`}><Button>Add Tranding Section</Button></Link>
  </Box>

}


     
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Responsive drawer
          </Typography>
        </Toolbar>

      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        <Switch>
        <Route exact path={path}>
         <DashBoardHome></DashBoardHome>
        </Route>
        <Route path={`${path}/makeadmin`}>
           <MakeAdmin></MakeAdmin>
        </Route>
        <Route path={`${path}/makeagency`}>
           <MakeAgency></MakeAgency>
        </Route>

        <Route path={`${path}/tranding`}>
           <ManageTranding></ManageTranding>
        </Route>


        <Route path={`${path}/happening`}>
           <ManageHappening></ManageHappening>
        </Route>

        <Route path={`${path}/addhappening`}>
          <AddHappening></AddHappening>
        </Route>


        <Route path={`${path}/addtranding`}>
          <AddTranding></AddTranding>
        </Route>
{/* user routeing */}
        
<Route path={`${path}/myteam`}>
      <MyTeam></MyTeam>
        </Route>
        <Route path={`${path}/joinrequest`}>
     <JoinRequest></JoinRequest>
        </Route>
      </Switch>
      
      </Box>
    </Box>
  );
}

DashBoard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashBoard;