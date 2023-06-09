/**
 * @file Manage `usePopOver` custom React Hook.
 * @module usePopOver
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState, useRef, useEffect } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The position of the `PopOver` component (default: { x: 0, y: 0 }).
 *
 * @typedef  {object} Position
 * @property {string} x        - The position on the x-axis.
 * @property {string} y        - The position on the y-axis.
 */

/**
 * The options for the `usePopOver` hook.
 *
 * @typedef  {object}   PopOverOptions
 * @property {string}   id                  - The ID attribute for the Pop-over.
 * @property {string}   className           - The CSS class name for the Pop-over.
 * @property {Position} position            - The position of the Pop-over (default: { x: 0, y: 0 }).
 * @property {boolean}  closeOnClickOutside - Flag to control if the Pop-over should be closed when clicked outside (default: true).
 */

/**
 * The function to handle the mouse down event.
 *
 * @typedef {(event: React.MouseEvent<HTMLElement, MouseEvent>) => void} HandleMouseDown
 */

/**
 * The function to open the `PopOver` component.
 *
 * @typedef {() => void} OpenPopOver
 */

/**
 * The function to close the `PopOver` component.
 *
 * @typedef {() => void} ClosePopOver
 */

/**
 * The function to toggle the state of `PopOver` component
 * between `open` and `closed`.
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
 * @private
 * @param {HTMLElement} element - The element to be appended.
 */
const appendChildToBody = element => {
  if (!document.body.contains(element)) {
    document.body.appendChild(element);
  }
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom React hook for managing a Pop-over component.
 *
 * @param {PopOverOptions} options - The options for the Pop-over hook.
 * @returns {PopOverHook} - An object containing Pop-over component-related functions and state.
 * @example const { PopOver, togglePopOver, closePopOver } = usePopOver(options);
 */
const usePopOver = ({ id, className, closeOnClickOutside = false, position = { x: 0, y: 0 } }) => {
  const [visibility, setVisibility] = useState(false);
  const rootElement = document.createElement('div');
  const containerRef = useRef(rootElement);
  containerRef.current.setAttribute('id', id);
  containerRef.current.setAttribute('class', className);
  containerRef.current.style.left = position.x;
  containerRef.current.style.top = position.y;

  useEffect(() => {
    const element = containerRef.current;
    if (visibility) {
      appendChildToBody(element);
    }
    return () => {
      element.remove();
    };
  }, [visibility]);

  useEffect(() => {
    const handleClickOutside = event => {
      const shouldClose = closeOnClickOutside && containerRef.current && !containerRef.current.contains(event.target); // eslint-disable-line prettier/prettier
      if (shouldClose) {
        setVisibility(false);
      }
    };

    const handleKeyDown = event => {
      if (event.key === 'Escape') {
        setVisibility(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeOnClickOutside]);

  /**
   * The function to open the `PopOver` component.
   */
  const openPopOver = () => {
    setVisibility(true);
  };

  /**
   * The function to close the `PopOver` component.
   */
  const closePopOver = () => {
    setVisibility(false);
  };

  /**
   * The function to toggle the state of `PopOver` component
   * between `open` and `closed`.
   *
   */
  const togglePopOver = () => {
    setVisibility(!visibility);
  };

  /**
   * The React component for rendering the Pop-over portal.
   *
   * @param {object} props - The component properties.
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
