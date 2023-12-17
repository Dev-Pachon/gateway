import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Paper } from '@mui/material';

import AppBarComponent from 'app/shared/layout/header/app-bar';
import DrawerComponent from 'app/shared/layout/drawer/drawer-component';
import Footer from 'app/shared/layout/footer/footer';

const mdTheme = createTheme({
  palette: { primary: { main: '#CA5724' }, secondary: { main: '#04b44c' } },
});

const MainLayout = ({ isAuthenticated, currentLocale, children }) => {
  const [open, setOpen] = React.useState(false);

  const toggleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      {isAuthenticated ? (
        <ThemeProvider theme={mdTheme}>
          <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBarComponent open={open} toggleDrawer={toggleDrawer} isAuthenticated={isAuthenticated} />
            {isAuthenticated && <DrawerComponent open={open} toggleDrawer={toggleDrawer} />}
            <Box
              component="main"
              sx={{
                backgroundColor: theme => (theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[900]),
                flexGrow: 1,
                height: 'calc(100vh - 64px)',
                marginTop: '64px',
                overflow: 'auto',
              }}
            >
              <Container sx={{ p: 2 }}>
                <Box component={Paper} sx={{ p: 2, align: 'center' }}>
                  {children}
                </Box>
                <Footer sx={{ marginTop: 2 }} />
              </Container>
            </Box>
          </Box>
        </ThemeProvider>
      ) : (
        children
      )}
    </>
  );
};

export default MainLayout;
