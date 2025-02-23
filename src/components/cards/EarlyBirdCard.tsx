import Badge from 'components/base/Badge';
import React from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import illustration32 from 'assets/img/spot-illustrations/32.png';
import illustration21 from 'assets/img/spot-illustrations/21.png';
import illustration21Dark from 'assets/img/spot-illustrations/dark_21.png';
import { faAward } from '@fortawesome/free-solid-svg-icons';

const EarlyBirdCard = () => {
  return (
    <Card className="border h-100 w-100 overflow-hidden">
      <div
        className="bg-card bg-holder d-block"
        style={{
          backgroundImage: `url(${illustration32})`,
          backgroundPosition: 'top right'
        }}
      />
      <div className="d-dark-none">
        <div
          className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card"
          style={{
            backgroundImage: `url(${illustration21})`,
            backgroundPosition: 'bottom right',
            backgroundSize: 'auto'
          }}
        />
      </div>
      <div className="d-light-none">
        <div
          className="bg-holder d-none d-sm-block d-xl-none d-xxl-block bg-card"
          style={{
            backgroundImage: `url(${illustration21Dark})`,
            backgroundPosition: 'bottom right',
            backgroundSize: 'auto'
          }}
        />
      </div>
      <Card.Body className="px-5 position-relative">
        <Badge
          bg="warning"
          variant="phoenix"
          iconPosition="end"
          className="fs-10 mb-4"
          iconFamily="fa"
          icon={<FontAwesomeIcon icon={faAward} className="ms-1 fs-10" />}
        >
          COMING SOON
        </Badge>
        <h3 className="mb-5">Early bird gets the warm leads!</h3>
        <p className="text-body-tertiary fw-semibold">
          Phoenix CRM Dashboard is coming to{' '}
          <br className="d-none d-sm-block" />
          market soon for fulfilling your every{' '}
          <br className="d-none d-sm-block" />
          CRM related needs.{' '}
        </p>
      </Card.Body>
      <Card.Footer className="border-0 py-0 px-5 z-1">
        <p className="text-body-tertiary fw-semibold">
          Follow{' '}
          <a href="https://vrobotics.cl/" target="_blank" rel="noreferrer">
            V-ROBOTICS{' '}
          </a>
          at <br className="d-none d-xxl-block" />
          Bootstrap Marketplace for updates.
        </p>
      </Card.Footer>
    </Card>
  );
};

export default EarlyBirdCard;
