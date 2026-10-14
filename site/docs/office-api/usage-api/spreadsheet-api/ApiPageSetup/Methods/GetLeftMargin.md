# GetLeftMargin

Returns the size of the left margin.

## Syntax

```javascript
expression.GetLeftMargin();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

number

## Example

Read the left page margin of a sheet and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out the current left margin of a worksheet in a spreadsheet?

// Check the left page margin before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
let margin = pageSetup.GetLeftMargin();
worksheet.GetRange("A1").SetValue("Left margin: " + margin + " mm");
```
