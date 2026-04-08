# GetColumnsSpaces

Returns an array of distance values between the columns measured in twentieths of a point (1/1440 of an inch).

## Syntax

```javascript
expression.GetColumnsSpaces();
```

`expression` - A variable that represents a [ApiSection](../ApiSection.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[twips](../../Enumeration/twips.md)[]

## Example

This example specifies that all the columns in the current section have the different widths.

```javascript editor-docx
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let section = doc.GetFinalSection();
section.SetNotEqualColumns([1440, 2880, 4320], [720, 480]);
let columnsCount = section.GetColumnsCount();
let columnsWidths = section.GetColumnsWidths();
let columnsSpaces = section.GetColumnsSpaces();
paragraph.AddText("This is a text split into " + columnsCount + " non-equal columns. ");
paragraph.AddText("The first column is 1 inch wide (" + columnsWidths[0] + " twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #2. ");
paragraph.AddText("This column is 2 inches wide (" + columnsWidths[1] + " twentieths of a point). ");
paragraph.AddText("The distance between this column and column #1 is half an inch (" + columnsSpaces[0] + " twentieths of a point).");
paragraph.AddColumnBreak();
paragraph.AddText("This text starts from column #3. ");
paragraph.AddText("This column is 3 inches wide (" + columnsWidths[2] + " twentieths of a point). ");
paragraph.AddText("The distance between this column and column #2 is 1/3 of an inch (" + columnsSpaces[1] + " twentieths of a point).");
```
