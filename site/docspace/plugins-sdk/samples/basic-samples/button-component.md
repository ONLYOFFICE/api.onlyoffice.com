# Button Component

This guide demonstrates how to render and configure a [Button](../../usage-sdk/coding-plugin/plugin-components/button) component using the DocSpace Plugin SDK.

## Overview

- Component: [Components.button](../../usage-sdk/coding-plugin/plugin-components/button)
- Interface: IButton
- Wrapper: ButtonGroup
- Purpose: Renders an interactive button with optional action, size, and state options

## Example Output

A button labeled "Save" will be rendered inside a flex box. Clicking it logs a message to the browser console.

<details>
  <summary>Full Example</summary>

``` ts
import {
  Components,
  IButton,
  ButtonGroup,
  ButtonSize,
  IBox
} from "@onlyoffice/docspace-plugin-sdk";

// Define button behavior and appearance
const ButtonProps: IButton = {
  // Text shown on the button
  label: "Save",

  // Function to run on click
  onClick: () => {
    console.log("Save button clicked");
  },

  // Size options: extraSmall, small, normal, medium
  size: ButtonSize.normal,

  // Style: primary button (blue)
  primary: true,

  // Button width remains natural
  scale: false,

  // Optional loading state (disabled)
  isLoading: false,

  // Button is enabled
  isDisabled: false,

  // Optional behavior on click (not used)
  withLoadingAfterClick: false,
  disableWhileRequestRunning: false
};

// Wrap button into a component group
const ButtonComponent: ButtonGroup = {
  component: Components.button,
  props: ButtonProps,
  contextName: "acceptButton"
};

// Display inside a flex box
const demoBox: IBox = {
  displayProp: "flex",
  flexDirection: "column",
  marginProp: "16 0 0 0",
  children: [
    ButtonComponent
  ]
};
```

</details>

| **Property**                 | **Type**     | **Description**                                                            |
| ---------------------------- | ------------ | -------------------------------------------------------------------------- |
|  label                       | string       | Text displayed on the button                                               |
|  onClick                     | function     | Function executed when the button is clicked                               |
|  size                        | ButtonSize   | Button size (`"normal"` in this example)                                   |
|  primary                     | boolean      | Applies primary color styling (usually blue)                               |
|  scale                       | boolean      | If `true`, button stretches to fill container; `false` keeps natural width |
|  isLoading                   | boolean      | Shows loading indicator if `true`                                          |
|  isDisabled                  | boolean      | Disables the button when `true`                                            |
|  withLoadingAfterClick       | boolean      | If `true`, shows loading spinner after clicking (useful for async actions) |
|  disableWhileRequestRunning  | boolean      | Prevents re-click while async operation is in progress                     |

