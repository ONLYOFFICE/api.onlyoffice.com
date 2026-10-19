# SetRightFooter

Sets the right part of the footer used when the worksheet is printed.

## Syntax

```javascript
expression.SetRightFooter(sText);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The right footer text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Add right text to the page footer for printing in a spreadsheet.

```javascript editor-xlsx
// How do I put text on the right side of the footer in a spreadsheet?

// Show a right footer when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightFooter("Page &P");
```
