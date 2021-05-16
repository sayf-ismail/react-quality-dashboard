import React, { useState } from 'react';

//internal
import MenuItem from "./MenuItem"
import { useStyles } from '../styles';
import routes from '../routes'

// external
import clsx from 'clsx'

// assets
import Logo1 from "../assets/logo1.svg";
import Logo2 from "../assets/logo2.svg";
import DashboardIcon from '../assets/DashboardIcon.svg'
import DashboardIconActive from '../assets/DashboardIconActive.svg'
import AccountsIcon from '../assets/AccountsIcon.svg'
import AccountsIconActive from '../assets/AccountsIconActive.svg'

// @material-ui
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import MenuIcon from "@material-ui/icons/Menu";

const Navigation = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(true);

  const toggleNavigation = () => {
    setOpen(!open);
  };

  return (
    <div >
      <Drawer 
        classes={{
          paper: clsx(
            classes.navigationDrawer, !open && classes.navigationDrawerCollapse
          ),
        }} 
        variant="permanent" 
        open={open}
      >
      <div className={clsx(classes.navigationToolbar, !open && classes.navigationToolbarCollapse)}>
        <IconButton onClick={toggleNavigation}>
          {open ? <ChevronLeftIcon /> : <MenuIcon />}
        </IconButton>
      </div>
      <div className={classes.navigationLogoContainer}>
        <img className={classes.navigationLogo} src={open ? Logo1 : Logo2} alt="Quality Logo" />
      </div>
      <List className={classes.navigationList}>
        {routes.map((route, index) => {
          return (
            <React.Fragment>
            {route.path === "/sign-out" && <div className = {classes.navigationSpacer}></div>}
            <MenuItem label={route.label} icon={route.icon} activeIcon={route.activeIcon} path={route.path}/>
            </React.Fragment>
          )
        })}
      </List>
      </Drawer>
    </div>
  )
}

export default Navigation
