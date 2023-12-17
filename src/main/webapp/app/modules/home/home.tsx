import './home.scss';

import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import CssBaseline from '@mui/material/CssBaseline';

import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';
import { Button, createTheme, ThemeProvider } from '@mui/material';
import Footer from 'app/shared/layout/footer/footer';

const signin = 'content/images/signin.jpeg';
const logo = 'content/images/logo.jpg';
const welcome = 'content/images/welcome.jpeg';

const theme = createTheme({
  palette: { primary: { main: '#ca5724' }, secondary: { main: '#04b44c' } },
});

export const Home = () => {
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);

  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  const handleLogin = () => {
    const url = getLoginUrl();
    location.href = url;
  };

  return (
    <>
      {!isAuthenticated ? (
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Grid container component="main" sx={{ height: '100vh' }}>
            <Grid
              item
              xs={false}
              sm={4}
              md={7}
              sx={{
                backgroundImage: `url(${signin})`,
                backgroundRepeat: 'no-repeat',
                backgroundColor: t => (t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900]),
                backgroundSize: 'cover',
                backgroundPosition: 'center',
              }}
            />
            <Grid item container xs={12} sm={8} md={5} justifyContent={'center'} alignItems="center" component={Paper}>
              <Box
                sx={{
                  my: 8,
                  mx: 4,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <img src={logo} alt="Logo" width="100" />
                <Typography component="h3" color={'primary'} variant="h5" sx={{ mt: 3, textAlign: 'center' }}>
                  EMT
                </Typography>
                <Box sx={{ mt: 1 }}>
                  <Button fullWidth variant="contained" sx={{ mt: 2, mb: 3 }} onClick={handleLogin}>
                    Iniciar sesión
                  </Button>
                  <Footer />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </ThemeProvider>
      ) : (
        <Box component={Paper}>
          <Paper
            sx={{
              position: 'relative',
              height: 450,
              backgroundColor: 'grey.800',
              color: '#fff',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundImage: `url(${welcome})`,
            }}
          >
            {/* Increase the priority of the hero background image */}
            {<img style={{ display: 'none' }} src={welcome} alt={'EMT'} />}
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(0,0,0,.3)',
              }}
            />
            <Grid container alignItems={'center'}>
              <Grid item md={6}>
                <Box
                  sx={{
                    position: 'relative',
                    p: { xs: 3, md: 6 },
                    pr: { md: 0 },
                  }}
                >
                  <Typography component="h1" variant="h3" color="inherit" gutterBottom>
                    Bienvenido!!
                  </Typography>
                  <Typography variant="h5" color="inherit" paragraph>
                    En este sitio podrá administrar los exámenes de laboratorio de los pacientes.
                  </Typography>
                </Box>
              </Grid>
            </Grid>
          </Paper>
        </Box>
      )}
    </>
  );
};

export default Home;
