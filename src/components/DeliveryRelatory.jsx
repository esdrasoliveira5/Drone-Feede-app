import React, { useEffect, useState } from 'react';
import requests from '../services/requests';
import { ButtonRed } from '../styles/ButtonsStyles';
import TableStyled from '../styles/TableStyles';


function DeliveryRelatory() {
  const [deliverys, setDeliverys] = useState([]);

  useEffect(() => {
    const searchProducts = async () => {
      const response = await requests.getDeliverys();
      setDeliverys(response);
    };
    searchProducts();
  }, []);

  const handleFinalizar = async (id) => {
    const confirm = window.confirm('Finaliar Entrega ?');
    if (confirm) {
      const response = await requests.patchDelivery(id);
      const deliverys = await requests.getDeliverys();
      setDeliverys(deliverys);
      window.alert('Entrega Finalizada!!')
    }
  }

  // const handleCancelar = async (id) => {
  //   const confirm = window.confirm('Cancelar Entrega ?');
  //   if (confirm) {
  //     const response = await requests.deleteDelivery(id);
  //     console.log(response);
  //     window.alert('Entrega Cancelada!!')
  //   }
  // }


  return (
    <div>
      <h3>Relatorio de Entregas</h3>
      {
        deliverys.length > 0 ?
              <TableStyled>
              <table>
                <thead>
                  <tr>
                    <th>Entrega</th>
                    <th>Cordenadas</th>
                    <th>Drone</th>
                    <th>Data do Pedido</th>
                    <th>Status</th>
                    <th>Data da Entrega</th>
                    <th>Video da Entrega</th>
                    {/* <th></th> */}
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {
                    deliverys.map(({
                      id, latitude, longitude, dateAndTime, drone, deliveryStatus, deliveryDateAndTime, video,
                    }) => (
                      <tr>
                        <td>{id}</td>
                        <td>{`LA: ${latitude}, LO: ${longitude}`}</td>
                        <td>{drone.id}</td>
                        <td>{dateAndTime.toLocaleString()}</td>
                        <td>{deliveryStatus ? 'Entregue' : 'Em Transito' }</td>
                        <td>{deliveryDateAndTime ? deliveryDateAndTime.toLocaleString() : ''}</td>
                        <td>{ !deliveryStatus? <a href={`${video.url}`} target="_blank">Video</a> : 'Video em andamento'}</td>
                        {/* <td>
                          {
                          !deliveryStatus?
                              <button
                                type="button"
                                onClick={() => handleCancelar(id)}
                              >
                              Cancelar
                              </button>
                            : ''
                          }
                        </td> */}
                        <td>
                          {
                          !deliveryStatus?
                          <ButtonRed>
                              <button
                                type="button"
                                onClick={() => handleFinalizar(id)}
                              >
                              Finalizar
                              </button>
                          </ButtonRed>
                            : ''
                          }
                        </td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            </TableStyled> :
            <p> Crie uma Entrega</p>
      }
    </div>
  );
}

export default DeliveryRelatory;
