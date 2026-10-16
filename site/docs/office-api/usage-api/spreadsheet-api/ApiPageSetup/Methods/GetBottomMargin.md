# GetBottomMargin

Returns the size of the bottom margin.

## Syntax

```javascript
expression.GetBottomMargin();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the bottom page margin of a sheet and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out the current bottom margin of a worksheet in a spreadsheet?

// Check the spacing below the printed content before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetBottomMargin(25.4);
let bottomMargin = pageSetup.GetBottomMargin();
worksheet.GetRange("A1").SetValue("Bottom margin: " + bottomMargin + " mm");
```
