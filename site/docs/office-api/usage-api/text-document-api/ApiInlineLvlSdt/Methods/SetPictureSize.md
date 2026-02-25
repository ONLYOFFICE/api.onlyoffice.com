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

This example shows how to set the size of an image in a content control.

```javascript editor-docx playground
let doc = Api.GetDocument();
let inlineControl = doc.AddPictureContentControl();
inlineControl.SetPictureSize(50 * 36000, 70 * 36000);
```
