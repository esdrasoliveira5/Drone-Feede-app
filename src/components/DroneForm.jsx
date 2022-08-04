import React, { useState } from 'react';
import requests from '../services/requests';
import { ButtonGreen } from '../styles/ButtonsStyles';
import FormStyled from '../styles/FormStyles';

function DroneForm() {
    const [data, setdata] = useState({
        marca: '',
        modelo: ''
    });

    const handleFormData = ({ target }) => {
        const { name, value } = target;
        setdata({
          ...data,
          [name]: value,
        });
      };

    const submitForm = async () => {
        if (data.marca.length > 0 || data.modelo.length > 0) {
            const response = await requests.createDrone(data);
            if(response.id) {
                window.alert('Drone Criado!!')
            } else {
                window.alert('Drone Ja existe!!')
            }
        } else {
            window.alert("Campos não podem ser vazios!!")
        }
    };

  return (
    <FormStyled>
        <label htmlFor="marca">
            <input
                type="text"
                value={data.marca}
                name="marca"
                placeholder="Marca"
                onChange={(event) => handleFormData(event)}
            />
        </label>
        <label htmlFor="modelo">
            <input
                type="text"
                value={data.modelo}
                name="modelo"
                placeholder="Modelo"
                onChange={(event) => handleFormData(event)}
            />
        </label>
        <ButtonGreen>
            <button
                type="button"
                onClick={submitForm}
            >
                Registrar
            </button>
        </ButtonGreen>
    </FormStyled>
  );
}

export default DroneForm;
