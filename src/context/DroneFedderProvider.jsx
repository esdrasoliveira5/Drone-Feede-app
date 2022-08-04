import React, { useState, useMemo } from 'react';
import droneFeederContext from './AppContext';

function DroneFeeder({ children }) {
  const [page, setPage] = useState('droneFeeder');

  const contextValue = useMemo(() => ({
    page,
    setPage,
  }), [page]);

  return (
    <droneFeederContext.Provider value={contextValue}>
      { children }
    </droneFeederContext.Provider>
  );
}

export default DroneFeeder;
