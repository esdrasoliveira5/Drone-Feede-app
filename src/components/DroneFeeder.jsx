import React, { useState } from 'react';
import { ButtonYellow, ContainerButton } from '../styles/ButtonsStyles';
import DeliveryForm from './DeliveryForm';
import DroneForm from './DroneForm';

function DroneFeeder() {
  const [form, setForm] = useState('deliveryForm');
  return (
    <div>
        <h2>Drone Feeder</h2>
        <ContainerButton>
          <ButtonYellow>
            <button
              type="button"
              onClick={() => setForm('droneForm')}
            >
              Criar Drone
            </button>
          </ButtonYellow>
        <ButtonYellow>
          <button
            type="button"
            onClick={() => setForm('deliveryForm')}
          >
              Criar Entrega
          </button>
        </ButtonYellow>
        </ContainerButton>

        {
          form === 'deliveryForm' ? <DeliveryForm/> : <DroneForm/>
        }
    </div>
  );
}

export default DroneFeeder;
