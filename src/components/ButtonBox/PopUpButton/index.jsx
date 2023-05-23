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

// » IMPORT COMPONENTS
import Button from '../../common/Button';

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
      <Button modifier="default" text="Pop-Over" onClick={togglePopOver} />
      <PopOver>{children}</PopOver>
    </React.Fragment>
  );
};

PopUpButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopUpButton;
