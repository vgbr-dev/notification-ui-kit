/**
 * @file Contains ` TitleBar` React components.
 * @module  TitleBar
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TitleBar` component.
 *
 * @component
 * @param {object} props - The Component properties.
 * @param {string} props.title - The title that will be displayed in the Title bar.
 * @param {string} props.close - Function to close the modal window.
 * @param {string} props.onMouseDown - Function to handle the `onMouseDown` event.
 * @returns {JSX.Element} The `TitleBar` components.
 */
const TitleBar = ({ title, close, onMouseDown }) => (
  <nav role="presentation" className="titlebar titlebar--modal" onMouseDown={onMouseDown}>
    <div className="titlebar__app">
      <span className="titlebar__app-icon">&#xE700;</span>
      <span className="titlebar__app-name">{title}</span>
    </div>
    <div className="titlebar__buttons">
      <button
        className="titlebar__button titlebar__button--close"
        type="button"
        title="close"
        onClick={close}
      >
        &#xE8BB;
      </button>
    </div>
  </nav>
);

TitleBar.propTypes = {
  title: PropTypes.string.isRequired,
  close: PropTypes.func.isRequired,
  onMouseDown: PropTypes.func.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
