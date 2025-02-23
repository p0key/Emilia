import Badge from 'components/base/Badge';
import EcomNewCustomersChart from 'components/charts/e-charts/EcomNewCustomersChart';
import { Card } from 'react-bootstrap';

const EcomNewCustomersCard = () => {
  return (
    <Card className="h-100">
      <Card.Body>
        <div className="d-flex justify-content-between">
          <div>
            <h5 className="mb-1">
              Nuevos eventos
              <Badge bg="warning" variant="phoenix" pill className="ms-2">
                +26.5%
              </Badge>
            </h5>
            <h6 className="text-body-tertiary">Últimos 7 días</h6>
          </div>
          <h4>356</h4>
        </div>
        <div className="pb-0 pt-4">
          <EcomNewCustomersChart />
        </div>
      </Card.Body>
    </Card>
  );
};

export default EcomNewCustomersCard;
