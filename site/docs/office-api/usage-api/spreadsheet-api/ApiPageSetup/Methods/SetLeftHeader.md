# SetLeftHeader

Sets the left part of the header used when the worksheet is printed.

## Syntax

```javascript
expression.SetLeftHeader(sText);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The left header text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Add left text to the page header for printing in a spreadsheet.

```javascript editor-xlsx
// How do I put text on the left side of the header in a spreadsheet?

// Show a left header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftHeader("Confidential");
```
