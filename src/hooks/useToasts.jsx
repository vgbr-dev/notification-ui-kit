/**
 * @file Manage `useToasts` custom Hook, for managing toasts.
 * @module useToasts
 * @version 1.1.0
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useCallback, useEffect, useRef, useState } from 'react';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Represents a toast.
 *
 * @typedef  {object}  Toast
 * @property {string}  id          - The unique ID of the toast.
 * @property {string}  type        - The type of the toast.
 * @property {string}  title       - The title of the toast.
 * @property {string}  description - The description of the toast.
 * @property {boolean} autoClose   - Determines if the toast should automatically close.
 * @property {boolean} isClosing   - Indicates if the toast is currently closing.
 */

/**
 * Represents an array of toasts.
 *
 * @typedef {Array<Toast>} Toasts
 */

/**
 * Function to close a toast.
 *
 * @typedef  {(id: number) => void} closeToast
 */

/**
 * Function to add a new toast.
 *
 * @typedef  {(toast: Toast) => void} addToast
 */

/**
 * Represents the `useToasts` custom hook for managing toasts.
 *
 * @typedef  {object}     ToastsHook
 * @property {Toasts}     toasts     - An array of toasts.
 * @property {closeToast} closeToast - Function to close a toast.
 * @property {addToast}   addToast   - Function to add a new toast.
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The delay in milliseconds for automatically closing a toast.
 *
 * @constant {number} AUTO_CLOSE_DELAY
 */
const AUTO_CLOSE_DELAY = 5000; // 5 seconds

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Generates a unique ID for a toast.
 *
 * @returns {string} The unique ID.
 */
const createToastId = () => `${Date.now().toString(36)}-${Math.random().toString(36).substr(2)}`;

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useToasts` custom hook for managing toasts.
 *
 * @returns {ToastsHook} An object with `toasts` state and functions for manage it.
 */
const useToasts = () => {
  const [toasts, setToasts] = useState([]);
  const toastTimersRef = useRef([]);

  /**
   * Closes a toast with the specified ID.
   *
   * @param {number} id - The ID of the toast to close.
   */
  const closeToast = useCallback(id => {
    setToasts(previous => previous.filter(toast => toast.id !== id));
  }, []);

  /**
   * Adds a new toast.
   *
   * @param {object} options - The options for the new toast.
   * @param {string} options.type - The type of the toast.
   * @param {string} options.title - The title of the toast.
   * @param {string} options.description - The description of the toast.
   * @param {boolean} options.autoClose - Determines if the toast should automatically close.
   */
  const addToast = ({ type, title, description, autoClose }) => {
    const toast = {
      id: createToastId(),
      type,
      title,
      description,
      autoClose,
      isClosing: !autoClose,
      duration: AUTO_CLOSE_DELAY,
    };

    setToasts(previous => [...previous, toast]);
  };

  const cleanupToastTimers = useCallback(toastTimers => {
    toastTimers.forEach(timerId => clearTimeout(timerId));
  }, []);

  useEffect(() => {
    cleanupToastTimers(toastTimersRef.current);
    toastTimersRef.current = [];

    toasts.forEach(toast => {
      if (toast.autoClose) {
        const timerId = setTimeout(() => {
          closeToast(toast.id);
        }, toast.duration);
        toastTimersRef.current.push(timerId);
      }
    });

    return () => {
      cleanupToastTimers(toastTimersRef.current);
    };
  }, [toasts, closeToast, cleanupToastTimers]);

  return {
    toasts,
    addToast,
    closeToast,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useToasts;
