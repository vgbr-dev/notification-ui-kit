/**
 * @file Contains `PopUpButton` React components.
 * @module PopUpButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import usePopUpModal from '../../../hooks/usePopUpModal';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `PopUpButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopUpButton = ({ children }) => {
  const { PopUp, togglePopUp } = usePopUpModal({
    id: 'popup',
    className: 'popup-container',
    position: { x: '45%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <button
        type="button"
        className="button-container__button button-container__button--default"
        onClick={togglePopUp}
      >
        Pop-up
      </button>
      <PopUp>
        <section className="popup-container__content">{children}</section>
      </PopUp>
    </React.Fragment>
  );
};

PopUpButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopUpButton;
