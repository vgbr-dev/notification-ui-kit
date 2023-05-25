/**
 * @file The `useToasts` custom hook for managing toasts notification system.
 * @module useToasts
 * @version 1.3.0
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { createPortal } from 'react-dom';

// » IMPORT COMPONENTS
import Toast from '../components/common/Toast';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Represents the properties of toast notifications.
 *
 * @typedef  {object}  Toast
 * @property {string}  id          - The unique ID of the toast.
 * @property {string}  type        - The type of the toast (success, error, information, warning).
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
 * Function to close a toast notifications.
 *
 * @typedef  {(id: number) => void} closeToast
 */

/**
 * The options to create toast notifications.
 *
 * @typedef  {object}  AddToastOptions -
 * @property {string}  type            - The type of the toast (success, error, information, warning).
 * @property {string}  title           - The title of the toast.
 * @property {string}  description     - The description of the toast.
 * @property {boolean} autoClose       - Determines if the toast should automatically close.
 */

/**
 * Function to add a new toast notifications.
 *
 * @typedef  {(toast: AddToastOptions) => void} addToast
 */

/**
 * Represents the `useToasts` custom hook for managing toasts.
 *
 * @typedef  {object}           ToastsHook
 * @property {HTMLElement|null} toastsContainer - The DOM container element for the toasts.
 * @property {addToast}         addToast        - Function to add a new toast notifications.
 */

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Generates a unique ID for a toast.
 *
 * @private
 * @returns {string} The unique ID.
 */
const createToastId = () => `${Date.now().toString(36)}-${Math.random().toString(36).substr(2)}`;

/**
 * Retrieves or creates a portal element based on the provided ID and className.
 *
 * @private
 * @param {string} id - The ID of the portal element.
 * @param {string} className - The CSS class name to be applied to the portal element.
 * @returns {HTMLElement} - The portal element.
 */
const getPortalElement = (id, className) => {
  const existingPortal = document.getElementById(id);

  if (existingPortal) {
    return existingPortal;
  }

  const portalElement = document.createElement('div');
  portalElement.id = id;
  portalElement.classList.add(className);

  return portalElement;
};

/**
 * Appends the provided element to the document body if it doesn't already exist.
 *
 * @private
 * @param {HTMLElement} element - The element to be appended to the body.
 */
const appendChildToBody = element => {
  if (!document.body.contains(element)) {
    document.body.appendChild(element);
  }
};

/**
 * Removes the provided element from the document body.
 *
 * @private
 * @param {HTMLElement} element - The element to be removed from the body.
 */
const removeChildFromBody = element => {
  if (element && element.parentNode === document.body) {
    document.body.removeChild(element);
  }
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `useToasts` custom hook for managing toasts.
 *
 * @returns {ToastsHook} An object with `toasts` state and functionsfor manage it.
 * @example const { toastsContainer, addToast } = useToasts();
 */
const useToasts = () => {
  const [toasts, setToasts] = useState([]);
  const portalRef = useRef(null);

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
   * @param {AddToastOptions} options - The options for the new toast.
   */
  const addToast = useCallback(
    ({ title, description, type, autoClose }) => {
      const toast = {
        id: createToastId(),
        type,
        title,
        description,
        autoClose,
      };
      setToasts(previous => [...previous, toast]);
    },
    [setToasts],
  );

  useEffect(() => {
    portalRef.current = getPortalElement('toasts-container', 'toasts');
    appendChildToBody(portalRef.current);
    return () => {
      if (portalRef.current) {
        removeChildFromBody(portalRef.current);
        portalRef.current = null;
      }
    };
  }, []);

  /**
   * Returns the container element for the toasts.
   *
   * @returns {ReactNode|null} - The container element for the toasts.
   */
  const toastsContainer = useMemo(() => {
    const condition = portalRef.current !== null;
    return condition
      ? createPortal(
          <React.Fragment key="toast">
            {toasts.map(toast => (
              <Toast key={toast.id} toast={toast} closeToast={closeToast} />
            ))}
          </React.Fragment>,
          portalRef.current,
        )
      : null;
  }, [portalRef, closeToast, toasts]);

  return {
    toastsContainer,
    addToast,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useToasts;
