# SetCenterHeader

Sets the center part of the header used when the worksheet is printed.

## Syntax

```javascript
expression.SetCenterHeader(sText);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sText | Required | string |  | The center header text (may contain formatting codes such as &P, &D). |

## Returns

boolean

## Example

Add center text to the page header for printing in a spreadsheet.

```javascript editor-xlsx
// How do I put text on the center side of the header in a spreadsheet?

// Show a center header when printing a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetCenterHeader("&A");
```
