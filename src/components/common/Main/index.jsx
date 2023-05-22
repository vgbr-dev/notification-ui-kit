/**
 * @file Contains `Main` React components.
 * @module Main
 */

// » IMPORT COMPONENTS
import ButtonContainer from '../ButtonContainer';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Main` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Main = () => (
  <main id="main-wrapper">
    <ButtonContainer />
  </main>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Main;
