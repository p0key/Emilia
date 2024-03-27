import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from 'components/base/Button';
import { useAppContext } from 'providers/AppProvider';
import { Offcanvas } from 'react-bootstrap';
import NavigationType from './NavigationType';
import ColorScheme from './ColorScheme';
import TopNavbarAppearance from './TopNavbarAppearance';
import { useSettingsPanelContext } from 'providers/SettingsPanelProvider';
import {
  faArrowsRotate,
  faPalette,
  faTimes
} from '@fortawesome/free-solid-svg-icons';
import { RESET } from 'reducers/ConfigReducer';

const SettingsPanel = () => {
  const { configDispatch } = useAppContext();

  const {
    settingsPanelConfig: { openSettingPanel, disableResetButton },
    setSettingsPanelConfig
  } = useSettingsPanelContext();

  const handleClose = () => {
    setSettingsPanelConfig({
      openSettingPanel: !openSettingPanel
    });
  };
  const handleResetToDefault = () => {
    configDispatch({
      type: RESET
    });
  };

  return (
    <Offcanvas
      className="settings-panel border-0"
      show={openSettingPanel}
      onHide={handleClose}
      placement="end"
    >
      <Offcanvas.Header className="align-items-start border-bottom border-translucent flex-column">
        <div className="pt-1 w-100 mb-6 d-flex justify-content-between align-items-start">
          <div>
            <h5 className="mb-2 me-2 lh-sm">
              <FontAwesomeIcon icon={faPalette} className="me-2 fs-8" />
              Cambiar Tema
            </h5>
            <p className="mb-0 fs-9">
              Seleccione un tema a gusto para su comodidad
            </p>
          </div>
          <button className="btn p-1 fw-bolder" onClick={handleClose}>
            <FontAwesomeIcon icon={faTimes} className="fs-8" />
          </button>
        </div>
        <Button
          variant="phoenix-secondary"
          className="w-100"
          onClick={handleResetToDefault}
          disabled={disableResetButton}
        >
          <FontAwesomeIcon icon={faArrowsRotate} className="me-2 fs-10" />
          Ajustes predeterminados
        </Button>
      </Offcanvas.Header>
      <Offcanvas.Body className="px-card scrollbar">
        <ColorScheme />
        <NavigationType />
        <TopNavbarAppearance className="mb-5" />
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default SettingsPanel;
