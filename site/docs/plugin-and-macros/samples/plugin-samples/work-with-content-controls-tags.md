# Work with content controls tags

Gets the list of content controls tags.

**Plugin type:** visual, non-system.

**Supported editors:** documents.

![WorkWithContentControlsTags](/assets/images/plugins/gifs/work-with-content-controls-tags.gif)

## Installation

Download this plugin from [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_tags) and install it following the [desktop](/docs/plugin-and-macros/tutorials/installing/onlyoffice-desktop-editors.md), [on-premises](/docs/plugin-and-macros/tutorials/installing/onlyoffice-docs-on-premises.md), or [cloud](/docs/plugin-and-macros/tutorials/installing/onlyoffice-cloud.md) installation instructions.

## Usage

1. Add some content controls to the document. Set any tags for them
2. Open the **Plugins** tab and press **Example work with content controls tags**.
3. In the plugin window, you can see all the content controls tags. Press the **Refresh list** button to update the list.
4. Press the **Test paste for document** button to paste text into the document (where the text cursor is located).

## Known limitations

- Only lists tags of existing content controls — empty or untagged controls will not appear in the results.
- Repeated or duplicate tags may cause confusion when identifying specific content controls.
- Large documents with many content controls may slow down refresh performance.

## Plugin structure

Repository on GitHub: [https://github.com/ONLYOFFICE/sdkjs-plugins/tree/develop/example\_work\_with\_content\_controls\_tags](https://github.com/ONLYOFFICE/sdkjs-plugins/tree/master/example_work_with_content_controls_tags).

1. *config.json*, *index.html*, and *code.js*
   
2. Icons
   
3. Third-party service:
   
   - [jQuery](https://jquery.com) - a fast and concise JavaScript Library that simplifies HTML document traversing, event handling, animating, and Ajax interactions for rapid web development. License: [MIT License](https://github.com/ONLYOFFICE/sdkjs-plugins/blob/master/example_work_with_content_controls_tags/licenses/jQuery.license).

## Config

``` json
{
  "name": "Example work with content controls tags",
  "guid": "asc.{C36DDFB5-08F0-4A68-B829-5FB1F7D49331}",

  "variations": [
    {
      "description": "Example work with content controls tags",
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

      "buttons": [],

      "initOnSelectionChanged": false
    }
  ]
}
```

## Methods and events

- button
- init
- onMethodReturn
- executeMethod ("GetAllContentControls")
- [executeMethod ("PasteText")](/docs/plugin-and-macros/interacting-with-editors/text-document-api/Methods/PasteText.md)
- executeMethod ("SelectContentControl")

## Best practices

- Use this plugin when working with structured templates (contracts, forms, reports) that rely on tags for automation.
- Helpful for debugging template setups by quickly verifying which tags exist and where they are applied.
- Combine with other content control plugins (navigation and content insertion) to build end-to-end workflows: locate → check tag → insert/update values.

## Support

If you want to request a feature or report a bug regarding this plugin, use the issues section on [GitHub](https://github.com/ONLYOFFICE/sdkjs-plugins/issues).
