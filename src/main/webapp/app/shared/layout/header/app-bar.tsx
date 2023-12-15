import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Logout } from '@mui/icons-material';
import MuiAppBar from '@mui/material/AppBar';
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { useMediaQuery } from '@mui/material';
import { Link } from 'react-router-dom';

const drawerWidth = 280;

const AppBar = styled(
  ({ open, children, ...props }: { open: boolean; children: any }) => (
    <MuiAppBar {...props} position={'fixed'}>
      {children}
    </MuiAppBar>
  ),
  {
    shouldForwardProp: prop => prop !== 'open',
  }
)(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));
const AppBarComponent = ({ toggleDrawer, open, isAuthenticated }) => {
  let mobile: boolean;
  useMediaQuery('(min-width:1200px)') ? (mobile = false) : (mobile = true);

  const handleLogout = () => {};

  return (
    <AppBar open={open}>
      <Toolbar
        sx={{
          pr: 1,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        {isAuthenticated && (
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{
              ...(open && { display: 'none' }),
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        <Typography component="h1" variant="h6" align="center" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          {mobile && open ? '' : 'Emergency Medical Team'}
        </Typography>
        {isAuthenticated && (
          <IconButton component={Link} color="inherit" to={'/logout'}>
            <Logout />
          </IconButton>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default AppBarComponent;
