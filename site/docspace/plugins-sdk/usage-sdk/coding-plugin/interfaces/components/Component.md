# Component

```ts
type Component = 
  | BoxGroup
  | ButtonGroup
  | CheckboxGroup
  | ComboBoxGroup
  | IFrameGroup
  | ImageGroup
  | InputGroup
  | LabelGroup
  | SkeletonGroup
  | TextGroup
  | TextAreaGroup
  | ToggleButtonGroup
  | IconButtonGroup
  | LinkGroup;
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L104)

A component that is used to add components into Box.
Only components that are embedded into DOM can be wrapped (toast, modal dialog, etc. cannot be wrapped).

## Example

```typescript
import {
  IBox,
  IText,
  IButton,
  ButtonSize,
  Components,
  Component,
  Actions,
  IToast,
  ToastType,
} from "@onlyoffice/docspace-plugin-sdk";

const title: IText = {
  text: "Plugin Settings",
  fontSize: "18px",
  fontWeight: 600,
};

const button: IButton = {
  label: "Save Changes",
  onClick: () => {
    return {
      actions: [Actions.showToast],
      toastProps: [{
        title: "Success",
        type: ToastType.success,
      }]
    };
  },
  size: ButtonSize.normal,
  primary: true
};

// Create a settings panel with text and button
const container: IBox = {
  paddingProp: "16px",
  backgroundProp: "#f8f9f9",
  children: [
    {
      component: Components.text,
      props: title
    },
    {
      component: Components.button,
      props: button
    }
  ]
};

// Combine components into a layout
const settingsPanel: Component = {
  component: Components.box,
  props: container
};
```

***

## BoxGroup

```ts
type BoxGroup = {
  component: box;
  props: IBox;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L149)

Defines the box component.

### Example

```typescript
import { IBox, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const box: IBox = {
  widthProp: "200px",
  paddingProp: "16px",
  displayProp: "flex",
  flexDirection: "column",
  alignItems: "center",
  borderProp: {
    color: "#333333",
    radius: "8px",
    style: "solid",
    width: "1px"
  },
  backgroundProp: "#f8f9f9"
};

const boxGroup: Component = {
  component: Components.box,
  props: box,
  contextName: "container"
};
```

### Properties

```mdx-code-block
import APITable from '@site/src/components/APITable/APITable';

<APITable name="BoxGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`box`](../../enums/Components.md#box) | Defines the "box" component type |
| `props` | [`IBox`](IBox.md) | Defines the box component properties |
| `contextName?` | `string` | Defines the box component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## ButtonGroup

```ts
type ButtonGroup = {
  component: button;
  props: IButton;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L180)

Defines the button component.

### Example

```typescript
import { IButton, Components, Component, ButtonSize } from "@onlyoffice/docspace-plugin-sdk";

const button: IButton = {
  size: ButtonSize.normal,
  label: "Click me!",
  onClick: () => {
    console.log("Button clicked!");
  },
};

const buttonGroup: Component = {
  component: Components.button,
  props: button,
  contextName: "button",
};
```

### Properties

```mdx-code-block
<APITable name="ButtonGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`button`](../../enums/Components.md#button) | Defines the "button" component type |
| `props` | [`IButton`](IButton.md) | Defines the button component properties |
| `contextName?` | `string` | Defines the button component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## CheckboxGroup

```ts
type CheckboxGroup = {
  component: checkbox;
  props: ICheckbox;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L223)

Defines the checkbox component.

### Example

```typescript
import { ICheckbox, Components, Component, Actions } from "@onlyoffice/docspace-plugin-sdk";

const checkbox: ICheckbox = {
  isChecked: false,
  label: "Enable notifications",
  onChange: () => {
    return {
      actions: [Actions.updateProps],
      newProps: {
        isChecked: !checkbox.isChecked
      }
    };
  },
  truncate: false,
  tabIndex: 1,
  hasError: false,
  name: "notifications",
  value: "enabled",
  isDisabled: false,
  title: "Notification preferences"
};

const checkboxGroup: Component = {
  component: Components.checkbox,
  props: checkbox,
  contextName: "notificationToggle"
};
```

### Properties

```mdx-code-block
<APITable name="CheckboxGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`checkbox`](../../enums/Components.md#checkbox) | Defines the "checkbox" component type |
| `props` | [`ICheckbox`](ICheckbox.md) | Defines the checkbox component properties |
| `contextName?` | `string` | Defines the checkbox component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## ComboBoxGroup

```ts
type ComboBoxGroup = {
  component: comboBox;
  props: IComboBox;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L261)

Defines the combo box component.

### Example

```typescript
import { IComboBox, IComboBoxItem, Components, Component, Actions } from "@onlyoffice/docspace-plugin-sdk";

const comboBox: IComboBox = {
  options: [
    { key: "light", label: "Light Theme", icon: "theme-light.svg" },
    { key: "dark", label: "Dark Theme", icon: "theme-dark.svg" },
    { key: "system", label: "System Theme", icon: "theme-auto.svg" }
  ],
  selectedOption: { key: "light", label: "Light Theme", icon: "theme-light.svg" },
  onSelect: (item) => {},
  scaled: true,
  directionX: "right",
  directionY: "bottom",
  displayType: "default",
  modernView: true
};

const comboBoxGroup: Component = {
  component: Components.comboBox,
  props: comboBox,
  contextName: "themeSelector"
};
```

