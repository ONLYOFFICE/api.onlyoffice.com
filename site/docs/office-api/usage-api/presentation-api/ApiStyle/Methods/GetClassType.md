# GetClassType

Returns a type of the ApiStyle class.

## Syntax

```javascript
expression.GetClassType();
```

`expression` - A variable that represents an [ApiStyle](../ApiStyle.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

"style"

## Example

Get the class type of the ApiStyle object in a presentation.

```javascript editor-pptx
// Helps when checking the class type of a table style.

// Get a table style from the presentation and display its class type.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const table = Api.CreateTable(3, 3);
const style = presentation.GetStyle("Dark Style 1 - Accent 2");
table.SetStyle(style);
const paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + style.GetClassType());
table.GetCell(0, 0).GetContent().Push(paragraph);
slide.RemoveAllObjects();
slide.AddObject(table);
```
