/**
 * @file Contains `ButtonContainer` React components.
 * @module ButtonContainer
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import ModalButton from '../ModalButton';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ButtonContainer` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ButtonContainer = () => (
  <div className="button-container">
    <button type="button" className="button-container__button button-container__button--success">
      Exito
    </button>
    <button type="button" className="button-container__button button-container__button--error">
      Error
    </button>
    <button
      type="button"
      className="button-container__button button-container__button--information"
    >
      Information
    </button>
    <button type="button" className="button-container__button button-container__button--warning">
      Warning
    </button>
    <button type="button" className="button-container__button button-container__button--default">
      Pop-up
    </button>
    <ModalButton>
      <h1>Hi! 😊</h1>
      <p>I am a Movable Modal</p>
    </ModalButton>
  </div>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ButtonContainer;
