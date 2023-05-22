/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `MainLayout` React component.
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { Outlet } from 'react-router-dom';

// » IMPORT CONSTANTS
import tabItems from './tabs';

// » IMPORT COMPONENTS
import Tabs from '../common/Tabs';
import TitleBar from '../common/TitleBar';
import Footer from '../common/Footer';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `MainLayout` component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const MainLayout = () => (
  <React.Fragment key="MainLayout">
    <TitleBar />
    <Tabs tabItems={tabItems} />
    <main id="main-wrapper">
      <Outlet />
    </main>
    <Footer />
  </React.Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default MainLayout;
