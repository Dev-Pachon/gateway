import React from 'react';
import { Link, Typography } from '@mui/material';

const Footer = props => (
  <div className="footer page-content">
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.instagram.com/barcohospital" target={'_blank'}>
        Emergency Medical Team
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
);

export default Footer;
