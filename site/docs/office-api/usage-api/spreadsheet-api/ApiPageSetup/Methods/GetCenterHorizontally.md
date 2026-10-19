# GetCenterHorizontally

Returns whether the worksheet is centered horizontally on the page when printed.

## Syntax

```javascript
expression.GetCenterHorizontally();
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

boolean

## Example

Check whether the printed content is centered horizontally on the page in a spreadsheet.

```javascript editor-xlsx
// How do I find out if the worksheet is horizontally centered when printing in a spreadsheet?

// Read the horizontal centering setting before printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHorizontally(true);
let isCentered = pageSetup.GetCenterHorizontally();
worksheet.GetRange("A1").SetValue("Centered horizontally: " + isCentered);
```
