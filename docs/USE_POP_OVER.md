# usePopOver

Custom React hook for managing a `PopOver` component.

## Table of Contents

- Type Definitions
- Functions
- Custom Hook
- Usage

## Type Definitions

### Position

The position of the Pop-over (default: { x: 0, y: 0 }).

| Parameter | Type     | Description                 |
|-----------|----------|-----------------------------|
| x         | `string` | The position on the x-axis. |
| y         | `string` | The position on the y-axis. |

### PopOverOptions

The options for the `usePopOver` hook.

| Parameter           | Type       | Description                                                                            |
|---------------------|------------|----------------------------------------------------------------------------------------|
| id                  | `string`   | The ID attribute for the Pop-over.                                                     |
| className           | `string`   | The CSS class name for the Pop-over.                                                   |
| position            | `Position` | The position of the Pop-over (default: { x: 0, y: 0 }).                                |
| closeOnClickOutside | `boolean`  | Flag to control if the Pop-over should be closed when clicked outside (default: true). |

### HandleMouseDown

The function to handle the mouse down event.

| Parameter | Type                                        | Description                  |
|-----------|---------------------------------------------|------------------------------|
| event     | `React.MouseEvent<HTMLElement, MouseEvent>` | The mouse down event object. |

### OpenPopOver

The function to open the `PopOver` component.

### ClosePopOver

The function to close the `PopOver` component.

### TogglePopOver

The function to toggle the state of `PopOver` component between `open` and `closed`.

### PopOverHook

An object containing Pop-over component-related functions and state.

| Parameter     | Type              | Description                                             |
|---------------|-------------------|---------------------------------------------------------|
| PopOver       | `React.Component` | The React component for rendering the Pop-over portal.  |
| openPopOver   | `OpenPopOver`     | The function to open the `PopOver` component.           |
| closePopOver  | `ClosePopOver`    | The function to close the `PopOver` component.          |
| togglePopOver | `TogglePopOver`   | The function to toggle `PopOver` component visibility.  |

## `usePopOver(PopOverOptions) => PopOverHook`

Custom React hook for managing a Pop-over component.

| Parameter | Type             | Description                        |
|-----------|------------------|------------------------------------|
| options   | `PopOverOptions` | The options for the Pop-over hook. |

Returns: PopOverHook - An object containing Pop-over component-related functions and state.

### Usage

```jsx

import usePopOver from './usePopOver';

const MyComponent = () => {
  const { PopOver, togglePopOver, closePopOver } = usePopOver({
    id: 'my-popover',
    className: 'popover',
    closeOnClickOutside: true,
    position: { x: '10px', y: '10px' },
  });

  const handleToggle = () => {
    togglePopOver();
  };

  const handleClose = () => {
    closePopOver();
  };

  return (
    <div>
      <button onClick={handleToggle}>Toggle Popover</button>
      <button onClick={handleClose}>Close Popover</button>
      <PopOver>
        <div>Popover Content</div>
      </PopOver>
    </div>
  );
};
```
