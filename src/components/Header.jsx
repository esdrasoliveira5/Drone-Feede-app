import React, { useContext } from 'react';
import droneFeederContext from '../context/AppContext';
import HeaderStyled from '../styles/HeaderStyles';


function Header() {
  const { setPage } = useContext(droneFeederContext);

  return (
    <HeaderStyled>
      <h1>Drone Feeder Entregas</h1>
    </HeaderStyled>
  );
}

export default Header;
