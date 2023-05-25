/**
 * @file Manage `useDraggableModal` custom React Hook.
 * @module useDraggableModal
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { useState, useRef, useCallback, useEffect } from 'react';
import PropTypes from 'prop-types';

// » IMPORT COMPONENTS
import Portal from '../components/common/Portal';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 *  Object representing the boundaries for a coordinate.
 *
 * @private
 * @typedef  {object}  Boundary
 * @property {boolean} start    - Indicates whether the coordinate plus the offset is within the boundary start.
 * @property {boolean} end      - Indicates whether the coordinate plus the offset is within the boundary end.
 */

/**
 * Object representing the boundaries for both the x and y axes.
 *
 * @private
 * @typedef  {object}   Boundaries
 * @property {Boundary} x          - Information about the boundaries on the x-axis.
 * @property {Boundary} y          - Information about the boundaries on the y-axis.
 */

/**
 * The initial position of the modal (default: { x: 0, y: 0 }).
 *
 * @typedef  {object} InitialPosition
 * @property {string} x               - The initial position on the x-axis.
 * @property {string} y               - The initial position on the y-axis.
 */

/**
 * The options for the `useDraggableModal` custom hook.
 *
 * @typedef  {object}          DraggableModalOptions
 * @property {InitialPosition} initialPosition       - The initial position of the modal (default: { x: 0, y: 0 }).
 * @property {string}          className             - The CSS class name for the modal.
 * @property {string}          id                    - The ID attribute for the modal.
 */

/**
 * The function to handle the mouse down event.
 *
 *
 * @typedef {(event: React.MouseEvent<HTMLElement, MouseEvent>) => void} HandleMouseDown
 */

/**
 * The function to open the draggable `Modal` component.
 *
 * @typedef {() => void} OpenModal
 */

/**
 * The function to close the draggable `Modal` component.
 *
 * @typedef {() => void} CloseModal
 */

/**
 * The function to toggle the state of the draggable `Modal` component
 * between `open` and `closed`.
 *
 * @typedef {() => void} ToggleModal
 */

/**
 * And object with The draggable `Modal` object and functions to manage it's state
 *
 * @typedef  {object}          DraggableModalHook
 * @property {React.Component} Modal              - The React component for rendering the modal portal.
 * @property {HandleMouseDown} handleMouseDown    - The function to handle the mouse down event.
 * @property {OpenModal}       openModal          - The function to open the modal.
 * @property {CloseModal}      closeModal         - The function to close the modal.
 * @property {ToggleModal}     toggleModal        - The function to toggle the state of the draggable `Modal` component between `open` and `closed`.
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

/**
 * Checks if the given coordinates are within the boundaries of a target.
 *
 * @param {number} x - The x-coordinate to check.
 * @param {number} y - The y-coordinate to check.
 * @param {HTMLElement} target - The target element to check boundaries against.
 * @returns {Boundaries} - An object containing information about the coordinate boundaries.
 */
const checkBoundaries = (x, y, target) => {
  const { x: boundX, y: boundY, height, width } = target.getBoundingClientRect();
  const limitHeight = window.innerHeight - height;
  const limitWidth = window.innerWidth - width;

  const edges = {
    x: {
      start: boundX + x > 0,
      end: boundX + x < limitWidth,
    },
    y: {
      start: boundY + y > 0,
      end: boundY + y < limitHeight,
    },
  };

  return edges;
};

// ━━ CUSTOM HOOK ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Custom React hook for managing a draggable `Modal` component.
 *
 * @param {DraggableModalOptions} options - The options for the draggable modal.
 * @returns {DraggableModalHook} - The draggable Modal object.
 * @example const { Portal, handleMouseDown, toggleModal, closeModal } = useDraggableModal(options);
 */
const useDraggableModal = ({ initialPosition = { x: 0, y: 0 }, className, id }) => {
  const [visibility, setVisibility] = useState(false);
  const [position, setPosition] = useState(initialPosition);
  const rootElement = document.createElement('div');
  const modalRef = useRef(rootElement);
  modalRef.current.setAttribute('id', id);
  modalRef.current.setAttribute('class', className);
  const startXRef = useRef(null);
  const startYRef = useRef(null);

  useEffect(() => {
    const element = modalRef.current;
    if (visibility) {
      appendChildToBody(element);
      element.style.left = position.x;
      element.style.top = position.y;
    }
    return () => {
      element.remove();
    };
  }, [visibility, position.x, position.y]);

  /**
   * Handle the mouse move event.
   *
   * @param {MouseEvent} event - The mouse move event.
   */
  const handleMouseMove = useCallback(event => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;
    const currentX = mouseX - startXRef.current;
    const currentY = mouseY - startYRef.current;
    const positionX = modalRef.current.offsetLeft + currentX;
    const positionY = modalRef.current.offsetTop + currentY;

    const edges = checkBoundaries(currentX, currentY, modalRef.current);

    if (edges.x.start && edges.x.end) {
      setPosition(previous => ({ ...previous, x: `${positionX}px` }));
    }

    if (edges.y.start && edges.y.end) {
      setPosition(previous => ({ ...previous, y: `${positionY}px` }));
    }
    startXRef.current = event.clientX;
    startYRef.current = event.clientY;
  }, []);

  /**
   * Handle the mouse up event.
   */
  const handleMouseUp = useCallback(() => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  }, [handleMouseMove]);

  /**
   * Handle the mouse down event.
   *
   * @param {MouseEvent} event - The mouse down event.
   */
  const handleMouseDown = useCallback(
    event => {
      startXRef.current = event.clientX;
      startYRef.current = event.clientY;

      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    },
    [handleMouseMove, handleMouseUp],
  );

  /**
   * The function to open the draggable `Modal` component.
   */
  const openModal = () => {
    setVisibility(true);
  };

  /**
   * The function to close the draggable `Modal` component.
   */
  const closeModal = () => {
    setVisibility(false);
    setPosition(initialPosition);
  };

  /**
   * The function to toggle the state of the draggable `Modal` component
   * between `open` and `closed`.
   */
  const toggleModal = () => {
    setVisibility(!visibility);
    if (!visibility) {
      setPosition(initialPosition);
    }
  };

  /**
   * The React component for rendering the modal portal.
   *
   * @param {object} props - The component properties.
   * @param {React.ReactNode} props.children - The children to render within the portal.
   * @returns {React.Component| null} - The rendered modal portal.
   */
  const Modal = ({ children }) => (
    <Portal visibility={visibility} target={modalRef.current}>
      {children}
    </Portal>
  );

  Modal.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return {
    Modal,
    handleMouseDown,
    openModal,
    closeModal,
    toggleModal,
  };
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default useDraggableModal;
