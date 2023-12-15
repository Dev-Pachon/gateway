import './home.scss';

import React, { useEffect } from 'react';
import { Translate } from 'react-jhipster';
import { Alert, Col, Row } from 'reactstrap';

import { getLoginUrl, REDIRECT_URL } from 'app/shared/util/url-utils';
import { useAppSelector } from 'app/config/store';

export const Home = () => {
  const account = useAppSelector(state => state.authentication.account);
  const isAuthenticated = useAppSelector(state => state.authentication.isAuthenticated);
  useEffect(() => {
    const redirectURL = localStorage.getItem(REDIRECT_URL);
    if (redirectURL) {
      localStorage.removeItem(REDIRECT_URL);
      location.href = `${location.origin}${redirectURL}`;
    }
  });

  return (
    <Row>
      <Col md="3" className="pad">
        {/*<img alt={'Una imagen del emt'} src={'/content/images/logo.jpg'} />*/}
      </Col>
      <Col md="9">
        <h1>
          <Translate contentKey="home.title">Home Page!</Translate>
        </h1>
        <div>
          {isAuthenticated ? (
            <Alert color="success">
              <Translate contentKey="home.logged.message" interpolate={{ username: account.login }}>
                You are logged in as user {account.login}.
              </Translate>
            </Alert>
          ) : (
            <a href={getLoginUrl()} className="btn btn-primary">
              <Translate contentKey="global.messages.info.authenticated.link">Sign in</Translate>
            </a>
          )}
        </div>
      </Col>
    </Row>
  );
};

export default Home;