### Properties

```mdx-code-block
<APITable name="ComboBoxGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`comboBox`](../../enums/Components.md#combobox) | Defines the "comboBox" component type |
| `props` | [`IComboBox`](IComboBox.md) | Defines the combo box component properties |
| `contextName?` | `string` | Defines the combo box component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## IFrameGroup

```ts
type IFrameGroup = {
  component: iFrame;
  props: IFrame;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L298)

Defines the iframe component.

### Example

```typescript
import { IFrame, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const iframe: IFrame = {
  src: "https://example.com/embedded-content",
  width: "100%",
  height: "500px",
  name: "content-frame",
  sandbox: "allow-scripts allow-same-origin",
  id: "content-iframe",
  style: {
    border: "1px solid #eceef1",
    borderRadius: "4px",
    backgroundColor: "#ffffff"
  }
};

const iframeGroup: Component = {
  component: Components.iFrame,
  props: iframe,
  contextName: "embeddedContent"
};
```

### Properties

```mdx-code-block
<APITable name="IFrameGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`iFrame`](../../enums/Components.md#iframe) | Defines the "iFrame" component type |
| `props` | [`IFrame`](IFrame.md) | Defines the iFrame component properties |
| `contextName?` | `string` | Defines the iFrame component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## ImageGroup

```ts
type ImageGroup = {
  component: img;
  props: IImage;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L335)

Defines the image component.

### Example

```typescript
import { IImage, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const image: IImage = {
  src: "https://example.com/plugin-banner.png",
  alt: "Plugin Banner",
  width: "100%",
  height: "auto",
  name: "plugin-banner",
  id: "banner-image",
  style: {
    borderRadius: "8px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.1)",
    maxWidth: "600px"
  }
};

const imageGroup: Component = {
  component: Components.img,
  props: image,
  contextName: "bannerImage"
};
```

### Properties

```mdx-code-block
<APITable name="ImageGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`img`](../../enums/Components.md#img) | Defines the "img" component type |
| `props` | [`IImage`](IImage.md) | Defines the image component properties |
| `contextName?` | `string` | Defines the image component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## InputGroup

```ts
type InputGroup = {
  component: input;
  props: IInput;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L373)

Defines the input component.

### Example

```typescript
import { IInput, Components, Component, Actions, InputSize } from "@onlyoffice/docspace-plugin-sdk";

const input: IInput = {
  value: "",
  onChange: (value) => {},
  placeholder: "Enter text...",
  size: InputSize.middle,
  name: "search-input",
  isAutoFocused: true,
  iconName: "search",
  iconSize: 16,
  scale: true,
  onIconClick: () => {
    console.log("Search icon clicked");
  }
};

const inputGroup: Component = {
  component: Components.input,
  props: input,
  contextName: "searchInput"
};
```

### Properties

```mdx-code-block
<APITable name="InputGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`input`](../../enums/Components.md#input) | Defines the "input" component type |
| `props` | [`IInput`](IInput.md) | Defines the input component properties |
| `contextName?` | `string` | Defines the input component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## LabelGroup

```ts
type LabelGroup = {
  component: label;
  props: ILabel;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L406)

Defines the label component.

### Example

```typescript
import { ILabel, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const label: ILabel = {
  text: "Plugin Settings",
  isRequired: true,
  error: false,
  title: "Configure plugin settings",
  htmlFor: "settings-form",
  display: "block",
  truncate: true
};

const labelGroup: Component = {
  component: Components.label,
  props: label,
  contextName: "settingsLabel"
};
```

### Properties

```mdx-code-block
<APITable name="LabelGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`label`](../../enums/Components.md#label) | Defines the "label" component type |
| `props` | [`ILabel`](ILabel.md) | Defines the label component properties |
| `contextName?` | `string` | Defines the label component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## SkeletonGroup

```ts
type SkeletonGroup = {
  component: skeleton;
  props: ISkeleton;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L435)

Defines the skeleton component.

### Example

```typescript
import { ISkeleton, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const skeleton: ISkeleton = {
  width: "100%",
  height: "200px",
  borderRadius: "8px"
};

const skeletonGroup: Component = {
  component: Components.skeleton,
  props: skeleton,
  contextName: "loadingState"
};
```

### Properties

```mdx-code-block
<APITable name="SkeletonGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`skeleton`](../../enums/Components.md#skeleton) | Defines the "skeleton" component type |
| `props` | [`ISkeleton`](ISkeleton.md) | Defines the skeleton component properties |
| `contextName?` | `string` | Defines the skeleton component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## TextGroup

```ts
type TextGroup = {
  component: text;
  props: IText;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L470)

