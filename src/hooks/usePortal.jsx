/**
 * @file Manage `usePortal` custom React Hook.
 * @module usePortal
 * @version 1.0.0
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The function to open the Portal component.
 *
 * @typedef {() => void} OpenPortal
 */

/**
 * The function to close the Portal component.
 *
 * @typedef {() => void} ClosePortal
 */

/**
 * The function to toggle Portal component visibility.
 *
 * @typedef {() => void} TogglePortal
 */

/**
 * The Portal object.
 *
 * @typedef  {object}          PortalHook
 * @property {React.Component} Portal       - The React component for rendering the Portal component.
 * @property {OpenModal}       openPortal   - The function to open the Portal component.
 * @property {CloseModal}      closePortal  - The function to close the Portal component.
 * @property {ToggleModal}     togglePortal - The function to toggle Portal component visibility.
 */

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Append the element to the body.
 *
 * @param {HTMLElement} element - The element to be appended.
 */
const appendChildToBody = element => {
  document.body.appendChild(element);
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom React hook for managing a Pop-up modal.
 *
 * @param {PortalOptions} options - The options for the Pop-up modal.
 * @returns {PortalHook} - The Pop-up modal object.
 * @example const { PopUp, togglePopUp, closePopUp } = usePortal(options);
 */
const usePortal = ({ id, className }) => {
  const [visibility, setVisibility] = useState(true);
  const rootElement = document.createElement('div');
  const containerRef = useRef(rootElement);
  containerRef.current.setAttribute('id', id);
  containerRef.current.setAttribute('class', className);

  useEffect(() => {
    const element = containerRef.current;
    if (visibility) {
      appendChildToBody(element);
    }
    return () => {
      element.remove();
    };
  }, [visibility]);

  /**
   * Open the Portal component.
   */
  const openPortal = () => setVisibility(true);

  /**
   * Close the Portal component.
   */
  const closePortal = () => setVisibility(false);

  /**
   * Toggle the Portal component visibility.
   */
  const togglePortal = () => setVisibility(!visibility);

  return {
    Portal: ({ children }) => {
      const condition = visibility && containerRef.current !== null;
      return condition ? ReactDOM.createPortal(children, containerRef.current) : null;
    },
    openPortal,
    closePortal,
    togglePortal,
  };
};

export default usePortal;
