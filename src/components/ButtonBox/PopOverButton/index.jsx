/**
 * @file Contains `PopOverButton` React components.
 * @module PopOverButton
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
 * The `PopOverButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopOverButton = ({ children }) => {
  const { PopOver, togglePopOver } = usePopOver({
    id: 'popover',
    className: 'popover-container',
    position: { x: '45%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <Button modifier="default" text="Pop-Over" onClick={togglePopOver} />
      <PopOver>{children}</PopOver>
    </React.Fragment>
  );
};

PopOverButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopOverButton;
