/**
 * @author Victor Giovanni Beltrán Rodríguez
 * @file Contains `tabItems` React component.
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * A `TabItem` object.
 *
 * @typedef   {Object}  TabItem
 * @property  {string}  to      - The URL path for the tab.
 * @property  {string}  text    - The text to display on the tab.
 */

/**
 * An array of tab items.
 *
 * @typedef   {Array<TabItem>}  TabItems
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An array of default tab items.
 *
 * @type {TabItems}
 */
const tabItems = [
  { to: '/', text: 'Inicio' },
  { to: '/create', text: 'Crear' },
  { to: '/evaluate', text: 'Examina' },
  { to: '/list', text: 'Lista' },
];

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default tabItems;
