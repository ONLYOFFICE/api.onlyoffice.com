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

Add a picture content control to a document: in a document.

```javascript editor-docx
// How can I add the picture content control using a document in a document?

// Add the picture content control for a document in a document.

let doc = Api.GetDocument();
doc.AddPictureContentControl();
```
