import React, { useState } from 'react';
import { ButtonYellow, ContainerButton } from '../styles/ButtonsStyles';
import DeliveryRelatory from './DeliveryRelatory';
import DroneRelatory from './DroneRelatory';

function Relatory() {
  const [relatory, setRelatory] = useState('deliveryRelatory');

  return (
    <div>
        <h2>Relatorio</h2>
        <ContainerButton>
          <ButtonYellow>
            <button
              type="button"
              onClick={() => setRelatory('deliveryRelatory')}
            >
              Entregas
            </button>
          </ButtonYellow>
          <ButtonYellow>
            <button
              type="button"
              onClick={() => setRelatory('droneRelatory')}
            >
              Drones
            </button>
          </ButtonYellow>
        </ContainerButton>
        {
          relatory === 'deliveryRelatory' ? <DeliveryRelatory/> : <DroneRelatory/>
        }
    </div>
  );
}

export default Relatory;
