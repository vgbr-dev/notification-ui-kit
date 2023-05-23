/**
 * @file Contains `ButtonContainer` React components.
 * @module ButtonContainer
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import ModalButton from '../ModalButton';
import ModalContainer from '../ModalContainer';
import PopUpButton from '../PopUpButton';
import ToastsButtons from '../ToastsButtons';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ButtonContainer` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ButtonContainer = () => (
  <div className="button-container">
    <ToastsButtons />
    <PopUpButton>
      <h1>Hi! 😊</h1>
      <p>I am a Pop-up Modal, click outside of me if you want to close me</p>
    </PopUpButton>
    <ModalButton>
      <ModalContainer />
    </ModalButton>
  </div>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ButtonContainer;
