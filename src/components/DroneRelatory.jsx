import React, { useEffect, useState } from 'react';
import requests from '../services/requests';
import { ButtonRed } from '../styles/ButtonsStyles';
import TableStyled from '../styles/TableStyles';

function DroneRelatory() {
  const [drones, setDrones] = useState([]);

  useEffect(() => {
    const searchProducts = async () => {
      const response = await requests.getDrones();
      setDrones(response);
    };
    searchProducts();
  }, []);


  const handleEdite = async (id) => {
    console.log(id)
  }

  const handleDelete = async (id) => {
    const confirm = window.confirm('Excluir Drone ?');
    if (confirm) {
      await requests.deleteDrone(id);
      const drones = await requests.getDrones();
      setDrones(drones);
      window.alert('Drone deletado!!')
    }
  }

  return (
    <div>
      <h3>Relatorio dos Drones</h3>
      {
        drones.length > 0 ? 
        <TableStyled>
        <table>
          <thead>
            <tr>
              <th>Drone Id</th>
              <th>Modelo</th>
              <th>Marca</th>
              {/* <th></th> */}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {
              drones.map(({
                id, marca, modelo
              }) => (
                <tr>
                  <td>{id}</td>
                  <td>{marca}</td>
                  <td>{modelo}</td>
                  {/* <td>
                    <button
                      type="button"
                      onClick={() => handleEdite(id)}
                    >
                      Editar
                    </button>
                  </td> */}
                  <td>
                    <ButtonRed>
                      <button
                        type="button"
                        onClick={() => handleDelete(id)}
                      >
                        Excluir
                      </button>
                    </ButtonRed>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </TableStyled> :
        <div>
          <p>Crie um Drone</p>
        </div>
      }

    </div>
  );
}

export default DroneRelatory;
