# SetImageURL

Sets the image URL of the watermark in the document.

## Syntax

```javascript
expression.SetImageURL(sURL);
```

`expression` - A variable that represents a [ApiWatermarkSettings](../ApiWatermarkSettings.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sURL | Required | string |  | The watermark image URL. |

## Returns

boolean

## Example

Assign a web image as the watermark in a document.

```javascript editor-docx
// How do I point the watermark to an image hosted online in a document?

// Use a remote image as the background watermark in a document.

let doc = Api.GetDocument();
let watermarkSettings = doc.GetWatermarkSettings();
watermarkSettings.SetType("image");
watermarkSettings.SetImageURL("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png");
watermarkSettings.SetImageSize(36000 * 70, 36000 * 80);
watermarkSettings.SetDirection("clockwise45");
watermarkSettings.SetOpacity(200);
doc.SetWatermarkSettings(watermarkSettings);
```
