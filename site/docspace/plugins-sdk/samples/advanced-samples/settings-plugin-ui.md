# Settings plugin UI

This plugin adds a settings interface for administrators in DocSpace. It includes:

- a toggle for offline mode;
- a dropdown to select language;
- input fields for URL, login, and password;
- the **Save** button that prints the values to the console.

<details>
  <summary>Full example</summary>

``` ts
// Import interfaces and components from the SDK
import {
  IPlugin,
  PluginStatus,
  ToggleButtonGroup,
  Components,
  ISettingsPlugin,
  Actions,
  IMessage,
  ISettings
} from '@onlyoffice/docspace-plugin-sdk';

import {
  IInput,
  IText,
  TextGroup,
  InputAutocomplete,
  InputSize,
  InputType,
  InputGroup
} from '@onlyoffice/docspace-plugin-sdk';

import {
  IComboBox,
  IComboBoxItem,
  ComboBoxGroup,
  BoxGroup,
  IBox,
  IButton,
  IToggleButton,
  ButtonGroup,
  ButtonSize
} from '@onlyoffice/docspace-plugin-sdk';

// Plugin class implementing ISettingsPlugin
class Settingsplugin implements IPlugin, ISettingsPlugin {
  status: PluginStatus = PluginStatus.active;

  // Main settings block for admin
  adminPluginSettings: ISettings | null = {} as ISettings;

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => {
    return this.status;
  };

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  getAdminPluginSettings = () => {
    return this.adminPluginSettings;
  };

  setAdminPluginSettings = (settings: ISettings | null): void => {
    this.adminPluginSettings = settings;
  };

  // Placeholder: unused in this plugin
  setAdminPluginSettingsValue = (settings: string | null): void => {};
}

const plugin = new Settingsplugin();

/* ===== Offline Toggle Component ===== */

// Handle toggle switch logic
const onChange = () => {
  offToggleButtonProps.isChecked = !offToggleButtonProps.isChecked;
  return {
    actions: [Actions.updateProps, Actions.updateContext],
    newProps: offToggleButtonProps,
    contextProps: [],
  };
};

const offToggleButtonProps: IToggleButton = {
  isChecked: false,
  onChange,
  style: { position: "relative", gap: "0px" },
};

const toggleComponent: ToggleButtonGroup = {
  component: Components.toggleButton,
  props: offToggleButtonProps,
};

const toggleBox: IBox = {
  displayProp: "flex",
  alignItems: "center",
  children: [toggleComponent],
};

const textProps: IText = {
  text: `When the "offline mode" is active, this disables all remote operations and features to protect.`,
  color: "#A3A9AE",
  fontSize: "12px",
  fontWeight: 400,
  lineHeight: "16px",
  noSelect: true,
};

const textComponent: TextGroup = {
  component: Components.text,
  props: textProps,
};

const offDescriptionBox: IBox = {
  marginProp: "0 0 24px",
  children: [textComponent],
};

const offText: IText = {
  text: "Offline mode",
  fontWeight: 600,
  fontSize: "16px",
  lineHeight: "22px",
  noSelect: true,
};

const offTextComponent: TextGroup = {
  component: Components.text,
  props: offText,
};

const offTextBox: IBox = {
  marginProp: "0 0 0",
  children: [offTextComponent],
};

const offGroup: BoxGroup = {
  component: Components.box,
  props: {
    displayProp: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginProp: "0 0 8px",
    children: [
      { component: Components.box, props: offTextBox },
      { component: Components.box, props: toggleBox },
    ],
  },
};

/* ===== Language ComboBox ===== */

const options: IComboBoxItem[] = [
  { key: "auto", label: "Auto" },
  { key: "en", label: "English" },
  { key: "zh", label: "简体中文" }
];

const onSelect = (option: IComboBoxItem) => {
  langComboBox.selectedOption = option;
  return {
    actions: [Actions.updateProps, Actions.updateContext],
    newProps: langComboBox,
    contextProps: [],
  };
};

const langComboBox: IComboBox = {
  options,
  selectedOption: { key: "auto", label: "Auto" },
  onSelect,
  scaled: true,
  dropDownMaxHeight: 400,
  directionY: "both",
  scaledOptions: true,
};

const langComponent: ComboBoxGroup = {
  component: Components.comboBox,
  props: langComboBox,
};

const langBox: IBox = {
  marginProp: "0 0 20px",
  widthProp: "100%",
  children: [langComponent],
};

const langText: IText = {
  text: "Language",
  fontWeight: 600,
  fontSize: "13px",
  lineHeight: "20px",
  noSelect: true,
};

const langTextComponent: TextGroup = {
  component: Components.text,
  props: langText,
};

const langTextBox: IBox = {
  marginProp: "0 0 0",
  children: [langTextComponent],
};

const langGroup: BoxGroup = {
  component: Components.box,
  props: {
    displayProp: "flex",
    flexDirection: "column",
    children: [
      { component: Components.box, props: langTextBox },
      { component: Components.box, props: langBox },
    ],
  },
};

/* ===== Inputs: URL, Login, Password ===== */

// Labels
const URLText: IText = { text: "URL", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true };
const LoginText: IText = { text: "Login", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true };
const PasswordText: IText = { text: "Password", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true };

// Handlers + inputs
const onURLChange = (value: string) => {
  urlInput.value = value;
  return { actions: [Actions.updateProps], newProps: urlInput };
};

const urlInput: IInput = {
  value: "",
  onChange: onURLChange,
  scale: true,
  size: InputSize.base,
  type: InputType.text,
  autoComplete: InputAutocomplete.off,
};

const urlInputComponent: InputGroup = { component: Components.input, props: urlInput };
const urlInputBox: IBox = { marginProp: "0 0 24px", children: [urlInputComponent] };

const onLoginChange = (value: string) => {
  logInInput.value = value;
  return { actions: [Actions.updateProps], newProps: logInInput };
};

const logInInput: IInput = {
  value: "",
  onChange: onLoginChange,
  scale: true,
  size: InputSize.base,
  type: InputType.text,
  autoComplete: InputAutocomplete.off
};

const loginInputComponent: InputGroup = { component: Components.input, props: logInInput };
const loginInputBox: IBox = { marginProp: "0 0 24px", children: [loginInputComponent] };

const onPasswordChange = (value: string) => {
  passwordInput.value = value;
  return { actions: [Actions.updateProps], newProps: passwordInput };
};

const passwordInput: IInput = {
  value: "",
  onChange: onPasswordChange,
  scale: true,
  size: InputSize.base,
  type: InputType.password,
  autoComplete: InputAutocomplete.off,
};

const passwordInputComponent: InputGroup = { component: Components.input, props: passwordInput };
const passwordInputBox: IBox = { marginProp: "0 0 24px", children: [passwordInputComponent] };

/* ===== Save Button ===== */

const onClick = () => {
  console.log(offToggleButtonProps.isChecked);
  console.log(langComboBox.selectedOption);
  console.log(urlInput.value);
  console.log(logInInput.value);
  console.log(passwordInput.value);
};

const ButtonProps: IButton = {
  onClick,
  size: ButtonSize.normal,
  label: "Save",
  scale: false,
  primary: true
};

const ButtonComponent: ButtonGroup = {
  component: Components.button,
  props: ButtonProps,
  contextName: "acceptButton",
};

/* ===== Final UI Layout ===== */

const parentBox: IBox = {
  displayProp: "flex",
  flexDirection: "column",
  marginProp: "16 0 0 0",
  children: [
    { component: Components.text, props: URLText },
    { component: Components.box, props: urlInputBox },
    { component: Components.text, props: LoginText },
    { component: Components.box, props: loginInputBox },
    { component: Components.text, props: PasswordText },
    { component: Components.box, props: passwordInputBox },
    langGroup,
    offGroup,
    { component: Components.box, props: offDescriptionBox },
    ButtonComponent
  ]
};

const adminSettings: ISettings = {
  settings: parentBox,
  saveButton: ButtonComponent,
  onLoad: async () => ({ settings: parentBox })
};

// Register settings into plugin
plugin.setAdminPluginSettings(adminSettings);

// Register plugin globally
declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins.Settingsplugin = plugin || {};
export default plugin;
```

