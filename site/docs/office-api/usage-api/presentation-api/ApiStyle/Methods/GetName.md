# GetName

Returns a name of the current style.

## Syntax

```javascript
expression.GetName();
```

`expression` - A variable that represents an [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Get the name of the current table style in a presentation.

```javascript editor-pptx
// Helps when reading the name of a table style.

// Get a table style and display its name in the first cell.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Style name: " + style.GetName());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
