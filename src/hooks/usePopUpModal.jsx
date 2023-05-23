/**
 * @file Manage `usePopUpModal` custom React Hook.
 * @module usePopUpModal
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';

// » IMPORT COMPONENTS
import Portal from '../components/common/Portal';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The initial position of the Pop-up modal (default: { x: 0, y: 0 }).
 *
 * @typedef  {object} Position
 * @property {string} x        - The initial position on the x-axis.
 * @property {string} y        - The initial position on the y-axis.
 */

/**
 * The options for the Pop-up modal.
 *
 * @typedef  {object}   PopUpModalOptions
 * @property {Position} Position          - The initial position of the Pop-up modal (default: { x: 0, y: 0 }).
 * @property {string}   className         - The CSS class name for the Pop-up modal.
 * @property {string}   id                - The ID attribute for the Pop-up modal.
 */

/**
 * The function to handle the mouse down event.
 *
 * @typedef {(event: React.MouseEvent<HTMLElement, MouseEvent>) => void} HandleMouseDown
 */

/**
 * The function to open the Pop-up Modal.
 *
 * @typedef {() => void} OpenPopUp
 */

/**
 * The function to close the Pop-up Modal.
 *
 * @typedef {() => void} ClosePopUp
 */

/**
 * The function to toggle Pop-up Modal visibility.
 *
 * @typedef {() => void} TogglePopUp
 */

/**
 * The Pop-up Modal object.
 *
 * @typedef  {object}          PopUpModalHook
 * @property {React.Component} PopUp           - The React component for rendering the Pop-up portal.
 * @property {OpenModal}       openPopUp       - The function to open the modal.
 * @property {CloseModal}      closePopUp      - The function to close the modal.
 * @property {ToggleModal}     togglePopUp     - The function to toggle modal visibility.
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
 * @param {PopUpModalOptions} options - The options for the Pop-up modal.
 * @returns {PopUpModalHook} - The Pop-up modal object.
 * @example const { PopUp, togglePopUp, closePopUp } = usePopUpModal(options);
 */
const usePopUpModal = ({ position = { x: 0, y: 0 }, className, id }) => {
  const [visibility, setVisibility] = useState(false);
  const rootElement = document.createElement('div');
  const modalRef = useRef(rootElement);
  modalRef.current.setAttribute('id', id);
  modalRef.current.setAttribute('class', className);
  modalRef.current.style.left = position.x;
  modalRef.current.style.top = position.y;

  useEffect(() => {
    const element = modalRef.current;
    if (visibility) {
      appendChildToBody(element);
    }
    return () => {
      element.remove();
    };
  }, [visibility]);

  useEffect(() => {
    const handleClickOutside = event => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  /**
   * Open the PopUp.
   */
  const openPopUp = () => {
    setVisibility(true);
  };

  /**
   * Close the PopUp.
   */
  const closePopUp = () => {
    setVisibility(false);
  };

  /**
   * Toggle PopUp visibility.
   */
  const togglePopUp = () => {
    setVisibility(!visibility);
  };

  /**
   * The React component for rendering the Pop-up modal portal.
   *
   * @param {object} props - The component props.
   * @param {React.ReactNode} props.children - The children to render within the portal.
   * @returns {React.Component| null} - The rendered PopUp modal portal.
   */
  const PopUp = ({ children }) => (
    <Portal visibility={visibility} target={modalRef.current}>
      {children}
    </Portal>
  );

  PopUp.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    PopUp,
    openPopUp,
    closePopUp,
    togglePopUp,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default usePopUpModal;
