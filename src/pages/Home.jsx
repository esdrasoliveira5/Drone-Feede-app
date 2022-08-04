import React, { useContext, useState } from 'react';
import DroneFeeder from '../components/DroneFeeder';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Relatory from '../components/Relatory';
import droneFeederContext from '../context/AppContext';
import BodyStyled from '../styles/BodyStyles';
import { ButtonGreen, ButtonRed, ContainerButton } from '../styles/ButtonsStyles';

function Home() {
  const { page, setPage } = useContext(droneFeederContext);

  return (
    <BodyStyled>
      <Header />
      <ContainerButton>
        <ButtonGreen>
          <button
            type="button"
            onClick={ () => setPage('droneFeeder')}
          >
            Drone Feeder
          </button>
        </ButtonGreen>
        <ButtonRed>
          <button
            type="button"
            onClick={ () => setPage('relatory')}
          >
            Relatorios
          </button>
        </ButtonRed>
      </ContainerButton>
      {
        page === 'droneFeeder' ? <DroneFeeder/> : <Relatory/>
      }
      <Footer />
    </BodyStyled>
  );
}
export default Home;
