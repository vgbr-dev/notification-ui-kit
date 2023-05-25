# useToasts

The `useToasts` custom hook for managing toasts notification system.

Version: 1.3.0

## Table of Contents

- Type Definitions
- Functions
- Custom Hook
- Usage

## Type Definitions

### Toast

| Property    | Type    | Description                                                   |
|-------------|---------|---------------------------------------------------------------|
| id          | string  | The unique ID of the toast.                                   |
| type        | string  | The type of the toast (success, error, information, warning). |
| title       | string  | The title of the toast.                                       |
| description | string  | The description of the toast.                                 |
| autoClose   | boolean | Determines if the toast should automatically close.           |

### Toasts

Represents an array of toasts.

### closeToast

Function to close a toast notification.

| Parameter | Type   | Description                   |
|-----------|--------|-------------------------------|
| id        | number | The ID of the toast to close. |

### AddToastOptions

The options to create toast notifications.

| Property    | Type    | Description                                                   |
|-------------|---------|---------------------------------------------------------------|
| type        | string  | The type of the toast (success, error, information, warning). |
| title       | string  | The title of the toast.                                       |
| description | string  | The description of the toast.                                 |
| autoClose   | boolean | Determines if the toast should automatically close.           |

### addToast

Function to add a new toast notification.

| Parameter | Type            | Description                    |
|-----------|-----------------|--------------------------------|
| toast     | AddToastOptions | The options for the new toast. |

### ToastsHook

Represents the useToasts custom hook for managing toasts.

| Parameter | Type            | Description                    |
|-----------|-----------------|--------------------------------|
| toast     | AddToastOptions | The options for the new toast. |

## Custom Hook

### `useToasts() => ToastsHook`

The `useToasts` custom hook for managing toasts notification system.

Returns: ToastsHook - An object with `toastsContainer` and `addToast` functions to manage toasts.

### Usage

```jsx

import useToasts from './useToasts';

const MyComponent = () => {
  const { toastsContainer, addToast } = useToasts();

  const handleClick = () => {
    addToast({
      type: 'success',
      title: 'Success',
      description: 'This is a success toast!',
      autoClose: true,
    });
  };

  return (
    <div>
      <button onClick={handleClick}>Show Toast</button>
      {toastsContainer}
    </div>
  );
};
```
