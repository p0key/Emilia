import EcomTopRegionsTable from 'components/tables/EcomTopRegionsTable';
import React from 'react';

const EcomTopRegions = () => {
  return (
    <>
      <div className="mb-5 mt-7">
        <h3> Ejemplificación por región</h3>
        <p className="text-body-tertiary">
          {' '}
          Tabla de ejemplo para demostración de datos por categoría
        </p>
      </div>
      <EcomTopRegionsTable />
    </>
  );
};

export default EcomTopRegions;
