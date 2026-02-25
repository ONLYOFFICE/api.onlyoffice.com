# GetClassType

Returns the type of the ApiTableRow class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents a [ApiTableRow](../ApiTableRow.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"tableRow"

## Example

This example gets a class type and pastes it into the presentation.

```javascript editor-pptx playground
// How to get a class type of ApiTableRow.

// Retrieve class type of ApiTableRow object and insert it to the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);

const table = Api.CreateTable(2, 4);
const row = table.GetRow(0);
const cell = row.GetCell(0);
const content = cell.GetContent();
const paragraph = Api.CreateParagraph();
const classType = row.GetClassType();
paragraph.AddText("Class type: " + classType);
content.Push(paragraph);

slide.RemoveAllObjects();
slide.AddObject(table);

```
