/**
 * @file Contains `Toast` React component.
 * @module Toast
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// » IMPORT CUSTOM HOOKS
import useToast from '../../../hooks/useToast';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Toast` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Toast = ({ toast, closeToast }) => {
  const { toastClass, icon, title, description, onClick } = useToast(toast, closeToast);

  return (
    <div className={toastClass}>
      <div className="toast__content">
        <div className="toast__icon">{icon}</div>
        <div className="toast__text">
          <p className="toast__title">{title}</p>
          <p className="toast__description">{description}</p>
        </div>
      </div>
      <div className="toast__control">
        <button type="button" className="toast__close-button" onClick={onClick}>
          close
        </button>
      </div>
    </div>
  );
};

Toast.propTypes = {
  toast: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    autoClose: PropTypes.bool.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  closeToast: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Toast;
