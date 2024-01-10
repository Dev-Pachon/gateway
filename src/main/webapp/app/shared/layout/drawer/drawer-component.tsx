import * as React from 'react';
import { CSSObject, styled, Theme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import { Grid, useMediaQuery } from '@mui/material';
import Menu from 'app/shared/layout/menus/menu';

const logoBHSR = 'content/images/logo_emt.webp';

const drawerWidth = 320;
const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: prop => prop !== 'open' })(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));
const DrawerComponent = ({ open, toggleDrawer }) => {
  let mobile: boolean;
  useMediaQuery('(min-width:1200px)') ? (mobile = false) : (mobile = true);

  return (
    <>
      {!mobile ? (
        <Drawer variant="permanent" open={open}>
          <DrawerHeader>
            <Grid container justifyContent="center">
              <img src={logoBHSR} alt="Logo BHSR" width="50" />
            </Grid>
            <IconButton onClick={toggleDrawer}>{<ChevronLeftIcon />}</IconButton>
          </DrawerHeader>
          <Divider />
          <List component="nav">
            <Menu mobile={mobile} toggleDrawer={toggleDrawer} />
          </List>
        </Drawer>
      ) : (
        <MuiDrawer
          variant="temporary"
          open={open}
          onClose={toggleDrawer}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'block', lg: 'none' },
            '& .MuiDrawer-paper': {
              boxSizing: 'border-box',
              width: drawerWidth,
            },
          }}
        >
          <Toolbar
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            {open && (
              <Grid container justifyContent="center">
                <img src={logoBHSR} alt="Logo BHSR" width="50" />
              </Grid>
            )}
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <Menu mobile={mobile} toggleDrawer={toggleDrawer} />
          </List>
        </MuiDrawer>
      )}
    </>
  );
};

export default DrawerComponent;
