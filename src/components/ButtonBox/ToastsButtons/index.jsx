/**
 * @file Contains `ToastsButtons` React components.
 * @module ToastsButtons
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT MODULES
import TOASTS_PROPERTIES from './toastsProperties';

// » IMPORT HOOKS
import useToasts from '../../../hooks/useToasts';

// » IMPORT COMPONENTS
import Button from '../../common/Button';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The type of the toast (success, error, information, warning).
 *
 * @typedef {"SUCCESS"|"ERROR"|"INFO"|"WARNING"}  ToastType
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ToastsButtons` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ToastsButtons = () => {
  const { Toasts, addToast } = useToasts();

  /**
   * Creates a toast notification based on the specified type.
   *
   * @param {ToastType} type -El tipo de toast (success, error, information, warning).
   */
  const createToast = type => {
    const toast = TOASTS_PROPERTIES[type];
    addToast(toast);
  };

  return (
    <React.Fragment key="ButtonBox">
      <Button modifier="error" text="Error" onClick={() => createToast('ERROR')} />
      <Button modifier="warning" text="Warning" onClick={() => createToast('WARNING')} />
      <Button modifier="information" text="Information" onClick={() => createToast('INFO')} />
      <Button modifier="success" text="Success" onClick={() => createToast('SUCCESS')} />
      {Toasts}
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ToastsButtons;
