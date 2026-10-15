# GetLeftHeader

Returns the left part of the header used when the worksheet is printed.

## Syntax

```javascript
expression.GetLeftHeader();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the left header text of a sheet and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out what is printed on the left of the header in a spreadsheet?

// Check the current left header (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftHeader("Confidential");
let value = pageSetup.GetLeftHeader();
worksheet.GetRange("A1").SetValue("LeftHeader: " + value);
```
