/**
 * @file Contains `ButtonBox` React components.
 * @module ButtonContainer
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT COMPONENTS
import ModalButton from './ModalButton';
import ModalContainer from './ModalContainer';
import PopOverButton from './PopOverButton';
import PopOverContainer from './PopOverContainer';
import ToastsButtons from './ToastsButtons';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ButtonBox` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ButtonBox = () => (
  <div className="button-box">
    <ToastsButtons />
    <PopOverButton>
      <PopOverContainer />
    </PopOverButton>
    <ModalButton>
      <ModalContainer />
    </ModalButton>
  </div>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ButtonBox;
