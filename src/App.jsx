/**
 * @file Entry point of the React application.
 * @module App
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
// » IMPORT HOOKS

// » IMPORT COMPONENTS
import Header from './components/common/Header';
import Main from './components/common/Main';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `App` component, the main component where the entire `react` application
 * is managed.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => (
  <React.Fragment key="App">
    <Header />
    <Main />
  </React.Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default App;
