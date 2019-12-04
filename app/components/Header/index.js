import React from 'react';

import Img from './Img';
import Banner from '../../images/logo.svg';

function Header() {
  return (
    <div>
      <Img src={Banner} alt="react-boilerplate - Logo" />
    </div>
  );
}

export default Header;
