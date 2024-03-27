import EcomProjectionVsActualChart from 'components/charts/e-charts/EcomProjectionVsActualChart';
import React from 'react';

const EcomProjectionVsActual = () => {
  return (
    <div className="me-xl-4">
      <div>
        <h3>Análisis de proyección</h3>
        <p className="mb-1 text-body-tertiary">
          Eventos actuales vs eventos en proyección
        </p>
      </div>
      <EcomProjectionVsActualChart height="300px" width="100%" />
    </div>
  );
};

export default EcomProjectionVsActual;
