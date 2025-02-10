---
sidebar_label: Standard branding
---

The customization section allows to customize the editor interface so that it looked like your other products (if there are any) and change the presence or absence of the additional buttons, links, change logos and editor owner details.

On this page you will find the customization parameters available for the [standard branding](https://www.onlyoffice.com/developer-edition-prices.aspx?from=api) of ONLYOFFICE Docs Developer. If you have an extended white label license, please visit [White label page](Customization%20-%20White%20label.md) to find out what additional customization options are available.

> Please note that only the following parameters are available for the mobile editors: [close](#close), [feedback](#feedback), [goback](#goback), [help](#help), [logo](#logo), [macrosMode](#macrosmode), [mobile](#mobile).

## anonymous

Adds a request for the anonymous name.

Type: object

Example:

``` ts
const anonymous = {
  request: true,
  label: "Guest",
}
```

### anonymous.request

Defines if the request is sent or not. The default value is **true**.

Type: boolean

Example: true

### anonymous.label

A postfix added to the user name. The default value is **Guest**.

Type: string

Example: "Guest"

![Anonymous](/assets/images/editor/anonymous.png)

## autosave

Defines if the **Autosave** menu option is enabled or disabled. If set to **false**, only **Strict** co-editing mode can be selected, as **Fast** does not work without autosave. The default value is **true**.

Type: boolean

Example: true

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.autosave* parameter.

## chat

Defines if the **Chat** menu button is displayed or hidden. Please note that in case you hide the **Chat** button, the corresponding chat functionality will also be disabled. The default value is **true**. Deprecated since version 7.1, please use the [document.permissions.chat](../../Document/Permissions.md#chat) parameter instead.

Type: boolean

Example: true

![Chat](/assets/images/editor/chat.png)

## close

Defines settings for the cross button to close the editor.

Type: object

Example:

``` ts
const close = {
  visible: true,
  text: "Close file",
}
```

### close.visible

Defines if the cross button to close the editor is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

### close.text

Defines the tooltip text for a button in the editor header or the menu item text in the mobile editors and in the **File** menu of the web editors.

Type: string

Example: "Close file"

> Please note that it will only be available if the [onRequestClose](../../Events.md#onrequestclose) event is set. If the event is not declared and the *close* parameter is not specified, the cross button will not be displayed.

> Please note that this parameter is also available for the mobile editors.

![Cross button in the header](/assets/images/editor/cross-button.jpg)

## commentAuthorOnly

Defines if the user can edit and delete only his comments. The default value is **false**. Deprecated since version 6.3, please use the [document.permissions.editCommentAuthorOnly](../../Document/Permissions.md#editcommentauthoronly) and [document.permissions.deleteCommentAuthorOnly](../../Document/Permissions.md#deletecommentauthoronly) fields instead.

Type: boolean

Example: true

## comments

Defines if the **Comments** menu button is displayed or hidden. Please note that in case you hide the **Comments** button, the corresponding commenting functionality will be available for viewing only, adding and editing comments will be unavailable. The default value is **true**.

Type: boolean

Example: true

![Comments](/assets/images/editor/comment.png)

## compactHeader

Defines if the additional action buttons are displayed in the upper part of the editor window header next to the logo (**false**) or in the toolbar (**true**) making the header more compact. The default value is **false**.

Type: boolean

Example: false

![Compact header](/assets/images/editor/compactHeader.png)

## compactToolbar

Defines if the top toolbar type displayed is full (**false**) or compact (**true**). The default value is **false**. Starting from version 8.3, this setting is also available for the viewer. The default value for the *view* mode is **true**.

Type: boolean

Example: false

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.compactToolbar* parameter.

![Compact toolbar](/assets/images/editor/compactToolbar.png)

## compatibleFeatures

Defines the use of functionality only compatible with the OOXML format. For example, do not use comments on the entire document. The default value is **false**.

Type: boolean

Example: false

## customer

Contains the information which will be displayed in the editor **About** section and visible to all the editor users.

> This parameter is available for editing only for ONLYOFFICE Docs Developer.

Type: object

Example:

``` ts
const customer = {
  address: "My City, 123a-45",
  info: "Some additional information",
  logo: "https://example.com/logo-big.png",
  logoDark: "https://example.com/dark-logo-big.png",
  mail: "john@example.com",
  name: "John Smith and Co.",
  phone: "123456789",
  www: "example.com",
}
```

### customer.address

Postal address of the company or person who gives access to the editors or the editor authors.

Type: string

Example: "My City, 123a-45"

### customer.info

Some additional information about the company or person you want the others to know.

Type: string

Example: "Some additional information"

### customer.logo

The path to the image logo (there are no special recommendations for this file, but it would be better if it was in the *.png* format with transparent background). The image must have the following size: 432x70.

Type: string

Example: `https://example.com/logo-big.png`

### customer.logoDark

The path to the image logo for the dark theme (there are no special recommendations for this file, but it would be better if it was in *.png* format with transparent background). The image must have the following size: 432x70.

Type: string

Example: `https://example.com/dark-logo-big.png`

### customer.mail

Email address of the company or person who gives access to the editors or the editor authors.

Type: string

Example: `john@example.com`

### customer.name

The name of the company or person who gives access to the editors or the editor authors.

Type: string

Example: "John Smith and Co."

### customer.phone

The phone of the company or person who gives access to the editors or the editor authors.

Type: string

Example: "123456789"

### customer.www

Home website address of the above company or person.

Type: string

Example: "example.com"

![Customer](/assets/images/editor/customer.png)

## features

Defines the parameters that the user can disable or customize if possible.

Type: object

Example:

``` ts
const features = {
  roles: true,
  spellcheck: {
    mode: true,
  },
  tabBackground: {
    mode: "header",
    change: true,
  },
  tabStyle: {
    mode: "fill",
    change: true,
  },
}
```

### features.roles

Defines if the role settings will be disabled in the pdf forms or not. If the parameter is equal to **false**, then the role manager is hidden and viewing the form on behalf of a specific role is disabled. In this case, the **Manage Roles** and **View Form** buttons on the **Forms** tab and a drop-down list for setting the field role in the right panel will not be displayed. The default value is **true**.

> This parameter is available for editing only for ONLYOFFICE Docs Developer.

Type: boolean

Example: true

### features.spellcheck

Defines if the spell checker is automatically switched on or off when the editor is loaded. If this parameter is a boolean value, then it is set as the initial spell checker value and the spell checker setting will not be hidden. The default value is **true**.

Type: object or boolean

Example: true

### features.spellcheck.mode

Defines if the spell checker is automatically switched on or off when the editor is loaded. This parameter will only be available for the document editor and the presentation editor.

Type: boolean

Example: true

> Please note that in case *spellcheck* setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.features.spellcheck* parameter.

### features.tabBackground

Defines the background of the top toolbar tabs. If this parameter is a string value (**header** or **toolbar**), then it is set as the initial tab background value and the tab background setting will not be hidden. The default value is **header**.

Type: object or string

Example: "header"

### features.tabBackground.mode

Defines if the background of the top toolbar tabs matches the header background (**header**) or the toolbar background (**toolbar**). The default value is **header**. This value is used when the editor is first opened.

Type: string

Example: "header"

### features.tabBackground.change

Defines if the tab background setting will be displayed in the **File -> Advanced settings** or not. This setting is available in all editor types.

Type: boolean

Example: true

![Tab background](/assets/images/editor/tab-background.png)

### features.tabStyle

Defines the style of the top toolbar tabs. If this parameter is a string value (**fill** or **line**), then it is set as the initial tab style value and the tab style setting will not be hidden. The default value is **fill**.

Type: object or string

Example: "fill"

### features.tabStyle.mode

Defines if the top toolbar tabs are distinctly displayed (**fill**) or only highlighted to see which one is selected (**line**). The default value is **fill**. This value is used when the editor is first opened.

Type: string

Example: "fill"

### features.tabStyle.change

Defines if the tab style setting will be displayed in the **File -> Advanced settings** or not. This setting is available in all editor types.

Type: boolean

Example: true

![Tab style](/assets/images/editor/tab-style.png)

## feedback

Defines settings for the **Feedback & Support** menu button. Can be either boolean (simply displays or hides the **Feedback & Support** menu button) or object.

The default value is **false**.

Type: boolean or object

Example: true

> Please note that this parameter is also available for the mobile editors.

![Feedback](/assets/images/editor/feedback.png)

### feedback.url

The absolute URL to the website address which will be opened when clicking the **Feedback & Support** menu button.

Type: string

Example: `https://example.com`

### feedback.visible

Shows or hides the **Feedback & Support** menu button.

Type: boolean

Example: true

## forcesave

Adds the request for the file force saving to the [callback handler](../../../Callback%20handler.md#forcesavetype) when saving the document within the **document editing service** (e.g. clicking the **Save** button, etc.). The default value is **false**.

Type: boolean

Example: false

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.forcesave* parameter.

## goback

Defines settings for the **Open file location** menu button and upper right corner button.

Type: object

Example:

``` ts
const goback = {
  blank: true,
  text: "Open file location",
  url: "https://example.com",
}
```

> Please note that this parameter is also available for the mobile editors.

![Go back](/assets/images/editor/goback.png)

### goback.blank

Opens the website in the new browser tab/window (if the value is set to **true**) or the current tab (if the value is set to **false**) when the **Open file location** button is clicked. The default value is **true**.

Type: boolean

Example: true

### goback.requestClose

Defines that if the **Open file location** button is clicked, [events.onRequestClose](../../Events.md#onrequestclose) event is called instead of opening a browser tab or window. Deprecated since version 8.1. Please use the [close](#close) parameter instead.

Type: boolean

Example: false

### goback.text

The text which will be displayed for the **Open file location** menu button and upper right corner button (i.e. instead of *Go to Documents*).

Type: string

Example: "Open file location"

### goback.url

The absolute URL to the website address which will be opened when clicking the **Open file location** menu button.

Type: string

Example: `https://example.com`

## help

Defines if the **Help** menu button is displayed or hidden. The default value is **true**.

Type: boolean

Example: true

> Please note that this parameter is also available for the mobile editors.

![Help](/assets/images/editor/help.png)

## hideNotes

Defines if the note panel is displayed or hidden on first loading. The default value is **false**. This parameter is available for the presentation editor only.

Type: boolean

Example: false

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.hideNotes* parameter.

![Hide notes](/assets/images/editor/hideNotes.png)

## hideRightMenu

Defines if the right menu is displayed or hidden on first loading. The default value is **true**.

Type: boolean

Example: true

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.hideRightMenu* parameter.

## hideRulers

Defines if the editor rulers are displayed or hidden. This parameter is available for the document and presentation editors. The default value is **false** for the document editor and **true** for presentations.

Type: boolean

Example: false

![Hide rulers](/assets/images/editor/hideRulers.png)

## integrationMode

Defines the mode of embedding editors into the web page. The **embed** value disables scrolling to the editor frame when it is loaded as the focus is not captured.

Type: string

Example: "embed"

## logo

Changes the image file at the top left corner of the editor header. The recommended image height is 20 pixels.

> This parameter is available for editing only for ONLYOFFICE Docs Developer.

Type: object

Example:

``` ts
const logo = {
  image: "https://example.com/logo.png",
  imageDark: "https://example.com/dark-logo.png",
  imageLight: "https://example.com/light-logo.png",
  url: "https://example.com",
  visible: true,
}
```

> Please note that this parameter is also available for the mobile editors.

![Logo](/assets/images/editor/logo.png)

### logo.image

Path to the image file used to show in the common work mode (i.e. in view and edit modes for all editors) or in the embedded mode (see the [config](../../Config.md#type) section to find out how to define the **embedded** document type). The image must have the following size: 172x40.

Type: string

Example: `https://example.com/logo.png`

### logo.imageDark

Path to the image file used for the dark header (for example, in a dark theme or in a theme with a colored header). The image must have the following size: 172x40.

Type: string

Example: `https://example.com/dark-logo.png`

### logo.imageLight

Path to the image file used for the light header (for example, in the Gray theme). The image must have the following size: 172x40.

Type: string

Example: `https://example.com/light-logo.png`

### logo.imageEmbedded

Path to the image file used to show in the embedded mode (see the [config](../../Config.md#type) section to find out how to define the **embedded** document type). The image must have the following size: 248x40. Deprecated since version 7.0, please use the *image* field instead.

Type: string

Example: `https://example.com/logo_em.png`

### logo.url

The absolute URL which will be used when someone clicks the logo image (can be used to go to your web site, etc.). Leave as an empty string or *null* to make the logo not clickable.

Type: string

Example: `https://example.com`

### logo.visible

Shows or hides the logo. The default value is **true**.

Type: boolean

Example: true

## macros

Defines if document macros will be automatically run when the editor opens. The default value is **true**. The **false** value hides the [macros settings](#macrosmode) from the user.

Type: boolean

Example: true

## macrosMode

Defines the macros run mode when autostart is enabled. Can take the following values:

- **disable** - don't run macros at all;
- **enable** - run all macros automatically;
- **warn** - warn about macros and ask permission to run them.

The default value is **warn**.

Type: string

Example: "warn"

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.macrosMode* parameter.

> Please note that this parameter is also available for the mobile editors.

## mentionShare

Defines the hint that describes the event after mentions in a comment. If **true**, a hint indicates that the user will receive a notification and access to the document. If **false**, a hint indicates that the user will receive only a notification of the mention. The default value is **true**.

Type: boolean

Example: true

> Please note that it will only be available for the comments if the [onRequestSendNotify](../../Events.md#onrequestsendnotify) event is set.

<img alt="Mention share" src="/assets/images/editor/mentionShare.png" width="379px" />

## mobile

Defines the mobile document editor settings.

Type: object

Example:

``` ts
const mobile = {
  forceView: true,
  info: false,
  standardView: false,
}
```

> Please note that this parameter is only available for the mobile editors.

### mobile.forceView

Defines whether the view mode is enabled on launch in the mobile document editor. The default value is **true**.

Type: boolean

Example: true

### mobile.info

Defines whether the **Document Info** button is displayed or hidden in the mobile document editor. The default value is **false**.

Type: boolean

Example: false

### mobile.standardView

Defines whether the editor will be opened in **Standard view** instead of **Mobile view**. The default value is **false**.

Type: boolean

Example: false

## mobileForceView

Defines if the mobile document editor is opened in the view/edit mode on launch. The default value is **true**.

Type: boolean

Example: true

> Please note that this parameter is only available for the mobile editors.

> Deprecated since version 8.2. Please use the [mobile](#mobile) parameter instead.

## plugins

Defines if [plugins](../../../../../Plugin%20and%20Macros/Get%20Started/Overview.md) will be launched and available. The default value is **true**.

Type: boolean

Example: true

## pointerMode

Defines the pointer mode (**select** or **hand**) when the presentation editor is loaded in the viewer. The default value is **select**.

Type: string

Example: "select"

![Pointer mode](/assets/images/editor/pointerMode.png)

## review

Contains the information about the review mode.

Type: object

Example:

``` ts
const review = {
  hideReviewDisplay: false,
  showReviewChanges: false,
  reviewDisplay: "original",
  trackChanges: true,
  hoverMode: false,
}
```

> The [showReviewChanges](#showreviewchanges), [reviewDisplay](#reviewdisplay), [trackChanges](#trackchanges) parameters are deprecated since version 7.0. Please use the *review* parameter instead.

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.review\.hoverMode* and the *editorConfig.customization.review\.reviewDisplay* parameters.

![Review display](/assets/images/editor/reviewDisplay.png)

### review.hideReviewDisplay

Defines if the **Display mode** button is displayed or hidden on the **Collaboration** tab. The default value is **false**.

Type: boolean

Example: false

### review.hoverMode

Defines the review display mode: show reviews in tooltips by hovering the changes (**true**) or in balloons by clicking the changes (**false**). The default value is **false**.

Type: boolean

Example: false

### review.reviewDisplay

Defines the review editing mode which will be used when the document is opened for viewing. It will only be available for the document editor if [mode](../../Editor/Editor.md#mode) is set to **view**. Can take the following values:

- **markup** - the document is displayed with proposed changes highlighted;
- **simple** - the document is displayed with proposed changes highlighted, but the balloons are turned off;
- **final** - the document is displayed with all the proposed changes applied;
- **original** - the original document is displayed without the proposed changes.

The default value is **original**.

Type: string

Example: "original"

### review.showReviewChanges

Defines if the review changes panel is automatically displayed or hidden when the editor is loaded. The default value is **false**.

Type: boolean

Example: false

### review.trackChanges

Defines if the document is opened in the review editing mode (**true**) or not (**false**) regardless of the [document.permissions.review](../../Document/Permissions.md#review) parameter (the review mode is changed only for the current user). If the parameter is *undefined*, the *document.permissions.review* value is used (for all the document users).

Type: boolean

Example: true

## reviewDisplay

Defines the review editing mode in the document editor. This parameter can take the following values:

- **markup** - the document is displayed with proposed changes highlighted;
- **simple** - the document is displayed with proposed changes highlighted, but the balloons are turned off;
- **final** - the document is displayed with all the proposed changes applied;
- **original** - the original document is displayed without the proposed changes.

The default value is **original** for viewer and **markup** for editor.                                                                   

Type: string

Example: "original"

> Deprecated since version 7.0. Please use the [review.reviewDisplay](#review) parameter instead.

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.reviewDisplay* parameter.

## showReviewChanges

Defines if the review changes panel is automatically displayed or hidden when the editor is loaded. The default value is **false**.

Type: boolean

Example: false

> Deprecated since version 7.0. Please use the [review.showReviewChanges](#review) parameter instead.

## slidePlayerBackground

Starting from version 8.3, defines the background color for the slide show in the presentation editor. Can be represented in the HEX, RGB, or RGBA formats. For example, *#ff0000*, *rgb(255, 0, 0)*, *rgba(255, 0, 0, 0.5)*.

Type: string

Example: "#000000"

## spellcheck

Defines if the spell checker is automatically switched on or off when the editor is loaded. Spell checker will only be available for the document editor and the presentation editor. The default value is **true**.

Type: boolean

Example: true

> Deprecated since version 7.1. Please use the [features.spellcheck](#features) parameter instead.

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.spellcheck* parameter.

## submitForm

Starting from version 8.3, defines the **Complete & Submit** button settings. If this parameter is a boolean value, then it specifies whether the **Complete & Submit** button will be displayed or hidden on the top toolbar. Button will only be available for the *pdf* format. The default value is **true**.

Type: object or boolean

Example: true

![Submit button](/assets/images/editor/submitForm.png)
![Submit button](/assets/images/editor/submitForm-message.png)

### submitForm.visible

Defines whether the **Complete & Submit** button will be displayed or hidden on the top toolbar. Button will only be available for the *pdf* format. The default value is **true**.

Type: boolean

Example: true

### submitForm.resultMessage

Defines a message displayed after forms are submitted. The following values are available:

- **""** - the message will not be displayed;
- **null / undefined** - the default message will be displayed;
- **"text"** - any text that the user specifies will be displayed.

Type: string

Example: "text"

## toolbarHideFileName

Defines if the document title is visible on the top toolbar (**false**) or hidden (**true**). The default value is **false**.

Type: boolean

Example: false

> Please note that this setting is used when the [compactHeader](#compactheader) and [toolbarNoTabs](#toolbarnotabs) parameters are set to **true**.

![Toolbar hide file name](/assets/images/editor/toolbarHideFileName.png)

## toolbarNoTabs

Defines if the top toolbar tabs are distinctly displayed (**false**) or only highlighted to see which one is selected (**true**). The default value is **false**. Deprecated since version 8.2, please use the [editorConfig.customization.features.tabStyle](#featurestabstyle) parameter which is set to **line** and the [editorConfig.customization.features.tabBackground](#featurestabbackground) parameter which is equal to **toolbar**.

Type: boolean

Example: false

## trackChanges

Defines if the document is opened in the review editing mode (**true**) or not (**false**) regardless of the [document.permissions.review](../../Document/Permissions.md#review) parameter (the review mode is changed only for the current user). If the parameter is *undefined*, the *document.permissions.review* value is used (for all the document users). 

Type: boolean

Example: true

> Deprecated since version 7.0. Please use the [review.trackChanges](#review.trackchanges) parameter instead.

## uiTheme

Defines the editor theme settings. It can be set in two ways:

- **theme id** - the user sets the theme parameter by its id (**theme-light**, **theme-classic-light**, **theme-dark**, **theme-contrast-dark**);
- **default theme** - the default dark or light theme value will be set (**default-dark**, **default-light**). The default light theme is **theme-classic-light**.

The first option has higher priority.

Apart from the available editor themes, the user can also customize their own [color themes](https://helpcenter.onlyoffice.com/installation/docs-developer-change-theme.aspx) for the application interface.

Type: string

Example: "theme-dark"

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.uiTheme* parameter.

## unit

Defines the measurement units used on the ruler and in dialog boxes. Can take the following values:

- **cm** - centimeters;
- **pt** - points;
- **inch** - inches.

The default value is centimeters (**cm**).

Type: string

Example: "cm"

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.unit* parameter.

## wordHeadingsColor

Starting from version 8.3, defines the HEX color for the default heading styles in the document editor.

Type: string

Example: "#00ff00"

## zoom

Defines the document display zoom value measured in percent. Can take values larger than **0**. For text documents and presentations it is possible to set this parameter to **-1** (fitting the document to page option) or to **-2** (fitting the document page width to the editor page). The default value is **100**.

Type: integer

Example: 100

> Please note that in case this setting is changed in the editor interface, it will be stored in the browser local storage and will overwrite any values sent as the *editorConfig.customization.zoom* parameter.

![Customization](/assets/images/editor/customization.png)

## Example

``` ts
const docEditor = new DocsAPI.DocEditor("placeholder", {
  editorConfig: {
    customization: {
      anonymous: {
        request: true,
        label: "Guest",
      },
      autosave: true,
      close: {
        visible: true,
        text: "Close file",
      },
      comments: true,
      compactHeader: false,
      compactToolbar: false,
      compatibleFeatures: false,
      customer: {
        address: "My City, 123a-45",
        info: "Some additional information",
        logo: "https://example.com/logo-big.png",
        logoDark: "https://example.com/dark-logo-big.png",
        mail: "john@example.com",
        name: "John Smith and Co.",
        phone: "123456789",
        www: "example.com",
      },
      features: {
        roles: true,
        spellcheck: {
          mode: true,
        },
        tabBackground: {
          mode: "header",
          change: true,
        },
        tabStyle: {
          mode: "fill",
          change: true,
        },
      },
      feedback: {
        url: "https://example.com",
        visible: true,
      },
      forcesave: false,
      goback: {
        blank: true,
        text: "Open file location",
        url: "https://example.com",
      },
      help: true,
      hideNotes: false,
      hideRightMenu: true,
      hideRulers: false,
      integrationMode: "embed",
      logo: {
        image: "https://example.com/logo.png",
        imageDark: "https://example.com/dark-logo.png",
        imageLight: "https://example.com/light-logo.png",
        url: "https://example.com",
        visible: true,
      },
      macros: true,
      macrosMode: "warn",
      mentionShare: true,
      mobile: {
        forceView: true,
        info: false,
        standardView: false,
      },
      plugins: true,
      pointerMode: "select",
      review: {
        hideReviewDisplay: false,
        showReviewChanges: false,
        reviewDisplay: "original",
        trackChanges: true,
        hoverMode: false,
      },
      slidePlayerBackground: "#000000",
      submitForm: {
        visible: true,
        resultMessage: "text",
      },
      toolbarHideFileName: false,
      uiTheme: "theme-dark",
      unit: "cm",
      wordHeadingsColor: "#00ff00",
      zoom: 100,
    },
  },
})
```

The **example.com** is the name of the server where **document manager** and **document storage service** are installed. See the [How it works](../../../../Get%20Started/How%20It%20Works/How%20It%20Works.md) section to find out more on ONLYOFFICE Docs service client-server interactions.
