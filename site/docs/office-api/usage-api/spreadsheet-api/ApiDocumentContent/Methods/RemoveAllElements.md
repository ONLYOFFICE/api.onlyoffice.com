# RemoveAllElements

Removes all the elements from the current document or from the current document element.
💡 When all elements are removed, a new empty paragraph is automatically created. If you want to add
content to this paragraph, use the [ApiDocumentContent#GetElement](../../ApiDocumentContent/Methods/GetElement.md) method.

## Syntax

```javascript
expression.RemoveAllElements();
```

`expression` - A variable that represents a [ApiDocumentContent](../ApiDocumentContent.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Clear every paragraph from a shape's text area in a spreadsheet.

```javascript editor-xlsx
// How do I wipe all text content out of a shape at once in a spreadsheet?

// Reset a shape to empty before writing fresh content into it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 60 * 36000, 35 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is just a sample paragraph.");
content.RemoveAllElements();
paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("We removed all elements from the shape and added a new paragraph inside it.");
content.Push(paragraph);
```
