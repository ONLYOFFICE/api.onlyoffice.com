# CreatePictureContentControl

Creates a new picture container.

## Syntax

```javascript
expression.CreatePictureContentControl(width, height);
```

`expression` - A variable that represents a [Api](../Api.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | Optional | [EMU](../../Enumeration/EMU.md) |  | The optional image width. |
| height | Optional | [EMU](../../Enumeration/EMU.md) |  | The optional image height. |

## Returns

[ApiInlineLvlSdt](../../ApiInlineLvlSdt/ApiInlineLvlSdt.md)

## Example

Create a picture content control in a document.

```javascript editor-docx
// How can I create the picture content control in a document?

// Create the picture content control in a document.

let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
