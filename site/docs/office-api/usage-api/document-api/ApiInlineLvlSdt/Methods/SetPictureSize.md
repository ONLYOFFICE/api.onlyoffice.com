# SetPictureSize

Sets the size for the picture in a content control.
This method adjusts the width and height of the image if the content control is a picture.

## Syntax

```javascript
expression.SetPictureSize(width, height);
```

`expression` - A variable that represents a [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Required | [EMU](../../Enumeration/EMU.md) |  | The desired image width . |
| height | Required | [EMU](../../Enumeration/EMU.md) |  | The desired image height. |

## Returns

boolean

## Example

Set the size of an image in a content control in a document.

```javascript editor-docx
// How can I set picture size using an inline content control in a document?

// Set picture size for an inline content control in a document.

let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);
```
