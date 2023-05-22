/**
 * @file Contains `ButtonContainer` React components.
 * @module ButtonContainer
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `ButtonContainer` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const ButtonContainer = () => (
  <div className="button-container">
    <button type="button" className="button-container__button button-container__button--success">
      Exito
    </button>
    <button type="button" className="button-container__button button-container__button--error">
      Error
    </button>
    <button
      type="button"
      className="button-container__button button-container__button--information"
    >
      Information
    </button>
    <button type="button" className="button-container__button button-container__button--warning">
      Warning
    </button>
    <button type="button" className="button-container__button button-container__button--default">
      Pop-up
    </button>
    <button type="button" className="button-container__button button-container__button--default">
      Modal
    </button>
  </div>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default ButtonContainer;
