/**
 * @file Contains `Toast` React component.
 * @module Toast
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';
import { useEffect, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Represents the icons used for different toast types.
 *
 * @typedef  {object} Icons
 * @property {string} success     - The icon for success toasts.
 * @property {string} error       - The icon for error toasts.
 * @property {string} information - The icon for information toasts.
 * @property {string} warning     - The icon for warning toasts.
 */

/**
 * Represents a toast.
 *
 * @typedef  {object}  Toast
 * @property {string}  id          - The unique ID of the toast.
 * @property {string}  type        - The type of the toast.
 * @property {string}  title       - The title of the toast.
 * @property {string}  description - The description of the toast.
 * @property {boolean} autoClose   - Determines if the toast should automatically close.
 */

/**
 * Function to close a toast.
 *
 * @typedef  {(id: number) => void} CloseToast
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Icons for different toast types.
 *
 * @type {Icons}
 */
const icons = {
  success: 'check_circle',
  error: 'error',
  information: 'info',
  warning: 'warning',
};

/**
 * The delay in milliseconds for automatically closing a toast.
 *
 * @constant {number} AUTO_CLOSE_DELAY
 */
const AUTO_CLOSE_DELAY = 5000; // 5 seconds

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Toast` component.
 *
 * @component
 * @param {object} props - The Component properties.
 * @param {Toast} props.toast -The toast properties.
 * @param {CloseToast} props.closeToast - Function to close a toast.
 * @returns {JSX.Element} The rendered component.
 */
const Toast = ({ toast, closeToast }) => {
  const toastTypeClass = `toast toast--${toast.type}`;
  const toastAutoCloseClass = toast.autoClose ? ' toast--auto-close' : '';
  const [toastClass, setToastClass] = useState(`${toastTypeClass} ${toastAutoCloseClass}`);

  /**
   * Handles the click event on a toast.
   */
  const onClick = () => {
    setToastClass(previous => `${previous} toast--closing`);
    setTimeout(() => {
      closeToast(toast.id);
    }, 200);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (toast.autoClose) {
        closeToast(toast.id);
      }
    }, AUTO_CLOSE_DELAY);

    return () => {
      clearInterval(interval);
    };
  }, [closeToast, toast.autoClose, toast.id]);

  return (
    <div id={toast.id} className={toastClass}>
      <div className="toast__content">
        <div className="toast__icon">{icons[toast.type]}</div>
        <div className="toast__text">
          <p className="toast__title">{toast.title}</p>
          <p className="toast__description">{toast.description}</p>
        </div>
      </div>
      <div className="toast__control">
        <button type="button" className="toast__close-button" onClick={onClick}>
          close
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    autoClose: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  closeToast: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Toast;
