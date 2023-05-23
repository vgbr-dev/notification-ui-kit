/**
 * @file Contains `Portal` React components.
 * @module Portal
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Portal component for rendering children into a target element outside the
 * component's hierarchy.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {React.ReactNode} props.children - The children to render within the portal.
 * @param {boolean} props.visibility - Indicates whether the portal should be visible or hidden.
 * @param {HTMLElement} props.target - The target element where the portal should be rendered.
 *
 * @returns {React.ReactPortal|null} - The rendered portal or null if the visibility is false or the target is not available.
 */
const Portal = ({ children, visibility, target }) => {
  const condition = visibility && target !== null;
  return condition ? ReactDOM.createPortal(children, target) : null;
};

Portal.propTypes = {
  children: PropTypes.node.isRequired,
  visibility: PropTypes.bool.isRequired,
  target: PropTypes.instanceOf(Element),
};

Portal.defaultProps = {
  target: null,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Portal;
