import { useAppContext } from 'providers/AppProvider';
import { ChangeEvent } from 'react';
import { Col, Row } from 'react-bootstrap';
import defaultLight from 'assets/img/generic/default-light.png';
import defaultDark from 'assets/img/generic/default-dark.png';
import auto from 'assets/img/generic/auto.png';
import RadioItem from './RadioItem';
import { ThemeVariant } from 'config';

const ColorScheme = () => {
  const {
    config: { theme },
    setConfig
  } = useAppContext();

  const handleThemeChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setConfig({
      theme: value as ThemeVariant
    });
  };

  return (
    <div className="setting-panel-item mt-0">
      <h5 className="setting-panel-item-title">Esquema de colores</h5>
      <Row className="gx-2">
        <Col xs={4}>
          <RadioItem
            label="Claro"
            name="theme"
            value="light"
            thumb={defaultLight}
            checked={theme === 'light'}
            handleChange={handleThemeChange}
          />
        </Col>
        <Col xs={4}>
          <RadioItem
            label="Oscuro"
            name="theme"
            value="dark"
            thumb={defaultDark}
            checked={theme === 'dark'}
            handleChange={handleThemeChange}
          />
        </Col>
        <Col xs={4}>
          <RadioItem
            label="Automático"
            name="theme"
            value="auto"
            thumb={auto}
            checked={theme === 'auto'}
            handleChange={handleThemeChange}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ColorScheme;
