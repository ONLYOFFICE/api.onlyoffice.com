# GetRightMargin

Returns the size of the right margin.

## Syntax

```javascript
expression.GetRightMargin();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the right page margin of a sheet and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out the current right margin of a worksheet in a spreadsheet?

// Check the right page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightMargin(20);
let margin = pageSetup.GetRightMargin();
worksheet.GetRange("A1").SetValue("Right margin: " + margin + " mm");
```
