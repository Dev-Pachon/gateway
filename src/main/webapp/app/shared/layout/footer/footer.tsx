import './footer.scss';

import React from 'react';
import { Translate } from 'react-jhipster';
import { Col, Row } from 'reactstrap';
import { Link, Typography } from '@mui/material';

const Footer = props => (
  <div className="footer page-content">
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.instagram.com/barcohospital" target={'_blank'}>
        EMT - Fundación Italocolombiana del Monte Tabor
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  </div>
);

export default Footer;
