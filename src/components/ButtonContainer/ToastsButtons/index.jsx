/**
 * @file Contains `ToastsButtons` React components.
 * @module ToastsButtons
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT HOOKS
import useToasts from '../../../hooks/useToasts';
import Toasts from '../../common/Toasts';

// » IMPORT COMPONENTS

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
      <button
        type="button"
        className="button-container__button button-container__button--success"
        data-type="success"
        onClick={addSuccesToast}
      >
        Exito
      </button>
      <button
        type="button"
        className="button-container__button button-container__button--error"
        data-type="error"
        onClick={addErrorToast}
      >
        Error
      </button>
      <button
        type="button"
        className="button-container__button button-container__button--information"
        data-type="information"
        onClick={addInfoToast}
      >
        Information
      </button>
      <button
        type="button"
        className="button-container__button button-container__button--warning"
        data-type="warning"
        onClick={addWarningToast}
      >
        Warning
      </button>
      <Toasts toasts={toasts} closeToast={closeToast} />
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ToastsButtons;
