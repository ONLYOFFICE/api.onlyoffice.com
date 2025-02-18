---
sidebar_label: White label
---

# Customization - White label

The customization section allows to customize the editor interface so that it looked like your other products (if there are any) and change the presence or absence of the additional buttons, links, change logos and editor owner details.

On this page you will find the customization parameters available only for the [extended white label license](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) of ONLYOFFICE Docs Developer. To request a quote, please contact our sales team at [sales@onlyoffice.com](mailto:sales@onlyoffice.com).

## about

Defines if the **About** menu button is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

## features.spellcheck.change

Defines if the spell checker setting will be displayed or not. Spell checker setting is available in all editor types.

> Please note that other fields of the `features` object are available for the standard branding and are described [here](customization-standard-branding.md#features). Only the `features.spellcheck.change` field requires additional payment.

Type: boolean

Example: true

## font

Defines the font for the interface elements (buttons, tabs, etc.).

Type:  object

Example:

``` ts
const font = {
  name: "Arial",
  size: "11px",
}
```

### font.name

The font name.

Type: string

Example: "Arial"

### font.size

The font size.

Type: string

Example: "11px"

## layout

Defines the parameters that the user can use to hide the interface elements but not to disable features completely (for example, if this functionality is available from other elements such as context menu, or via hotkeys).

Type:  object

Example:

``` ts
const layout = {
  header: {
    editMode: true,
    save: true,
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

Defines the editor header settings.

Type: object

Example:

``` ts
const header = {
  editMode: true,
  save: true,
  users: true,
}
```

### layout.header.editMode

Defines if a button for switching editor modes will be displayed in the header or not. The default value is **true**.

Type: boolean

Example: true

### layout.header.save

Defines if the **Save** button in the editor header is displayed or hidden. The default value is **true**. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to **false**.

Type: boolean

Example: true

### layout.header.users

Defines if the button with the editing users is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.leftMenu

Defines the left menu settings. If this parameter is a boolean value, then it specifies whether the left menu will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const leftMenu = {
  mode: true,
  navigation: true,
  spellcheck: true,
}
```

### layout.leftMenu.mode

Defines the initial value of the left panel visibility - displayed or hidden. It is used for the **Left panel** menu option on the **View** tab. The default value is **true**.

Type: boolean

Example: true

### layout.leftMenu.navigation

Defines if the **Navigation** button is displayed or hidden. The default value is **true**. This parameter will only be available for the document editor.

Type: boolean

Example: true

### layout.leftMenu.spellcheck

Defines if the **Spellcheck** button is displayed or hidden. The default value is **true**. This parameter will only be available for the spreadsheet editor.

Type: boolean

Example: true

### layout.rightMenu

Defines the right menu settings. If this parameter is a boolean value, then it specifies whether the right menu will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const rightMenu = {
  mode: true,
}
```

### layout.rightMenu.mode

Defines the initial value of the right panel visibility - displayed or hidden. It is used for the **Right panel** menu option on the **View** tab. The default value is **true**.

Type: boolean

Example: true

### layout.statusBar

Defines the status bar settings. If this parameter is a boolean value, then it specifies whether the status bar will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const statusBar = {
  actionStatus: true,
  docLang: true,
  textLang: true,
}
```

### layout.statusBar.actionStatus

Defines if an action status is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.statusBar.docLang

Defines if a button for choosing the document language is displayed or hidden. The default value is **true**. This parameter will only be available for the document editor and the presentation editor.

Type: boolean

Example: true

### layout.statusBar.textLang

Defines if a button for choosing the text language is displayed or hidden. The default value is **true**. This parameter will only be available for the document editor and the presentation editor.

Type: boolean

Example: true

### layout.toolbar

Defines the toolbar settings. If this parameter is a boolean value, then it specifies whether the toolbar will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

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

Defines the **Collaboration** tab settings. If this parameter is a boolean value, then it specifies whether the **Collaboration** tab will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const collaboration = {
  mailmerge: true,
}
```

### layout.toolbar.collaboration.mailmerge

Defines if the button for choosing the mail merge base is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.draw

Defines if the **Draw** tab is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.file

Defines the **File** tab settings. If this parameter is a boolean value, then it specifies whether the **File** tab will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const file = {
  close: true,
  info: true,
  save: true,
  settings: true,
}
```

### layout.toolbar.file.close

Defines if the **Close menu** option is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.file.info

Defines if the **Document info** option is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.file.save

Defines if the **Save** option is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.file.settings

Defines if the **Advanced settings** option is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.home

Defines the **Home** tab settings. This tab cannot be hidden.

Type: object

Example: {}

### layout.toolbar.home.mailmerge

Defines if the button for choosing the mail merge base is displayed or hidden. This parameter is deprecated, please use the *toolbar.collaboration.mailmerge* parameter instead.

Type: boolean

Example: true

### layout.toolbar.layout

Defines if the **Layout** tab is displayed or hidden. This parameter will only be available for the document editor and the spreadsheet editor. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.plugins

Defines if the **Plugins** tab is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.protect

Defines if the **Protection** tab is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.references

Defines if the **References** tab is displayed or hidden. This parameter will only be available for the document editor. The default value is **true**.

Type: boolean

Example: true

### layout.toolbar.save

Defines if the **Save** button on the toolbar is displayed or hidden. The default value is **true**. Please note that this setting is used when the [compactHeader](customization-standard-branding.md#compactheader) parameter is set to **true**.

Type: boolean

Example: true

### layout.toolbar.view

Defines the **View** tab settings. If this parameter is a boolean value, then it specifies whether the **View** tab will be displayed or hidden. The default value is **true**.

Type: object or boolean

Example:

``` ts
const view = {
  navigation: true,
}
```

### layout.toolbar.view.navigation

Defines if the **Navigation** button is displayed or hidden. The default value is **true**. This parameter will only be available for the document editor.

Type: boolean

Example: true

## leftMenu

Defines if the left menu panel is displayed or hidden. The default value is **true**.

> Deprecated since version 7.1. Please use the [layout.leftMenu](#layoutleftmenu) parameter instead.

Type: boolean

Example: true

## loaderLogo

Defines the path to the image logo which will be displayed while the document is being loaded (there are no special recommendations for this file, but it would be better if it were in .png format with transparent background). The image will be proportionally resized to the height of 160 pixels when displayed in the editors.

Type: string

Example: `https://example.com/loader-logo.png`

## loaderName

Defines the text which will be displayed while the document is being loaded.

Type: string

Example: "The document is loading, please wait..."

## rightMenu

Defines if the right menu panel is displayed or hidden. The default value is **true**.

> Deprecated since version 7.1. Please use the [layout.rightMenu](#layoutrightmenu) parameter instead.

Type: boolean

Example: true

## statusBar

Defines if the status bar is displayed or hidden. The default value is **true**.

> Deprecated since version 7.1. Please use the [layout.statusBar](#layoutstatusbar) parameter instead.

Type: boolean

Example: true

## toolbar

Defines if the top toolbar is displayed or hidden. The default value is **true**.

> Deprecated since version 7.1. Please use the [layout.toolbar](#layouttoolbar) parameter instead.

Type: boolean

Example: true

## Example

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
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
})
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../../../get-started/how-it-works/how-it-works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