Defines the text component.

### Example

```typescript
import { IText, Components, Component } from "@onlyoffice/docspace-plugin-sdk";

const text: IText = {
  text: "Welcome to DocSpace Plugin",
  fontSize: "18px",
  fontWeight: 500,
  lineHeight: "24px",
  color: "#333333",
  isBold: false,
  textAlign: "left",
  truncate: true,
  title: "Welcome to DocSpace Plugin"
};

const textGroup: Component = {
  component: Components.text,
  props: text,
  contextName: "welcomeText"
};
```

### Properties

```mdx-code-block
<APITable name="TextGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`text`](../../enums/Components.md#text) | Defines the "text" component type |
| `props` | [`IText`](IText.md) | Defines the text component properties |
| `contextName?` | `string` | Defines the text component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## TextAreaGroup

```ts
type TextAreaGroup = {
  component: textArea;
  props: ITextArea;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L505)

Defines the textarea component.

### Example

```typescript
import { ITextArea, Components, Component, Actions } from "@onlyoffice/docspace-plugin-sdk";

const textarea: ITextArea = {
  value: "",
  onChange: (value) => {},
  placeholder: "Enter description...",
  heightTextArea: 150,
  fontSize: 14,
  isFullHeight: true,
  heightScale: true,
  maxLength: 1000,
  hasNumeration: false
};

const textAreaGroup: Component = {
  component: Components.textArea,
  props: textarea,
  contextName: "descriptionEditor"
};
```

### Properties

```mdx-code-block
<APITable name="TextAreaGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`textArea`](../../enums/Components.md#textarea) | Defines the "textArea" component type |
| `props` | [`ITextArea`](ITextArea.md) | Defines the textarea component properties |
| `contextName?` | `string` | Defines the textarea component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## ToggleButtonGroup

```ts
type ToggleButtonGroup = {
  component: toggleButton;
  props: IToggleButton;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L539)

Defines the toggle button component.

### Example

```typescript
import { IToggleButton, Components, Component, Actions } from "@onlyoffice/docspace-plugin-sdk";

const toggleButton: IToggleButton = {
  label: "Auto-sync",
  isChecked: true,
  onChange: () => {},
  style: {
    backgroundColor: "#f8f9f9",
    padding: "8px 12px",
    borderRadius: "4px"
  }
};

const toggleButtonGroup: Component = {
  component: Components.toggleButton,
  props: toggleButton,
  contextName: "syncToggle"
};
```

### Properties

```mdx-code-block
<APITable name="ToggleButtonGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`toggleButton`](../../enums/Components.md#togglebutton) | Defines the "toggleButton" component type |
| `props` | [`IToggleButton`](IToggleButton.md) | Defines the toggle button component properties |
| `contextName?` | `string` | Defines the toggle button component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## IconButtonGroup

```ts
type IconButtonGroup = {
  component: iconButton;
  props: IIconButton;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L574)

Defines the icon button component.

### Example

```typescript
import { IIconButton, Components, Component, Actions } from "@onlyoffice/docspace-plugin-sdk";

const iconButton: IIconButton = {
  iconName: "settings.svg",
  size: 32,
  color: "#333333",
  hoverColor: "accent",
  onClick: () => {
    console.log("Settings clicked");
  },
  title: "Open settings",
  isDisabled: false
};

const iconButtonGroup: Component = {
  component: Components.iconButton,
  props: iconButton,
  contextName: "settingsButton"
};
```

### Properties

```mdx-code-block
<APITable name="IconButtonGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`iconButton`](../../enums/Components.md#iconbutton) | Defines the "iconButton" component type |
| `props` | [`IIconButton`](IIconButton.md) | Defines the icon button component properties |
| `contextName?` | `string` | Defines the icon button component context name that updates the component via React context |

```mdx-code-block
</APITable>
```

***

## LinkGroup

```ts
type LinkGroup = {
  component: link;
  props: ILink;
  contextName?: string;
};
```

[View source on GitHub](https://github.com/ONLYOFFICE/docspace-plugin-sdk/blob/master/src/interfaces/components/Component.ts#L607)

Defines the link component.

### Example

```typescript
import { ILink, Components, Component, LinkType, LinkTarget } from "@onlyoffice/docspace-plugin-sdk";

const link: ILink = {
  href: "https://example.com",
  text: "Visit Example",
  type: LinkType.page,
  target: LinkTarget.blank,
  color: "accent",
  fontSize: "14px",
  isBold: false
};

const linkGroup: Component = {
  component: Components.link,
  props: link,
  contextName: "exampleLink"
};
```

### Properties

```mdx-code-block
<APITable name="LinkGroup">
```

| Property | Type | Description |
| ------ | ------ | ------ |
| `component` | [`link`](../../enums/Components.md#link) | Defines the "link" component type |
| `props` | [`ILink`](ILink.md) | Defines the link component properties |
| `contextName?` | `string` | Defines the link component context name that updates the component via React context |

```mdx-code-block
</APITable>
```
