---
sidebar_label: White label
---

# Customization - White label

The customization section allows you to customize the editor interface according to your needs, as well as change the presence or absence of additional buttons, links, change logos and other details of the editor's owner.

On this page you will find the customization parameters available only for the [extended white label license](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) of ONLYOFFICE Docs Developer. To request a quote, please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com).

## about

**type:** `boolean` | **default:** `true`

Defines if the **About** menu button is displayed or hidden.

**Example**: ``true``

## features.spellcheck.change

**type:** `boolean`

Defines if the spell checker setting will be displayed or not. Spell checker setting is available in all editor types.

:::note
Other fields of the `features` object are available for the standard branding and are described [here](customization-standard-branding.md#features). Only the `features.spellcheck.change` field requires additional payment.
:::

:::note
Deprecated since version 9.0.4.
:::

**Example**: `true`

## font

**type:** `object`

Defines the font for the interface elements (buttons, tabs, etc.).

**Example**:

``` ts
const font = {
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

Defines the parameters that the user can use to hide the interface elements but not to disable features completely (for example, if this functionality is available from other elements such as context menu, or via hotkeys).

**Example**:

``` ts
const layout = {
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

Defines the editor header settings.

**Example**:

``` ts
const header = {
  editMode: true,
  save: true,
  user: true,
  users: true,
}
```

### layout.header.editMode

**type:** `boolean` | **default:** `true`

Defines if a button for switching editor modes will be displayed in the header or not.

**Example**: `true`

### layout.header.save

**type:** `boolean` | **default:** `true`

Defines if the **Save** button in the editor header is displayed or hidden. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to **false**.

**Example**: `true`

### layout.header.user

**type:** `boolean` | **default:** `true`

Defines if the icon with the user's avatar/initials in the editor header is displayed or hidden.

**Example**: `true`

### layout.header.users

**type:** `boolean` | **default:** `true`

Defines if the button with the editing users is displayed or hidden.

**Example**: `true`

### layout.leftMenu

**type:** `object | boolean` | **default:** `true`

Defines the left menu settings. If this parameter is a boolean value, then it specifies whether the left menu will be displayed or hidden.

**Example**:

``` ts
const leftMenu = {
  mode: true,
  navigation: true,
  spellcheck: true,
}
```

### layout.leftMenu.mode

**type:** `boolean` | **default:** `true`

Defines the initial value of the left panel visibility - displayed or hidden. It is used for the **Left panel** menu option on the **View** tab.

**Example**: `true`

### layout.leftMenu.navigation

**type:** `boolean` | **default:** `true`

Defines if the **Navigation** button is displayed or hidden. This parameter will only be available for the document editor.

**Example**: `true`

### layout.leftMenu.spellcheck

**type:** `boolean` | **default:** `true`

Defines if the **Spellcheck** button is displayed or hidden. This parameter will only be available for the spreadsheet editor.

**Example**: `true`

### layout.rightMenu

**type:** `object | boolean` | **default:** `true`

Defines the right menu settings. If this parameter is a boolean value, then it specifies whether the right menu will be displayed or hidden.

**Example**:

``` ts
const rightMenu = {
  mode: true,
}
```

### layout.rightMenu.mode

**type:** `boolean` | **default:** `true`

Defines the initial value of the right panel visibility - displayed or hidden. It is used for the **Right panel** menu option on the **View** tab.

**Example**: `true`

### layout.statusBar

**type:** `object | boolean` | **default:** `true`

Defines the status bar settings. If this parameter is a boolean value, then it specifies whether the status bar will be displayed or hidden.

**Example**:

``` ts
const statusBar = {
  actionStatus: true,
  docLang: true,
  textLang: true,
}
```

### layout.statusBar.actionStatus

**type:** `boolean` | **default:** `true`

Defines if an action status is displayed or hidden.

**Example**: `true`

### layout.statusBar.docLang

**type:** `boolean` | **default:** `true`

Defines if a button for choosing the document language is displayed or hidden. This parameter will only be available for the document editor and the presentation editor.

**Example**: `true`

### layout.statusBar.textLang

**type:** `boolean` | **default:** `true`

Defines if a button for choosing the text language is displayed or hidden. This parameter will only be available for the document editor and the presentation editor.

**Example**: `true`

### layout.toolbar

**type:** `object | boolean` | **default:** `true`

Defines the toolbar settings. If this parameter is a boolean value, then it specifies whether the toolbar will be displayed or hidden.

**Example**:

``` ts
const toolbar = {
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
}
```

### layout.toolbar.collaboration

**type:** `object | boolean` | **default:** `true`

Defines the **Collaboration** tab settings. If this parameter is a boolean value, then it specifies whether the **Collaboration** tab will be displayed or hidden.

**Example**:

``` ts
const collaboration = {
  mailmerge: true,
}
```

### layout.toolbar.collaboration.mailmerge

**type:** `boolean` | **default:** `true`

Defines if the button for choosing the mail merge base is displayed or hidden.

**Example**: `true`

### layout.toolbar.draw

**type:** `boolean` | **default:** `true`

Defines if the **Draw** tab is displayed or hidden.

**Example**: `true`

### layout.toolbar.file

**type:** `object | boolean` | **default:** `true`

Defines the **File** tab settings. If this parameter is a boolean value, then it specifies whether the **File** tab will be displayed or hidden.

**Example**:

``` ts
const file = {
  close: true,
  info: true,
  save: true,
  settings: true,
}
```

### layout.toolbar.file.close

**type:** `boolean` | **default:** `true`

Defines if the **Close menu** option is displayed or hidden.

**Example**: `true`

### layout.toolbar.file.info

**type:** `boolean` | **default:** `true`

Defines if the **Document info** option is displayed or hidden.

**Example**: `true`

### layout.toolbar.file.save

**type:** `boolean` | **default:** `true`

Defines if the **Save** option is displayed or hidden.

**Example**: `true`

### layout.toolbar.file.settings

**type:** `boolean` | **default:** `true`

Defines if the **Advanced settings** option is displayed or hidden.

**Example**: `true`

### layout.toolbar.home

**type:** `object`

Defines the **Home** tab settings. This tab cannot be hidden.

**Example**: `{}`

### layout.toolbar.home.mailmerge

**type:** `boolean`

Defines if the button for choosing the mail merge base is displayed or hidden. This parameter is deprecated, please use the *toolbar.collaboration.mailmerge* parameter instead.

**Example**: `true`

### layout.toolbar.layout

**type:** `boolean` | **default:** `true`

Defines if the **Layout** tab is displayed or hidden. This parameter will only be available for the document editor and the spreadsheet editor.

**Example**: `true`

### layout.toolbar.plugins

**type:** `boolean` | **default:** `true`

Defines if the **Plugins** tab is displayed or hidden.

**Example**: `true`

### layout.toolbar.protect

**type:** `boolean` | **default:** `true`

Defines if the **Protection** tab is displayed or hidden.

**Example**: `true`

### layout.toolbar.references

**type:** `boolean` | **default:** `true`

Defines if the **References** tab is displayed or hidden. This parameter will only be available for the document editor.

**Example**: `true`

### layout.toolbar.save

**type:** `boolean` | **default:** `true`

Defines if the **Save** button on the toolbar is displayed or hidden. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to **true**.

**Example**: `true`

### layout.toolbar.view

**type:** `object | boolean` | **default:** `true`

Defines the **View** tab settings. If this parameter is a boolean value, then it specifies whether the **View** tab will be displayed or hidden.

**Example**:

``` ts
const view = {
  navigation: true,
}
```

### layout.toolbar.view.navigation

**type:** `boolean` | **default:** `true`

Defines if the **Navigation** button is displayed or hidden. This parameter will only be available for the document editor.

**Example**: `true`

## leftMenu

**type:** `boolean` | **default:** `true`

Defines if the left menu panel is displayed or hidden.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.leftMenu](#layoutleftmenu) parameter instead.
:::

**Example**: `true`

## loaderLogo

**type:** `string`

Defines the path to the image logo which will be displayed while the document is being loaded (there are no special recommendations for this file, but it would be better if it were in .png format with transparent background). The image will be proportionally resized to the height of 160 pixels when displayed in the editors.

**Example**: `https://example.com/loader-logo.png`

## loaderName

**type:** `string`

Defines the text which will be displayed while the document is being loaded.

**Example**: `"The document is loading, please wait..."`

## rightMenu

**type:** `boolean` | **default:** `true`

Defines if the right menu panel is displayed or hidden.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.rightMenu](#layoutrightmenu) parameter instead.
:::

**Example**: `true`

## statusBar

**type:** `boolean` | **default:** `true`

Defines if the status bar is displayed or hidden.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.statusBar](#layoutstatusbar) parameter instead.
:::

**Example**: `true`

## toolbar

**type:** `boolean` | **default:** `true`

Defines if the top toolbar is displayed or hidden.

:::danger[Deprecated]
Starting from version 7.1, please use the [layout.toolbar](#layouttoolbar) parameter instead.
:::

**Example**: `true`

## Example

``` ts
const config = {
  editorConfig: {
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
