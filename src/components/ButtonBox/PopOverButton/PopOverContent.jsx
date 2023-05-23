/**
 * @file Contains `PopOverContent` React components.
 * @module PopOverContent
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `PopOverContent` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const PopOverContent = () => (
  <section className="popover-container__content">
    <h1>Hi! 😊</h1>
    <p>I am a Pop-up Modal, click outside of me if you want to close me</p>
  </section>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default PopOverContent;
