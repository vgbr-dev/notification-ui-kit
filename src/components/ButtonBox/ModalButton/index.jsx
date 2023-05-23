/**
 * @file Contains `ModalButton` React components.
 * @module ModalButton
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT CUSTOM HOOKS
import useDraggableModal from '../../../hooks/useDraggableModal';

// » IMPORT COMPONENTS
import Button from '../../common/Button';
import ModalContent from './ModalContent';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ModalButton` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ModalButton = () => {
  const { Modal, handleMouseDown, toggleModal, closeModal } = useDraggableModal({
    id: 'modal',
    className: 'modal-container',
    initialPosition: { x: '15%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <Button modifier="default" text="Modal" onClick={toggleModal} />
      <Modal>
        <ModalContent title="Movable Modal" close={closeModal} onMouseDown={handleMouseDown} />
      </Modal>
    </React.Fragment>
  );
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ModalButton;
