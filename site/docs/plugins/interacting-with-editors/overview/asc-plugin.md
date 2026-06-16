---
sidebar_position: -5
---

# Asc.plugin

`window.Asc.plugin` is the main object of the ONLYOFFICE Plugin SDK. It is available in every plugin and provides methods, properties, and events for interacting with the editor.

## Availability

The `Asc.plugin` object becomes available after the plugin scripts defined in [index.html](../../configuration/entry-point.md) are loaded. The plugin SDK script must be included in the entry point:

```html
<script type="text/javascript" src="https://onlyoffice.github.io/sdkjs-plugins/v1/plugins.js"></script>
```

Once loaded, the `window.Asc.plugin` object is ready to use.

## Properties

| Name   | Type     | Description                                                                                      |
| ------ | -------- | ------------------------------------------------------------------------------------------------ |
| `guid` | `string` | The plugin GUID from [config.json](../../configuration/configuration.md#guid).       |
| `info` | `object` | The auxiliary object containing editor and OLE object metadata. See [below](#info-object).       |

### info object

The `info` object stores information about the editor that uses the plugin (the editor type, OLE object settings, etc.). It is also used to send additional parameters when executing the [callCommand](./how-to-call-commands.md#callcommand) method — for example, setting `recalculate` to `true` to force document recalculation.

| Name        | Type      | Example                 | Description                                                                                              |
| ----------- | --------- | ----------------------- | -------------------------------------------------------------------------------------------------------- |
| `data`        | `string`  | `{data}`                | The OLE object data which need to be sent to the `info` object and used by the plugin.                 |
| `editorType`  | `string`  | `"word"`                | The editor type where the plugin is currently running.                                                 |
| `guid`        | `string`  | `asc.{UUID}`            | The OLE object GUID in the current document.                                                           |
| `height`      | `number`  | `70`                    | The OLE object height measured in millimeters.                                                         |
| `imgSrc`      | `string`  | `"./resources/img.png"` | The link to the image (its visual representation) stored in the OLE object and used by the plugin.     |
| `mmToPx`      | `number`  | `3`                     | Millimeter to pixel conversion ratio for the OLE object vector draw.                                   |
| `objectId`    | `string`  | `"1"`                   | The OLE object identifier in the current document.                                                     |
| `recalculate` | `boolean` | `true`                  | Forces the document to recalculate its content data.                                                   |
| `resize`      | `boolean` | `true`                  | Checks if the OLE object size has been changed.                                                        |
| `width`       | `number`  | `70`                    | The OLE object width measured in millimeters.                                                          |

**Example — branching by editor type**:

```ts
Asc.plugin.init = () => {
  switch (Asc.plugin.info.editorType) {
    case "word":
      console.log("Running in a document editor");
      break;
    case "cell":
      console.log("Running in a spreadsheet editor");
      break;
    case "slide":
      console.log("Running in a presentation editor");
      break;
  }
};
```

**Example — reading the plugin GUID**:

```ts
Asc.plugin.init = () => {
  const pluginGuid = Asc.plugin.info.guid;
};
```

**Example — forcing document recalculation**:

```ts
Asc.plugin.init = () => {
  Asc.plugin.info.recalculate = true;

  Asc.plugin.callCommand(() => {
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText("Hello world!");
    oDocument.InsertContent([oParagraph]);
  }, true);
};
```

**Example — handling OLE object resize**:

```ts
if (Asc.plugin.info.resize === true) {
  Asc.plugin.button(0);
}
```

**Example — working with OLE object data**:

```ts
Asc.plugin.button = (id) => {
  const info = Asc.plugin.info;

  const method = info.objectId === undefined
    ? "asc_addOleObject"
    : "asc_editOleObject";

  if (!info.width) info.width = 70;
  if (!info.height) info.height = 70;

  info.widthPix = Math.trunc(info.mmToPx * info.width);
  info.heightPix = Math.trunc(info.mmToPx * info.height);
  info.imgSrc = window.g_board.getResult(info.widthPix, info.heightPix).image;
  info.data = window.g_board.getData();

  const code = `Api.${method}(${JSON.stringify(info)});`;
  Asc.plugin.callCommand("close", code);
};
```

## Methods

| Method                                                                                          | Returns   | Description                                                                                           |
| ----------------------------------------------------------------------------------------------- | --------- | ----------------------------------------------------------------------------------------------------- |
| [callCommand](./how-to-call-commands.md#callcommand)                                           | None      | Sends a command to the editor using the Office JavaScript API.                                       |
| [executeMethod](./how-to-call-methods.md#executemethod)                                        | `boolean` | Executes a specific editor method (e.g. `AddComment`, `GetSelectedText`).                            |
| [attachEditorEvent](./how-to-attach-events.md#option-1-using-the-attacheditorevent-method)     | None      | Adds a listener for an editor event.                                                                 |
| [detachEditorEvent](./how-to-attach-events.md#detaching-events)                                | None      | Removes a listener for an editor event.                                                              |
| [attachContextMenuClickEvent](../../customization/context-menu.md#clicking-a-context-menu-item) | None      | Adds a click listener for a specific context menu item by ID.                                        |
| [attachToolbarMenuClickEvent](../../customization/toolbar.md#attachtoolbarmenuclickevent)       | None      | Adds a click listener for a specific toolbar menu item by ID.                                        |
| `tr`                                                                                             | `string`  | Returns the translation for the given key. See [Localization](../../configuration/localization.md). |
| `onThemeChangedBase`                                                                             | None      | The base theme handler. Must be called at the start of a custom [onThemeChanged](#onthemechanged) handler. |

## executeMethod targets

These methods are called via `Asc.plugin.executeMethod("MethodName", [...])`. For editor-specific methods (`AddComment`, `GetSelectedText`, etc.), see the per-editor method references: [Document](../document-api/Methods/Methods.md), [Spreadsheet](../spreadsheet-api/Methods/Methods.md), [Presentation](../presentation-api/Methods/Methods.md), [PDF](../pdf-api/Methods/Methods.md), [Form](../form-api/Methods/Methods.md).

### AddContextMenuItem

Adds an item to the context menu. See [Context menu](../../customization/context-menu.md) for a full guide.

**Parameters**:

| Name  | Type                                          | Description                                  |
| ----- | --------------------------------------------- | -------------------------------------------- |
| items | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | An array containing the context menu items. |

**Returns**: This method doesn't return any data.

#### ContextMenuItem

**type:** `object`

The context menu item.

**Properties**:

| Name     | Type                       | Description                                                                                                             |
| -------- | -------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `id`       | `string`                   | The item ID.                                                                                                            |
| `text`     | `string`                   | The item caption.                                                                                                       |
| `data`     | `string`                   | The item data (this data will be sent to the click event callback).                                                     |
| `disabled` | `boolean`                  | Specifies whether the current item is disabled or not.                                                                  |
| `icons`    | `string`                   | The item icons (see the plugins [config](../../configuration/configuration.md) documentation).               |
| `items`    | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | An array containing the context menu items for the current item.                                             |

**Example**:

```ts
Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
  const items = {
    guid: Asc.plugin.guid,
    items: [
      {
        id: "onNameClick",
        text: "Name",
        items: [],
      },
    ],
  };

  Asc.plugin.executeMethod("AddContextMenuItem", [items]);
});
```

### UpdateContextMenuItem

Updates a context menu item. See [Context menu](../../customization/context-menu.md#updating-a-context-menu-item) for a full guide.

**Parameters**:

| Name  | Type                                          | Description                                                      |
| ----- | --------------------------------------------- | ---------------------------------------------------------------- |
| items | `Array.<`[ContextMenuItem](#contextmenuitem)`>` | An array containing the context menu items for the current item. |

**Returns**: This method doesn't return any data.

### Toolbar

| Method                   | Description                                                                                           |
| ------------------------ | ----------------------------------------------------------------------------------------------------- |
| `AddToolbarMenuItem`     | Adds an item to the toolbar. See [Toolbar](../../customization/toolbar.md#addtoolbarmenuitem).        |
| `UpdateToolbarMenuItem`  | Updates a toolbar menu item. See [Toolbar](../../customization/toolbar.md#updatetoolbarmenuitem).     |

### Windows and panels

| Method              | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `ShowWindow`        | Opens a plugin window or panel. See [Windows and panels](../../customization/windows-and-panels.md#showing-a-window).       |
| `ActivateWindow`    | Activates a plugin window. See [Windows and panels](../../customization/windows-and-panels.md#activating-a-window).         |
| `CloseWindow`       | Closes a plugin window. See [Windows and panels](../../customization/windows-and-panels.md#closing-a-window).               |
| `ResizeWindow`      | Resizes a plugin window. See [Windows and panels](../../customization/windows-and-panels.md#resizewindow).             |
| `MouseMoveWindow`   | Sends a mouse move event to a window. See [Windows and panels](../../customization/windows-and-panels.md#mousemovewindow).  |
| `MouseUpWindow`     | Sends a mouse up event to a window. See [Windows and panels](../../customization/windows-and-panels.md#mouseupwindow).    |
| `SendToWindow`      | Sends a message to a window. See [Windows and panels](../../customization/windows-and-panels.md#sendtowindow).         |

### Input helper

| Method              | Description                                                                                                        |
| ------------------- | ------------------------------------------------------------------------------------------------------------------ |
| `ShowInputHelper`   | Shows the input helper. See [Input helper](../../customization/input-helper.md).                                   |
| `UnShowInputHelper` | Hides the input helper. See [Input helper](../../customization/input-helper.md).                                   |

## Events

Events are functions assigned to the `Asc.plugin` object or attached with `attachEditorEvent`. They allow the plugin to respond to lifecycle changes, user actions, and editor state updates.

:::note
These are **plugin-level** events fired on the `Asc.plugin` object itself. For events fired by the editors (comments, content controls, selections, etc.), see the per-editor event references: [Document](../document-api/Events/Events.md), [Spreadsheet](../spreadsheet-api/Events/Events.md), [Presentation](../presentation-api/Events/Events.md), [PDF](../pdf-api/Events/Events.md), [Form](../form-api/Events/Events.md).
:::

### init

The function called when the plugin is initialized and ready to run its main logic. This is the entry point where the plugin performs its work — inserting content, calling methods, or setting up the UI.

For [input helper](../../customization/input-helper.md) plugins, the function receives the current text near the cursor.

**Parameters**:

| Name | Type     | Description                                                    |
| ---- | -------- | -------------------------------------------------------------- |
| text | `string` | The text near the cursor. Only passed for input helper plugins. |

**Example**:

```ts
Asc.plugin.init = (text) => {
  console.log("Plugin initialized, text:", text);
};
```

### button

The function called when any of the plugin [buttons](../../configuration/configuration.md#variationsbuttons) is clicked. If `id` is `-1`, the **Close** button (cross icon) was clicked or the plugin operation was interrupted.

**Parameters**:

| Name     | Type     | Description                                                                                                                                               |
| -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | `number` | The button index in the [buttons](../../configuration/configuration.md#variationsbuttons) array of config.json. `-1` means the Close button. |
| windowId | `number` | The identifier of the modal window from which the button was clicked.                                                                                      |

**Example**:

```ts
Asc.plugin.button = (id, windowId) => {
  console.log("Button clicked, id:", id, "windowId:", windowId);
};
```

### onMethodReturn

:::danger[Deprecated]
Use the `callback` parameter of [executeMethod](./how-to-call-methods.md#executemethod) instead.
:::

The function called to return the result of an `executeMethod` call when no `callback` parameter was provided.

**Parameters**:

| Name        | Type  | Description                   |
| ----------- | ----- | ----------------------------- |
| returnValue | `any` | The value returned by the method. |

**Example**:

```ts
Asc.plugin.onMethodReturn = (returnValue) => {
  console.log("Method returned:", returnValue);
};
```

### onTranslate

The function called right after the plugin starts up to apply translations, and again whenever the editor interface language changes. Use it to localize DOM elements with the [`tr`](../../configuration/localization.md) helper.

**Example**:

```ts
Asc.plugin.onTranslate = () => {
  console.log("Translation applied");

  const label = document.getElementById("button_new");
  if (label) {
    label.innerHTML = Asc.plugin.tr("New");
  }
};
```

:::warning
Use `onTranslate` only for DOM text localization. Do not call `executeMethod`, `callCommand`, or other API methods inside this handler — they may not be available yet because `onTranslate` can fire before `init`.
:::

### onThemeChanged

The function called when the editor theme changes and on initial plugin load. Use it to keep the plugin appearance consistent with the editor interface.

**Parameters**:

| Name       | Type     | Description                                                                                              |
| ---------- | -------- | -------------------------------------------------------------------------------------------------------- |
| theme      | `object` | The theme object containing `type`, `name`, and CSS variable values (e.g. `--background-normal`). |
| theme.type | `string` | The theme type: `"light"`, `"dark"`, or `"contrast-dark"`.                                              |
| theme.name | `string` | The theme name (e.g. `"classic"`, `"dark"`).                                                            |

**Example**:

```ts
function onThemeChanged(theme) {
  console.log("Theme changed:", theme.type, theme.name);

  // Always call the base implementation first
  Asc.plugin.onThemeChangedBase(theme);

  if (theme.type === "dark" || theme.type === "contrast-dark") {
    document.body.classList.add("dark-theme");
  } else {
    document.body.classList.remove("dark-theme");
  }
}

Asc.plugin.onThemeChanged = onThemeChanged;
```

See [How to customize themes](./how-to-customize-themes.md) for a full guide.

### onContextMenuShow

The function called when the context menu is shown. If a plugin listens for this event, it must call the `AddContextMenuItem` method (synchronously or asynchronously), because the editor waits for responses from all plugins before filling the context menu.

**Parameters**:

| Name    | Type                                        | Description                              |
| ------- | ------------------------------------------- | ---------------------------------------- |
| options | [ContextMenuOptions](#contextmenuoptions) | The information about the context menu. |

#### ContextMenuOptions

**type:** `object`

The context menu options.

**Properties**:

| Name       | Type                                    | Description                                                          |
| ---------- | --------------------------------------- | -------------------------------------------------------------------- |
| Type       | [ContextMenuType](#contextmenutype)   | The context menu type.                                               |
| header     | `boolean`                               | Specifies whether the context menu is opened inside the header.      |
| footer     | `boolean`                               | Specifies whether the context menu is opened inside the footer.      |
| headerArea | `boolean`                               | Specifies whether the context menu is opened over the header.        |
| footerArea | `boolean`                               | Specifies whether the context menu is opened over the footer.        |

#### ContextMenuType

**type:** `"None" | "Target" | "Selection" | "Image" | "Shape" | "OleObject"`

The context menu type:

- `None` - not used
- `Target` - nothing is selected
- `Selection` - text is selected
- `Image` - image is selected
- `Shape` - shape is selected
- `OleObject` - OLE object is selected

Depending on the selection type, different context menu items can be added.

**Example**:

```ts
Asc.plugin.attachEditorEvent("onContextMenuShow", (options) => {
  console.log("Context menu shown, options:", options);

  const items = {
    guid: Asc.plugin.guid,
    items: [
      {
        id: "onMyAction",
        text: "My Plugin Action",
        items: [],
      },
    ],
  };

  Asc.plugin.executeMethod("AddContextMenuItem", [items]);
});
```

See [Context menu](../../customization/context-menu.md) for a full guide.

### onContextMenuClick

The function called when a context menu item added by the plugin is clicked.

**Parameters**:

| Name | Type     | Description    |
| ---- | -------- | -------------- |
| id   | `string` | The item ID. |

**Example**:

```ts
Asc.plugin.attachEditorEvent("onContextMenuClick", (id) => {
  console.log("Context menu item clicked:", id);
});
```

:::tip
Use the [`attachContextMenuClickEvent`](../../customization/context-menu.md#clicking-a-context-menu-item) helper to register separate handlers per item ID.
:::

### onToolbarMenuClick

The function called when a toolbar menu item added by the plugin is clicked.

**Parameters**:

| Name | Type     | Description    |
| ---- | -------- | -------------- |
| id   | `string` | The item ID. |

**Example**:

```ts
Asc.plugin.attachEditorEvent("onToolbarMenuClick", (id) => {
  console.log("Toolbar item clicked:", id);
});
```

:::tip
Use the [`attachToolbarMenuClickEvent`](../../customization/toolbar.md#attachtoolbarmenuclickevent) helper to register separate handlers per item ID.
:::

See [Toolbar](../../customization/toolbar.md) for a full guide.

## Minimal example

A complete "Hello world" plugin that inserts text when launched:

```ts
Asc.plugin.init = () => {
  console.log("Plugin initialized");

  Asc.scope.text = "Hello world!";

  Asc.plugin.callCommand(() => {
    const oDocument = Api.GetDocument();
    const oParagraph = Api.CreateParagraph();
    oParagraph.AddText(Asc.scope.text);
    oDocument.InsertContent([oParagraph]);
  }, true);
};

Asc.plugin.button = (id) => {
  console.log("Button clicked, id:", id);
};
```

For the full plugin setup (config.json, index.html, folder structure), see [Getting started](../../get-started/get-started.md).
