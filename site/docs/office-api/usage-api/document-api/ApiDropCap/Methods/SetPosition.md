# SetPosition

Sets the drop cap type.

## Syntax

```javascript
expression.SetPosition(position);
```

`expression` - A variable that represents an [ApiDropCap](../ApiDropCap.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | "none" \| "drop" \| "margin" |  | The drop cap type: "none" removes the drop cap, "drop" places it within the text, "margin" places it in the margin. |

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## Example

Change the type of a drop cap between in-text and in-margin in a document.

```javascript editor-docx
// Move a drop cap from the text into the margin in a document.

// Switch an existing in-text drop cap to an in-margin drop cap in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetPosition('margin');
```
