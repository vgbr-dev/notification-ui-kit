/**
 * @file Manage `useToasts` custom Hook, for managing toasts.
 * @module useToasts
 * @version 1.2.0
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState } from 'react';

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

  /**
   * Closes a toast with the specified ID.
   *
   * @param {number} id - The ID of the toast to close.
   */
  const closeToast = id => {
    setToasts(previous => previous.filter(toast => toast.id !== id));
  };

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
    };
    setToasts([...toasts, toast]);
  };

  return {
    toasts,
    addToast,
    closeToast,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useToasts;
