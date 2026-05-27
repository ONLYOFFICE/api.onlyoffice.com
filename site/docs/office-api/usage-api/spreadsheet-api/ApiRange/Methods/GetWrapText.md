# GetWrapText

Returns the information about the wrapping cell style.

## Syntax

```javascript
expression.GetWrapText();
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether text wrapping is enabled for a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out if a cell is set to wrap its text in a spreadsheet?

// Confirm the wrap setting of a cell by reading and displaying it in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());
```