</details>

## Before you start

Make sure you have a DocSpace server running, and install DocSpace Plugins SDK globally:

```bash
npm i -g @onlyoffice/docspace-plugin-sdk
```

## Step 1: Create a plugin

1. Initialize your plugin using the CLI:

   ``` sh
   npx create-docspace-plugin
   ```

2. Fill out [basic metadata](/docspace/plugins-sdk/usage-sdk/creating-plugin-template.md): plugin name, version, author, description, logo, license, homepage.

3. Select the required scopes from the list of available options. Use the arrow keys to highlight `Settings`, press `Space` to select it, then press `Enter` to confirm and generate the plugin template.

## Step 2: Confirm plugin configuration

Ensure `package.json` includes all the necessary fields. Most importantly, make sure it contains:

```json
{
  "scopes": ["Settings"]
}
```

## Step 3: Review and extend plugin code

By default, the plugin template includes a basic implementation in the `src/index.ts` file. Here's an example of a [settings plugin](/docspace/plugins-sdk/usage-sdk/coding-plugin/plugin-types/settingsplugin.md):

<details>
  <summary>Settingsplugin class</summary>

```js
// Import interfaces and components from the SDK
import {
  IPlugin,
  PluginStatus,
  ToggleButtonGroup,
  Components,
  ISettingsPlugin,
  Actions,
  IMessage,
  ISettings
} from '@onlyoffice/docspace-plugin-sdk';

import {
  IInput,
  IText,
  TextGroup,
  InputAutocomplete,
  InputSize,
  InputType,
  InputGroup
} from '@onlyoffice/docspace-plugin-sdk';

import {
  IComboBox,
  IComboBoxItem,
  ComboBoxGroup,
  BoxGroup,
  IBox,
  IButton,
  IToggleButton,
  ButtonGroup,
  ButtonSize
} from '@onlyoffice/docspace-plugin-sdk';

// Plugin class implementing ISettingsPlugin
class Settingsplugin implements IPlugin, ISettingsPlugin {
  status: PluginStatus = PluginStatus.active;

  // Main settings block for admin
  adminPluginSettings: ISettings | null = {} as ISettings;

  onLoadCallback = async () => {};

  updateStatus = (status: PluginStatus) => {
    this.status = status;
  };

  getStatus = () => {
    return this.status;
  };

  setOnLoadCallback = (callback: () => Promise<void>) => {
    this.onLoadCallback = callback;
  };

  getAdminPluginSettings = () => {
    return this.adminPluginSettings;
  };

  setAdminPluginSettings = (settings: ISettings | null): void => {
    this.adminPluginSettings = settings;
  };

  // Placeholder: unused in this plugin
  setAdminPluginSettingsValue = (settings: string | null): void => {};
}

const plugin = new Settingsplugin();

// Add the plugin items and components below the plugin initialization line

// Register plugin globally for DocSpace to find
declare global {
  interface Window {
    Plugins: any;
  }
}

window.Plugins = window.Plugins || {};
window.Plugins.Extsearch = plugin;

export default plugin;
```

