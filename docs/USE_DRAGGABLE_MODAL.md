# useDraggableModal

Manage useDraggableModal custom React Hook.

## Table of Contents

- Type Definitions
- Functions
- Custom Hook
- Usage

## Type Definitions

### InitialPosition

The initial position of the modal (default: { x: 0, y: 0 }).

| Property | Type   | Description                         |
|----------|--------|-------------------------------------|
| x        | string | The initial position on the x-axis. |
| y        | string | The initial position on the y-axis. |

### DraggableModalOptions

The options for the draggable modal.

| Property        | Type            | Description                                                  |
|-----------------|-----------------|--------------------------------------------------------------|
| initialPosition | InitialPosition | The initial position of the modal (default: { x: 0, y: 0 }). |
| className       | string          | The CSS class name for the modal.                            |
| id              | string          | The ID attribute for the modal.                              |

## HandleMouseDown

The function to handle the mouse down event.

| Property | Type                                            | Description           | Parameter | Type | Description |
|----------|-------------------------------------------------|-----------------------|-----------|------|-------------|
| event    | React.MouseEvent&lt;HTMLElement, MouseEvent&gt; | The mouse down event. |

## `OpenModal() => void`

The function to open the draggable `Modal` component.

## `CloseModal() => void`

The function to close the draggable `Modal` component.

## `ToggleModal() => void`

The function to toggle the state of the draggable `Modal` component between `open` and `closed`.

## `DraggableModalHook`

And object with The draggable `Modal` object and functions to manage it's state

| Property        | Type            | Description                                         |
|-----------------|-----------------|-----------------------------------------------------|
| Modal           | React.Component | The React component for rendering the modal portal. |
| handleMouseDown | HandleMouseDown | The function to handle the mouse down event.        |
| openModal       | OpenModal       | The function to open the modal.                     |
| closeModal      | CloseModal      | The function to close the modal.                    |
| toggleModal     | ToggleModal     | The function to toggle modal visibility.            |

## Custom Hook

### useDraggableModal(DraggableModalOptions) => DraggableModalHook

Custom React hook for managing a draggable modal.

| Parameter | Type                  | Description                          |
|-----------|-----------------------|--------------------------------------|
| options   | DraggableModalOptions | The options for the draggable modal. |

Returns: `DraggableModalHook` - And object with The draggable `Modal` object and functions to manage it's state.

### Usage

```jsx
import useDraggableModal from 'path/to/hooks/useDraggableModal';
import Button from 'path/to/components/Button';
import TitleBar from 'path/to/components/TitleBar';


const ModalButton = () => {
  const { Modal, handleMouseDown, toggleModal, closeModal } = useDraggableModal({
    id: 'modal',
    className: 'modal-container',
    initialPosition: { x: '15%', y: '60%' },
  });

  return (
    <React.Fragment key="Modal">
      <Button modifier="default" text="Modal" onClick={toggleModal} />
      <Modal>
        <TitleBar title="Movable Modal" close={close} onMouseDown={onMouseDown} />
        <section className="modal-container__content">
          <h1>Hi! 😊</h1>
          <p>I am a Movable Modal</p>
        </section>
      </Modal>
    </React.Fragment>
  );
};
```

This hook provides functionality for managing a draggable modal in React. It returns a Modal component that can be used to render the modal portal. The handleMouseDown function should be assigned to the onMouseDown event of a draggable area within the modal. The toggleModal and closeModal functions can be used to control the visibility of the modal. The options parameter accepts an object with the following properties:

- initialPosition: The initial position of the modal. It is an object with x and y properties representing the initial positions on the x-axis and y-axis, respectively.
- className: The CSS class name for the modal.
- id: The ID attribute for the modal.

The example above demonstrates the usage of the useDraggableModal hook within a component. The Modal component should be rendered within the component's JSX to display the modal portal. The handleMouseDown function should be assigned to the onMouseDown event of a draggable area within the modal, allowing the modal to be dragged. The toggleModal and closeModal functions can be used to control the visibility of the modal.
