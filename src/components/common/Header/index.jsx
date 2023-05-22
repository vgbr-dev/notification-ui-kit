/**
 * @file Contains `Header` React components.
 * @module Header
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Header` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => (
  <header id="header-wrapper" className="app-header">
    <h1 className="app-header__title">Toats</h1>
    <h2 className="app-header__subtitle">
      & <span className="app-header__subtitle--accent">Modals</span>
    </h2>
    <h4 className="app-header__description">
      A code repository that stores components for toasts, popups, and modals for potential future
      use in web development projects.
    </h4>
  </header>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
