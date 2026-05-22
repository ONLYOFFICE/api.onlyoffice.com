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

Insert a picture placeholder field into a paragraph in a document.

```javascript editor-docx
// How do I add an image placeholder that users can click to insert a picture in a document?

// Place a fixed-size picture content control inside a new paragraph in a document.

let doc = Api.GetDocument();
let cc = Api.CreatePictureContentControl(2000000, 2000000);
let paragraph = Api.CreateParagraph();
paragraph.Push(cc);
doc.Push(paragraph);
```
