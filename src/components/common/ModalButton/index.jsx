/**
 * @file Contains ` ModalButton` React components.
 * @module  ModalButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import useDraggableModal from '../../../hooks/useDraggableModal';

// » IMPORT COMPONENTS
import TitleBar from '../TitleBar';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The ` ModalButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ModalButton = ({ children }) => {
  const { Portal, handleMouseDown, toggleModal, closeModal } = useDraggableModal({
    id: 'popup',
    className: 'modal-container',
    initialPosition: { x: '15%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <button
        type="button"
        className="button-container__button button-container__button--default"
        onClick={toggleModal}
      >
        Modal
      </button>
      <Portal>
        <TitleBar title="Modal" close={closeModal} onMouseDown={handleMouseDown} />
        <section className="modal-container__content">{children}</section>
      </Portal>
    </React.Fragment>
  );
};

ModalButton.propTypes = {
  children: PropTypes.node.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ModalButton;
