/**
 * @file Contains `Button` React components.
 * @module Button
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Button` component.
 *
 * @component
 * @param {Object} props - The component properties.
 * @param {React.ReactNode} props.modifier - The modifier class name for the button.
 * @param {boolean} props.text - The text content of the button.
 * @param {Function} props.handleClick - The click event handler for the button.
 * @returns {JSX.Element} TODO ADD DESCRIPTION.
 */
const Button = ({ modifier, text, handleClick }) => (
  <button
    type="button"
    className={`button-container__button button-container__button--${modifier}`}
    onClick={handleClick}
  >
    {text}
  </button>
);

Button.propTypes = {
  modifier: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  handleClick: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Button;
