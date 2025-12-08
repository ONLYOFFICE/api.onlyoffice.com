# Add custom fields

Inserts custom fields into the document.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![AddCustomFields](/assets/images/plugins/gifs/add-custom-fields.gif)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_add) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Open the **Plugins** tab and press **Example add custom fields**.
2. To add a **simple field**, type your question and its label in the necessary fields and press the **Add simple field** button.
3. To add a **drop down field**, type your question and its label in the necessary fields and add answer options. To add an answer option, type it in the **Type your item** field and press the **Add** button. Repeat it if you need more options. To remove any answer option, select it in the combo box and press the **Remove** button. When the field is ready, press the **Add drop down field** button.
4. The field will be added in the current text cursor position.

## Plugin structure

Repository on GitHub: [example_customfields_add](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_customfields_add).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

``` json
{
  "name": "Example add custom fields",
  "guid": "asc.{4E2B5030-E1BE-41FA-BEE3-7E9BE7B5BFCF}",

  "variations": [
    {
      "description": "Example add custom fields",
      "url": "index.html",

      "icons": ["resources/light/icon.png", "resources/light/icon@2x.png"],
      "icons2": [
        {
          "style": "light",
                    
          "100%": {
            "normal": "resources/light/icon.png"
          },
          "125%": {
            "normal": "resources/light/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/light/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/light/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/light/icon@2x.png"
          }
        },
        {
          "style": "dark",
                    
          "100%": {
            "normal": "resources/dark/icon.png"
          },
          "125%": {
            "normal": "resources/dark/icon@1.25x.png"
          },
          "150%": {
            "normal": "resources/dark/icon@1.5x.png"
          },
          "175%": {
            "normal": "resources/dark/icon@1.75x.png"
          },
          "200%": {
            "normal": "resources/dark/icon@2x.png"
          }
        }
      ],
      "isViewer": false,
      "EditorsSupport": ["word"],

      "isVisual": true,
      "isModal": false,
      "isInsideMode": true,

      "initDataType": "none",
      "initData": "",

      "buttons": []
    }
  ]
}
```

## Methods and events

- [button](/docs/plugin-and-macros/customization/buttons.md)
- [init](https://api.onlyoffice.com/docs/plugin-and-macros/interacting-with-editors/overview/#how-it-works)
- [onMethodReturn](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-methods.md#how-to-call-methods)
- executeMethod ("[AddContentControl](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/AddContentControl.md)")
- executeMethod ("[InsertAndReplaceContentControls](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/InsertAndReplaceContentControls.md)")

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
