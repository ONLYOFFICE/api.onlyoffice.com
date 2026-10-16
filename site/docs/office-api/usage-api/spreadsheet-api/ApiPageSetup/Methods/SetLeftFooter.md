# SetLeftFooter

Sets the left part of the footer used when the worksheet is printed.

## Syntax

```javascript
expression.SetLeftFooter(sText);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The left footer text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Add left text to the page footer for printing in a spreadsheet.

```javascript editor-xlsx
// How do I put text on the left side of the footer in a spreadsheet?

// Show a left footer when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftFooter("&D");
```
