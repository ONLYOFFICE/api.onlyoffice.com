# SetDropCap

Creates a drop cap from the first letter of the current paragraph. A drop cap is a large initial letter that drops down two or more lines.

## Syntax

```javascript
expression.SetDropCap(position);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | "none" \| "drop" \| "margin" |  | The drop cap type: "none" removes the drop cap, "drop" places it within the text, "margin" places it in the margin. |

## Returns

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## Example

Turn the first letter of a paragraph into a drop cap in a document.

```javascript editor-docx
// How do I make the first letter of a paragraph a large drop cap in a document?

// Split the first letter into a decorative initial and adjust its size through the returned drop cap object.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(4);
```
