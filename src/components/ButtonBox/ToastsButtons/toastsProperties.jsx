/**
 * @file The `ToastProperties` module providing predefined toast notifications.
 * @module toastProperties
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Represents the properties of toast notifications.
 *
 * @typedef  {Object}  Toast
 * @property {string}  type        - The type of the toast (success, error, information, warning).
 * @property {string}  title       - The title of the toast.
 * @property {string}  description - The description of the toast.
 * @property {boolean} autoClose   - Determines if the toast should automatically close.
 */

/**
 * Represents the toast available.
 *
 * @typedef  {Object} ToastProperties
 * @property {Toast}  SUCCESS         - Properties for the success button.
 * @property {Toast}  ERROR           - Properties for the error button.
 * @property {Toast}  INFO            - Properties for the info button.
 * @property {Toast}  WARNING         - Properties for the warning button.
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Module providing predefined toast buttons.
 *
 * @type {ToastProperties}
 */
const TOASTS_PROPERTIES = {
  ERROR: {
    type: 'error',
    title: 'Error',
    description: 'Hubo un error',
    autoClose: true,
  },
  WARNING: {
    type: 'warning',
    title: 'Warning',
    description: 'Ten cuidado',
    autoClose: true,
  },
  SUCCESS: {
    type: 'success',
    title: 'Success!',
    description: 'La operación fue exitosa.',
    autoClose: false,
  },

  INFO: {
    type: 'information',
    title: 'Information',
    description: 'Esta es una notificación de información.',
    autoClose: false,
  },
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TOASTS_PROPERTIES;
