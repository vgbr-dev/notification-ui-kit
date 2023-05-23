/**
 * @file Manage `usePopUpModal` custom React Hook.
 * @module usePopUpModal
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The position of the Pop-over (default: { x: 0, y: 0 }).
 *
 * @typedef  {object} Position
 * @property {string} x        - The position on the x-axis.
 * @property {string} y        - The position on the y-axis.
 */

/**
 * The options for the Pop-over hook.
 *
 * @typedef  {object}   PopOverOptions
 * @property {Position} Position       - The position of the Pop-over (default: { x: 0, y: 0 }).
 * @property {string}   className      - The CSS class name for the Pop-over.
 * @property {string}   id             - The ID attribute for the Pop-over.
 */

/**
 * The function to handle the mouse down event.
 *
 * @typedef {(event: React.MouseEvent<HTMLElement, MouseEvent>) => void} HandleMouseDown
 */

/**
 * The function to open the Pop-over component.
 *
 * @typedef {() => void} OpenPopOver
 */

/**
 * The function to close the Pop-over component.
 *
 * @typedef {() => void} ClosePopOver
 */

/**
 * The function to toggle the state (open/close) Pop-over component visibility.
 *
 * @typedef {() => void} TogglePopOver
 */

/**
 * An object containing Pop-over component-related functions and state.
 *
 * @typedef  {object}          PopOverHook
 * @property {React.Component} PopOver       - The React component for rendering the Pop-over portal.
 * @property {OpenPopOver}     openPopOver   - The function to open the Pop-over component.
 * @property {ClosePopOver}    closePopOver  - The function to close the Pop-over component.
 * @property {TogglePopOver}   togglePopOver - The function to toggle Pop-over component visibility.
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
 * Custom React hook for managing a Pop-over component.
 *
 * @param {PopOverOptions} options - The options for the Pop-over hook.
 * @returns {PopOverHook} - The Pop-over modal object.
 * @example const { PopOver, togglePopOver, closePopOver } = usePopOver(options);
 */
const usePopOver = ({ position = { x: 0, y: 0 }, className, id }) => {
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
   * The function to open the Pop-over component.
   */
  const openPopOver = () => {
    setVisibility(true);
  };

  /**
   * The function to close the Pop-over component.
   */
  const closePopOver = () => {
    setVisibility(false);
  };

  /**
   * The function to toggle the state (open/close) Pop-over component visibility.
   */
  const togglePopOver = () => {
    setVisibility(!visibility);
  };

  /**
   * The React component for rendering the Pop-over portal.
   *
   * @param {object} props - The component props.
   * @param {React.ReactNode} props.children - The children to render within the portal component.
   * @returns {React.Component| null} - The rendered PopOver portal.
   */
  const PopOver = ({ children }) => {
    const condition = visibility && containerRef.currentt !== null;
    return condition ? ReactDOM.createPortal(children, containerRef.current) : null;
  };

  PopOver.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    PopOver,
    openPopOver,
    closePopOver,
    togglePopOver,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default usePopOver;
