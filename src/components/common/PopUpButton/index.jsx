/**
 * @file Contains `PopUpButton` React components.
 * @module PopUpButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import usePopOver from '../../../hooks/usePopOver';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `PopUpButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopUpButton = ({ children }) => {
  const { PopOver, togglePopOver } = usePopOver({
    id: 'popup',
    className: 'popup-container',
    position: { x: '45%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <button
        type="button"
        className="button-container__button button-container__button--default"
        onClick={togglePopOver}
      >
        Pop-up
      </button>
      <PopOver>{children}</PopOver>
    </React.Fragment>
  );
};

PopUpButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopUpButton;
