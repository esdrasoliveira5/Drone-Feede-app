import React, { useEffect, useState } from 'react';
import requests from '../services/requests';
import { ButtonGreen } from '../styles/ButtonsStyles';
import FormStyled from '../styles/FormStyles';


function DeliveryForm() {
    const [drones, setDrones] = useState([]);
    const [data, setdata] = useState({
        latitude: '',
        longitude: '',
        drone: 1
    })

    const handleFormData = ({ target }) => {
        const { name, value } = target;

        console.log(name, value)
        setdata({
            ...data,
            [name]: value,
        });
    };

    useEffect(() => {
      const searchProducts = async () => {
        const response = await requests.getDrones();
        setDrones(response);
      };
      searchProducts();
    }, []);


    const submitForm = async () => {
        if (data.latitude.length > 0 || data.longitude.length > 0) {
            const responseVideo = await requests.createVideo({ 
                drone: data.drone,
                url: 'https://www.youtube.com/watch?v=qcsszdkjlXg'
            })
            const response = await requests.createDelivery({ ...data, video: responseVideo.id})
    
            if(response.id) {
                window.alert('Entrega Criada!!')
            }
        } else {
            window.alert("Campos não podem ser vazios!!")
        }
    };
    
    return (
        <FormStyled>
            <h3>Cordenadas</h3>
            <label htmlFor="latitude">
                <input
                    type="text"
                    value={data.marca}
                    name="latitude"
                    placeholder="Latitude"
                    onChange={(event) => handleFormData(event)}
                />
            </label>
            <label htmlFor="longitude">
                <input
                    type="text"
                    value={data.modelo}
                    name="longitude"
                    placeholder="Longitude"
                    onChange={(event) => handleFormData(event)}
                />
            </label>
            <h3>Drone</h3>
            <label htmlFor="drone">
                <select
                    name="drone"
                    onChange={(event) => handleFormData(event)}
                    value={data.drone}
                >
                    {
                    drones.length > 0 ? drones.map(({ id, marca, modelo }) => (
                    <option
                        key={`${id} - ${modelo}`}
                        value={id}
                    >
                        {`${marca} - ${modelo}`}
                    </option>
                    )) : ''}
                </select>
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

export default DeliveryForm;
