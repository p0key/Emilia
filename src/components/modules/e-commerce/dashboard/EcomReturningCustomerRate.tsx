import EcomReturningCustomerRateChart from 'components/charts/e-charts/EcomReturningCustomerRateChart';
import React from 'react';

const EcomReturningCustomerRate = () => {
  return (
    <>
      <div>
        <h3>Porcentaje de repetición de eventos en un mismo lugar</h3>
        <p className="mb-1 text-body-tertiary">
          Análisis en cantidad de eventos al paso del tiempo
        </p>
      </div>
      <EcomReturningCustomerRateChart />
    </>
  );
};

export default EcomReturningCustomerRate;
