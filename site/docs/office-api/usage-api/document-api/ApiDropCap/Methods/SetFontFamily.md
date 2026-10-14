# SetFontFamily

Sets the font family of the drop cap letter.

## Syntax

```javascript
expression.SetFontFamily(fontFamily);
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fontFamily | Optional | string \| null |  | The font family name used for the drop cap letter. Pass *null* or omit it to remove the font family. |

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## Example

Set the font family of a drop cap letter in a document.

```javascript editor-docx
// Use a different font for the drop cap letter of a paragraph in a document.

// Apply a specific font family to the decorative initial letter of a paragraph in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetFontFamily('Times New Roman');
```
