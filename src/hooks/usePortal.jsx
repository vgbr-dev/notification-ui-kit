/**
 * @file Manage `usePortal` custom React Hook for creating a portal.
 *
 * This hook provides functions and state for creating a portal in React.
 * It allows rendering components outside the normal React component hierarchy
 * and provides control over the visibility of the portal.
 *
 * @module usePortal
 * @version 1.1.0
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * @typedef  {Object} PortalOptions - The options for the portal.
 * @property {string} id            - The ID of the portal element. Defaults to `portal` if not provided.
 * @property {string} className     - The CSS class name to be applied to the portal element.
 */

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
 * The function to toggle the state of the Portal component between `open` and `closed`.
 *
 * @typedef {() => void} TogglePortal
 */

/**
 * An object containing portal-related functions and state.
 *
 * @typedef  {object}          PortalHook
 * @property {React.Component} Portal       - The React component for rendering the Portal component.
 * @property {OpenModal}       openPortal   - The function to open the Portal component.
 * @property {CloseModal}      closePortal  - The function to close the Portal component.
 * @property {ToggleModal}     togglePortal - The function to toggle the state of the Portal component between `open` and `closed`.
 */

// ━━ FUNCTIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Retrieves or creates a portal element based on the provided ID and className.
 *
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
 * @param {HTMLElement} element - The element to be removed from the body.
 */
const removeChildFromBody = element => {
  if (element && element.parentNode === document.body) {
    document.body.removeChild(element);
  }
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Retrieves or creates a portal element based on the provided ID and className.
 *
 * @param {PortalOptions} options - The options for the hook.
 * @returns {PortalHook} - An object containing portal-related functions and state.
 * @example const { Portal, openPortal, closePortal, togglePortal, } = usePortal(options);
 */
const usePortal = ({ id, className }) => {
  const [visibility, setVisibility] = useState(false);
  const portalRef = useRef(null);

  /**
   * Open the Portal component.
   */
  const openPortal = () => {
    setVisibility(true);
  };

  /**
   * The `closePortal()` function to toggle the state of the object
   * between `open` and `closed`.
   *
   */
  const closePortal = () => {
    setVisibility(false);
  };

  /**
   * The `togglePortal()` function to toggle the state of the Portal component
   * between `open` and `closed`.
   *
   */
  const togglePortal = () => {
    setVisibility(prevVisibility => !prevVisibility);
  };

  useEffect(() => {
    portalRef.current = getPortalElement(id, className);
    if (visibility) {
      appendChildToBody(portalRef.current);
    }
    return () => {
      if (portalRef.current) {
        removeChildFromBody(portalRef.current);
        portalRef.current = null;
      }
    };
  }, [id, className, visibility]);

  /**
   * Renders the portal component.
   *
   * @param {object} props - The props for the portal component.
   * @param {ReactNode} props.children - The children to be rendered within the portal.
   * @returns {ReactNode|null} - The portal component or null if visibility is false or portalRef is null.
   */
  const Portal = ({ children }) => {
    const condition = visibility && portalRef.current;
    return condition ? createPortal(children, portalRef.current) : null;
  };

  Portal.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    Portal,
    openPortal,
    closePortal,
    togglePortal,
  };
};

export default usePortal;
