# GetCenterFooter

Returns the center part of the footer used when the worksheet is printed.

## Syntax

```javascript
expression.GetCenterFooter();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

string

## Example

Read the centered footer text of a sheet and display it in a cell in a spreadsheet.

```javascript editor-xlsx
// How do I find out what is printed in the center of the footer in a spreadsheet?

// Check the current center footer (including its formatting codes) before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterFooter("Page &P of &N");
let centerFooter = pageSetup.GetCenterFooter();
worksheet.GetRange("A1").SetValue("Center footer: " + centerFooter);
```
