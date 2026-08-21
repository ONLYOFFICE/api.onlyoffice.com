# Components

UI components for building plugin interfaces — dialogs, buttons, inputs, and other visual elements. Compose them with `IModalDialog`, `IBox`, or other layout containers; overlays such as dialogs, toasts and selectors are displayed by returning an `IMessage` with the matching [Actions](../../enums/Actions.md) value from an event handler.

## Overview

The following components are available:

| Interface | Description |
| --- | --- |
| [`Component`](Component.md) | A component that is used to add components into Box. |
| [`IBox`](IBox.md) | A container that lays out its contents in one direction. |
| [`IButton`](IButton.md) | A component that is used for an action on a page. |
| [`ICheckbox`](ICheckbox.md) | Custom checkbox. |
| [`IComboBox`](IComboBox.md) | Custom combo box input. |
| [`ICreateDialog`](ICreateDialog.md) | Modal dialog for creating certain item (file, folder, etc.). |
| [`IFloatingOperationsButton`](IFloatingOperationsButton.md) | Configuration for the floating operations button. |
| [`IFrame`](IFrame.md) | A component that is used to embed a third-party website into a modal window or the settings page. |
| [`IIconButton`](IIconButton.md) | A component that displays an interactive icon button with hover and click states. |
| [`IImage`](IImage.md) | A component that is used to embed an image not from the assets folder into a modal window or the settings page. |
| [`IInput`](IInput.md) | Input field for single-line strings. |
| [`ILabel`](ILabel.md) | Field name in the form. |
| [`ILink`](ILink.md) | Defines the link component properties. |
| [`IMediaViewer`](IMediaViewer.md) | Properties for the Media Viewer component that allows plugins to display custom content. |
| [`IModalDialog`](IModalDialog.md) | Modal dialog. |
| [`ISkeleton`](ISkeleton.md) | A component that is used to hide components during uploading. |
| [`IText`](IText.md) | Plain text. |
| [`ITextArea`](ITextArea.md) | Custom textarea. |
| [`IToast`](IToast.md) | A brief notification that appears on the screen. |
| [`IToggleButton`](IToggleButton.md) | Custom toggle button input for binary state controls. |
| [`TSelector`](Selector.md) | Provides selector components for choosing files, rooms, users, and groups within DocSpace. |