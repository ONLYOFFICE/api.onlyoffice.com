# SetCenterFooter

Sets the center part of the footer used when the worksheet is printed.

## Syntax

```javascript
expression.SetCenterFooter(sText);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The center footer text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Add centered text to the page footer for printing in a spreadsheet.

```javascript editor-xlsx
// How do I put the page number in the center of the footer in a spreadsheet?

// Show a centered footer with the current page and total page count when printing in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterFooter("Page &P of &N");
```
