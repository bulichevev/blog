import React from 'react';

const Header = ({ onLogout, isLoggedIn }) => (
  <header>
    <h1>Blog</h1>
    {isLoggedIn && <button className={'white'} onClick={onLogout}>Выйти</button>}
  </header>
);

export default Header;