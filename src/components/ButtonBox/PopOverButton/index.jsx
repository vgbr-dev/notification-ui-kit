/**
 * @file Contains `PopOverButton` React components.
 * @module PopOverButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT CUSTOM HOOKS
import usePopOver from '../../../hooks/usePopOver';

// » IMPORT COMPONENTS
import Button from '../../common/Button';
import PopOverContent from './PopOverContent';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `PopOverButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopOverButton = () => {
  const { PopOver, togglePopOver } = usePopOver({
    id: 'popover',
    className: 'popover-container',
    position: { x: '45%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <Button modifier="default" text="Pop-Over" onClick={togglePopOver} />
      <PopOver>
        <PopOverContent />
      </PopOver>
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopOverButton;