</details>

## Step 4: Add the settings and UI logic

This step defines the full settings interface: input fields, a toggle, a dropdown, and the **Save** button.

<details>
  <summary>UI components</summary>

```js
// OFFLINE MODE toggle
const offToggleButtonProps: IToggleButton = {
  isChecked: false,
  onChange: () => {
    offToggleButtonProps.isChecked = !offToggleButtonProps.isChecked;
    return { actions: [Actions.updateProps], newProps: offToggleButtonProps };
  },
  style: { position: "relative", gap: "0px" },
};

// LANGUAGE dropdown
const langComboBox: IComboBox = {
  options: [
    { key: "auto", label: "Auto" },
    { key: "en", label: "English" },
    { key: "zh", label: "简体中文" }
  ],
  selectedOption: { key: "auto", label: "Auto" },
  onSelect: (option) => {
    langComboBox.selectedOption = option;
    return { actions: [Actions.updateProps], newProps: langComboBox };
  },
  scaled: true,
  directionY: "both",
  scaledOptions: true,
  dropDownMaxHeight: 400
};

// INPUTS: URL, Login, Password
const onURLChange = (val: string) => {
  urlInput.value = val;
  return { actions: [Actions.updateProps], newProps: urlInput };
};
const urlInput: IInput = {
  value: "",
  onChange: onURLChange,
  scale: true,
  size: InputSize.base,
  type: InputType.text,
  autoComplete: InputAutocomplete.off
};

// SAVE button
const onClick = () => {
  console.log(offToggleButtonProps.isChecked);
  console.log(langComboBox.selectedOption);
  console.log(urlInput.value);
  console.log(logInInput.value);
  console.log(passwordInput.value);
};
const ButtonProps: IButton = {
  onClick,
  label: "Save",
  primary: true,
  scale: false,
  size: ButtonSize.normal
};

// MAIN settings layout
const parentBox: IBox = {
  displayProp: "flex",
  flexDirection: "column",
  marginProp: "16 0 0 0",
  children: [
    // URL
    { component: Components.text, props: { text: "URL", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true } },
    { component: Components.box, props: { marginProp: "0 0 24px", children: [{ component: Components.input, props: urlInput }] } },

    // Login
    { component: Components.text, props: { text: "Login", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true } },
    { component: Components.box, props: { marginProp: "0 0 24px", children: [{ component: Components.input, props: logInInput }] } },

    // Password
    { component: Components.text, props: { text: "Password", fontWeight: 600, fontSize: "13px", lineHeight: "20px", noSelect: true } },
    { component: Components.box, props: { marginProp: "0 0 24px", children: [{ component: Components.input, props: passwordInput }] } },

    // Language and Toggle
    { component: Components.box, props: langGroup.props },
    { component: Components.box, props: offGroup.props },
    { component: Components.box, props: offDescriptionBox },

    // Save
    { component: Components.button, props: ButtonProps }
  ]
};

const adminSettings: ISettings = {
  settings: parentBox,
  saveButton: { component: Components.button, props: ButtonProps },
  onLoad: async () => ({ settings: parentBox })
};

plugin.setAdminPluginSettings(adminSettings);
```

</details>

## Step 5: Build the plugin

From the root of your plugin, run the following command:

```bash
npm run build
```

This compiles `src/index.ts` to `dist/plugin.js`.

## Step 6: Upload to DocSpace

1. Log in as an administrator.
2. Navigate to: **Admin Panel → Integration → Plugins**.
3. Click **Upload**, and select the generated `dist/plugin.zip`.
4. Enable the plugin toggle if it is not already active.

## Step 7: Test the plugin

1. Go to **Admin Panel → Settings → Plugins**
2. Click ![Settings icon](/assets/images/docspace/settings-icon.png) for your plugin.
3. Enter test values in the **URL**, **Login**, and **Password** fields.
4. Click **Save**.
