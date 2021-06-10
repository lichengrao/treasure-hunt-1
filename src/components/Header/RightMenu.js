import { Button, Menu, message } from 'antd';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

import { useLogout } from 'hooks';
import { checkValidToken } from 'utils';

const { Item } = Menu;

const navBarSignUpButtonStyle = {
  background: '#00a9cd',
  borderColor: '#00a9cd',
};

const RightMenu = () => {
  const location = useLocation();
  const [signedIn, setSignedIn] = useState(false);
  const { isLoggingOut, logout } = useLogout();

  useEffect(() => {
    const userId = checkValidToken();
    if (userId) {
      setSignedIn(true);
    } else {
      setSignedIn(false);
    }
  }, [signedIn]);

  const handleSignout = () => {
    logout();
    setSignedIn(false);
    message.success('Successfully signed out');
  };

  return (
    <Menu
      mode="horizontal"
      className="Right-menu"
      style={{ display: 'flex', flexDirection: 'row-reverse' }}
    >
      {signedIn ? (
        <Item key="/signout">
          <NavLink to="/">
            <Button
              disabled={isLoggingOut}
              type="primary"
              style={navBarSignUpButtonStyle}
              onClick={handleSignout}
            >
              Sign Out
            </Button>
          </NavLink>
        </Item>
      ) : (
        <>
          <Item key="/signup">
            <NavLink
              to={{ pathname: '/signup', from: `${location.pathname}` }}
              activeClassName="signUp-active-class"
              className="signUp-class"
            >
              <Button type="primary" style={navBarSignUpButtonStyle}>
                Sign Up
              </Button>
            </NavLink>
          </Item>

          <Item key="/login">
            <NavLink
              to={{ pathname: '/login', from: `${location.pathname}` }}
              activeClassName="signIn-active-class"
              className="signIn-class"
            >
              <Button>Login</Button>
            </NavLink>
          </Item>
        </>
      )}

      <Item key="/my-listings">
        <NavLink
          to="/my-listings"
          activeClassName="my-listings-active-class"
          className="my-listings-class"
        >
          My Listings
        </NavLink>
      </Item>

      <Item key="/saved-listings">
        <NavLink
          to="/saved-listings"
          activeClassName="saved-listings-active-class"
          className="saved-listings-class"
        >
          Saved Items
        </NavLink>
      </Item>
    </Menu>
  );
};
export default RightMenu;
