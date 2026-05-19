---
sidebar_label: White label
---

# Customization - White label

The customization section defines the editor customization parameters.

:::info
The parameters on this page are available only for the extended white label license of [ONLYOFFICE Docs Developer](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api). To request a quote, please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com).
:::

## about

**type:** `boolean` | **default:** `true`

Whether to display the **About** menu button.

**Example**: `true`

## features.spellcheck.change

**type:** `boolean`

Whether to display the spell checker setting. This setting is available in all editor types.

:::note
Other fields of the `features` object are available for the standard branding and are described [here](customization-standard-branding.md#features). Only the `features.spellcheck.change` field requires additional payment.
:::

:::danger[Deprecated]
Deprecated since version 9.0.4.
:::

**Example**: `true`

## font

**type:** `object`

The font for the interface elements (buttons, tabs, etc.).

**Example**:

``` ts
{
  name: "Arial",
  size: "11px",
}
```

### font.name

**type:** `string`

The font name.

**Example**: `"Arial"`

### font.size

**type:** `string`

The font size.

**Example**: `"11px"`

## layout

**type:** `object`

The parameters that the user can use to hide the interface elements but not to disable features completely. The hidden features are still available from other elements such as the context menu or via hotkeys.

**Example**:

``` ts
{
  header: {
    editMode: true,
    save: true,
    user: true,
    users: true,
  },
  leftMenu: {
    mode: true,
    navigation: true,
    spellcheck: true,
  },
  rightMenu: {
    mode: true,
  },
  statusBar: {
    actionStatus: true,
    docLang: true,
    textLang: true,
  },
  toolbar: {
    collaboration: {
      mailmerge: true,
    },
    draw: true,
    file: {
      close: true,
      info: true,
      save: true,
      settings: true,
    },
    home: {},
    layout: true,
    plugins: true,
    protect: true,
    references: true,
    save: true,
    view: {
      navigation: true,
    },
  },
}
```

### layout.header

**type:** `object`

The editor header settings.

**Example**:

``` ts
{
  editMode: true,
  save: true,
  user: true,
  users: true,
}
```

### layout.header.editMode

**type:** `boolean` | **default:** `true`

Whether to display a button for switching editor modes in the header.

**Example**: `true`

### layout.header.save

**type:** `boolean` | **default:** `true`

Whether to display the **Save** button in the editor header. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to `false`.

**Example**: `true`

### layout.header.user

**type:** `boolean` | **default:** `true`

Whether to display the icon with the user's avatar/initials in the editor header.

**Example**: `true`

### layout.header.users

**type:** `boolean` | **default:** `true`

Whether to display the button with the editing users.

**Example**: `true`

### layout.leftMenu

**type:** `object | boolean` | **default:** `true`

The left menu settings. If set to `false`, the left menu is hidden.

**Example**:

``` ts
{
  mode: true,
  navigation: true,
  spellcheck: true,
}
```

### layout.leftMenu.mode

**type:** `boolean` | **default:** `true`

The initial value of the left panel visibility - displayed or hidden. It is used for the **Left panel** menu option on the **View** tab.

**Example**: `true`

### layout.leftMenu.navigation

**type:** `boolean` | **default:** `true`

Whether to display the **Navigation** button. This parameter will only be available for the document editor.

**Example**: `true`

### layout.leftMenu.spellcheck

**type:** `boolean` | **default:** `true`

Whether to display the **Spellcheck** button. This parameter will only be available for the spreadsheet editor.

**Example**: `true`

### layout.rightMenu

**type:** `object | boolean` | **default:** `true`

The right menu settings. If set to `false`, the right menu is hidden.

**Example**:

``` ts
{
  mode: true,
}
```

### layout.rightMenu.mode

**type:** `boolean` | **default:** `true`

The initial value of the right panel visibility - displayed or hidden. It is used for the **Right panel** menu option on the **View** tab.

**Example**: `true`

### layout.statusBar

**type:** `object | boolean` | **default:** `true`

The status bar settings. If set to `false`, the status bar is hidden.

**Example**:

``` ts
{
  actionStatus: true,
  docLang: true,
  textLang: true,
}
```

### layout.statusBar.actionStatus

**type:** `boolean` | **default:** `true`

Whether to display an action status.

**Example**: `true`

### layout.statusBar.docLang

**type:** `boolean` | **default:** `true`

Whether to display a button for choosing the document language. This parameter will only be available for the document editor and the presentation editor.

**Example**: `true`

### layout.statusBar.textLang

**type:** `boolean` | **default:** `true`

Whether to display a button for choosing the text language. This parameter will only be available for the document editor and the presentation editor.

**Example**: `true`

### layout.toolbar

**type:** `object | boolean` | **default:** `true`

The toolbar settings. If set to `false`, the toolbar is hidden.

**Example**:

``` ts
{
  collaboration: {
    mailmerge: true,
  },
  draw: true,
  file: {
    close: true,
    info: true,
    save: true,
    settings: true,
  },
  home: {},
  insert: {
    file: true,
    field: true,
  },
  layout: {
    pagecolor: true,
  },
  plugins: true,
  protect: true,
  references: true,
  save: true,
  view: {
    navigation: true,
  },
}
```

### layout.toolbar.collaboration

**type:** `object | boolean` | **default:** `true`

The **Collaboration** tab settings. If set to `false`, the tab is hidden.

**Example**:

``` ts
{
  mailmerge: true,
}
```

### layout.toolbar.collaboration.mailmerge

**type:** `boolean` | **default:** `true`

Whether to display the button for choosing the mail merge base.

**Example**: `true`

### layout.toolbar.draw

**type:** `boolean` | **default:** `true`

Whether to display the **Draw** tab.

**Example**: `true`

### layout.toolbar.file

**type:** `object | boolean` | **default:** `true`

The **File** tab settings. If set to `false`, the tab is hidden.

**Example**:

``` ts
{
  close: true,
  info: true,
  save: true,
  settings: true,
}
```

### layout.toolbar.file.close

**type:** `boolean` | **default:** `true`

Whether to display the **Close menu** option.

**Example**: `true`

### layout.toolbar.file.info

**type:** `boolean` | **default:** `true`

Whether to display the **Document info** option.

**Example**: `true`

### layout.toolbar.file.save

**type:** `boolean` | **default:** `true`

Whether to display the **Save** option.

**Example**: `true`

### layout.toolbar.file.settings

**type:** `boolean` | **default:** `true`

Whether to display the **Advanced settings** option.

**Example**: `true`

### layout.toolbar.home

**type:** `object`

The **Home** tab settings. This tab cannot be hidden.

**Example**: `{}`

### layout.toolbar.home.mailmerge

**type:** `boolean`

Whether to display the button for choosing the mail merge base.

:::danger[Deprecated]
Please use the [toolbar.collaboration.mailmerge](#layouttoolbarcollaborationmailmerge) parameter instead.
:::

**Example**: `true`

### layout.toolbar.insert

**type:** `object | boolean` | **default:** `true`

The **Insert** tab settings. If set to `false`, the tab is hidden. This parameter will only be available for the document editor.

**Example**:

``` ts
{
  file: true,
  field: true,
}
```

### layout.toolbar.insert.field

**type:** `boolean` | **default:** `true`

Whether to display the **Field** button. This parameter will only be available for the document editor.

**Example**: `true`

### layout.toolbar.insert.file

**type:** `boolean` | **default:** `true`

Whether to display the **Text from File** button. This parameter will only be available for the document editor.

**Example**: `true`

### layout.toolbar.layout

**type:** `object | boolean` | **default:** `true`

The **Layout** tab settings. If set to `false`, the tab is hidden. This parameter will only be available for the document editor and the spreadsheet editor.

**Example**:

``` ts
{
  pagecolor: true,
}
```

### layout.toolbar.layout.pagecolor

**type:** `boolean` | **default:** `true`

Whether to display the **Page Color** button. This parameter will only be available for the document editor.

**Example**: `true`

### layout.toolbar.plugins

**type:** `boolean` | **default:** `true`

Whether to display the **Plugins** tab.

**Example**: `true`

### layout.toolbar.protect

**type:** `boolean` | **default:** `true`

Whether to display the **Protection** tab.

**Example**: `true`

### layout.toolbar.references

**type:** `boolean` | **default:** `true`

Whether to display the **References** tab. This parameter will only be available for the document editor.

**Example**: `true`

### layout.toolbar.save

**type:** `boolean` | **default:** `true`

Whether to display the **Save** button on the toolbar. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to `true`.

**Example**: `true`

### layout.toolbar.view

**type:** `object | boolean` | **default:** `true`

The **View** tab settings. If set to `false`, the tab is hidden.

**Example**:

``` ts
{
  navigation: true,
}
```

### layout.toolbar.view.navigation

**type:** `boolean` | **default:** `true`

Whether to display the **Navigation** button. This parameter will only be available for the document editor.

**Example**: `true`

## leftMenu

**type:** `boolean` | **default:** `true`

Whether to display the left menu panel.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.leftMenu](#layoutleftmenu) parameter instead.
:::

**Example**: `true`

## loaderLogo

**type:** `string`

The path to the image logo displayed while the document is being loaded. The image will be proportionally resized to the height of 160 pixels when displayed in the editors.

:::note
There are no special recommendations for this file, but it would be better if it were in .png format with transparent background.
:::

**Example**: `"https://example.com/loader-logo.png"`

## loaderName

**type:** `string`

The text displayed while the document is being loaded.

**Example**: `"The document is loading, please wait..."`

## rightMenu

**type:** `boolean` | **default:** `true`

Whether to display the right menu panel.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.rightMenu](#layoutrightmenu) parameter instead.
:::

**Example**: `true`

## statusBar

**type:** `boolean` | **default:** `true`

Whether to display the status bar.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.statusBar](#layoutstatusbar) parameter instead.
:::

**Example**: `true`

## toolbar

**type:** `boolean` | **default:** `true`

Whether to display the top toolbar.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.toolbar](#layouttoolbar) parameter instead.
:::

**Example**: `true`

## Example

``` ts
const config = {
  // ...
  editorConfig: {
    // ...
    customization: {
      about: true,
      features: {
        spellcheck: {
          change: true,
        },
      },
      font: {
        name: "Arial",
        size: "11px",
      },
      layout: {
        header: {
          editMode: true,
          save: true,
          user: true,
          users: true,
        },
        leftMenu: {
          mode: true,
          navigation: true,
          spellcheck: true,
        },
        rightMenu: {
          mode: true,
        },
        statusBar: {
          actionStatus: true,
          docLang: true,
          textLang: true,
        },
        toolbar: {
          collaboration: {
            mailmerge: true,
          },
          draw: true,
          file: {
            close: true,
            info: true,
            save: true,
            settings: true,
          },
          home: {},
          layout: true,
          plugins: true,
          protect: true,
          references: true,
          save: true,
          view: {
            navigation: true,
          },
        },
      },
      loaderLogo: "https://example.com/loader-logo.png",
      loaderName: "The document is loading, please wait...",
    },
  },
};

const docEditor = new DocsAPI.DocEditor("placeholder", config);
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
