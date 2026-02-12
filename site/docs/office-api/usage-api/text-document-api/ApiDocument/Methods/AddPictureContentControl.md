# AddPictureContentControl

Adds a new picture content control to the document.

## Syntax

```javascript
expression.AddPictureContentControl(width, height);
```

`expression` - A variable that represents a [ApiDocument](../ApiDocument.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Optional | [EMU](../../Enumeration/EMU.md) |  | The optional width of the image. |
| height | Optional | [EMU](../../Enumeration/EMU.md) |  | The optional height of the image. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

This example shows how to add a picture content control to a document:

```javascript editor-docx
let doc = Api.GetDocument();
doc.AddPictureContentControl();
```
