/**
 * @file Contains `PopUpContainer` React components.
 * @module PopUpContainer
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `PopUpContainer` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopUpContainer = () => (
  <section className="popup-container__content">
    <h1>Hi! 😊</h1>
    <p>I am a Pop-up Modal, click outside of me if you want to close me</p>
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopUpContainer;
