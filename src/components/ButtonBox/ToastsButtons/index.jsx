/**
 * @file Contains `ToastsButtons` React components.
 * @module ToastsButtons
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT REACT MODULES
import TOASTS_PROPERTIES from './toastsProperties';

// » IMPORT HOOKS
import useToasts from '../../../hooks/useToasts';
import Toasts from '../../common/Toasts';

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
  const { toasts, addToast, closeToast } = useToasts();

  const addSuccesToast = () => {
    addToast({
      type: 'success',
      title: 'Exito!',
      description: 'La operación fue exitosa.',
      autoClose: true,
    });
  };

  const addErrorToast = () => {
    addToast({
      type: 'error',
      title: 'Error',
      description: 'Hubo un error',
      autoClose: true,
    });
  };

  const addInfoToast = () => {
    addToast({
      type: 'information',
      title: 'Information',
      description: 'Esta es una notificación de información.',
      autoClose: false,
    });
  };

  const addWarningToast = () => {
    addToast({
      type: 'warning',
      title: 'Warning',
      description: 'Ten cuidado',
      autoClose: false,
    });
  };

  return (
    <React.Fragment key="ButtonBox">
      <Button modifier="success" text="Exito" onClick={addSuccesToast} />
      <Button modifier="error" text="Error" onClick={addErrorToast} />
      <Button modifier="information" text="Information" onClick={addInfoToast} />
      <Button modifier="warning" text="Warning" onClick={addWarningToast} />
      <Toasts toasts={toasts} closeToast={closeToast} />
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ToastsButtons;
