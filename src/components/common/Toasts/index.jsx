/**
 * @file Contains `Toasts` React component.
 * @module Toasts
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React, { useEffect } from 'react';
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import usePortal from '../../../hooks/usePortal';

// » IMPORT COMPONENTS
import Toast from '../Toast';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
const Toasts = ({ toasts, closeToast }) => {
  const { Portal, openPortal, closePortal } = usePortal({
    id: 'toasts-container',
    className: 'toasts',
  });

  useEffect(() => {
    if (toasts.length < 1) {
      closePortal();
    } else {
      openPortal();
    }
  }, [closePortal, openPortal, toasts.length]);

  return (
    <Portal>
      {React.Children.toArray(toasts.map(items => <Toast toast={items} closeToast={closeToast} />))}
    </Portal>
  );
};

Toasts.propTypes = {
  toasts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      autoClose: PropTypes.bool.isRequired,
      description: PropTypes.string.isRequired,
    }),
  ).isRequired,
  closeToast: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Toasts;
