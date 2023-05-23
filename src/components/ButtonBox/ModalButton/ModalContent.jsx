/**
 * @file Contains `ModalContent` React components.
 * @module ModalContent
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT COMPONENTS
import TitleBar from './TitleBar';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ModalContent` component.
 *
 * @component
 * @param {object} props - The Component properties.
 * @param {Function} props.close - Function to close the modal window.
 * @param {Function} props.onMouseDown - Function to handle the `onMouseDown` event.
 * @returns {JSX.Element} The rendered component.
 */
const ModalContent = ({ close, onMouseDown }) => (
  <React.Fragment key="ModalContent">
    <TitleBar title="Movable Modal" close={close} onMouseDown={onMouseDown} />
    <section className="modal-container__content">
      <h1>Hi! 😊</h1>
      <p>I am a Movable Modal</p>
    </section>
  </React.Fragment>
);

ModalContent.propTypes = {
  close: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ModalContent;
