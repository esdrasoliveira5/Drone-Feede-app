const URL_FETCH = 'http://localhost:8082';
const APLICATION = 'application/json';

async function createDrone({ marca, modelo }) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/drone`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        marca,
        modelo,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function createVideo({ url, drone}) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/video`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        url,
        drone,
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function createDelivery({ latitude, longitude, drone, video }) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/delivery`, {
      method: 'POST',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        latitude,
        longitude,
        drone,
        video
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}


async function getDeliverys() {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/delivery`, {
      method: 'GET',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function getDrones() {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/drone`, {
      method: 'GET',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function updateDrone(id, { marca, modelo }) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/drone/${id}`, {
      method: 'PUT',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
      body: JSON.stringify({
        marca,
        modelo
      }),
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function patchDelivery(id) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/delivery/${id}/finish`, {
      method: 'PATCH',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function deleteDrone(id) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/drone/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

async function deleteDelivery(id) {
  try {
    const response = await fetch(`${URL_FETCH}/dronefeeder/delivery/${id}`, {
      method: 'DELETE',
      headers: {
        Accept: APLICATION,
        'Content-Type': APLICATION,
      },
    });
    const results = await response.json();
    return results;
  } catch (error) {
    return { error };
  }
}

export default {
  createDrone,
  createVideo,
  createDelivery,
  getDeliverys,
  getDrones,
  updateDrone,
  patchDelivery,
  deleteDrone,
  deleteDelivery
}