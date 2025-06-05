# Add comment in cell

Adds comments to a cell of the spreadsheet.

**Plugin type:** visual, non-system.

**Supported editors:** spreadsheets.

![AddCommentInCell](/assets/images/plugins/gifs/add-comment-in-cell.gif)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_add_comment_in_cell) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Select the cell you want to comment on.
2. Open the **Plugins** tab and press **Example add comment in cell**.
3. Enter the comment text in the field and press the **Add comment** button.

## Plugin structure

Repository on GitHub: [example_add_comment_in_cell](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_add_comment_in_cell).

1. *config.json*, *index.html*, and *code.js*
2. Icons

## Config

``` json
{
  "name": "Example add comment",
  "guid": "asc.{89643394-0F74-4297-9E0B-541A67F1E98C}",

  "variations": [
    {
      "description": "Example add comment",
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
      "EditorsSupport": ["cell"],

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

- button
- init
- [callCommand](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#callcommand)
- [Asc.scope](/docs/plugin-and-macros/interacting-with-editors/overview/how-to-call-commands.md#ascscope-object) object

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
