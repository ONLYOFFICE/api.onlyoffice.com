# GetElementIndex

Returns the position (index) of the specified element within the current paragraph.

## Syntax

```javascript
expression.GetElementIndex(element);
```

`expression` - A variable that represents an [ApiParagraph](../ApiParagraph.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| element | Required | [ParagraphContent](../../Enumeration/ParagraphContent.md) |  | The inline element (run, inline content control, form, etc.) whose index will be returned. |

## Returns

Number

## Example

Determine the index of an inline element inside a paragraph.

```javascript editor-docx
// The index reflects the position of a specific run within its paragraph.

// Locate a run inside a paragraph and report its index back into the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Start ");
let run = Api.CreateRun();
run.AddText("target run");
paragraph.AddElement(run);
paragraph.AddText(" end");
doc.Push(paragraph);
let index = paragraph.GetElementIndex(run);
let report = Api.CreateParagraph();
report.AddText("The target run is at index " + index + ".");
doc.Push(report);
```
