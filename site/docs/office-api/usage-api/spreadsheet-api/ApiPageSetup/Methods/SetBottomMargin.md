# SetBottomMargin

Sets the size of the bottom margin.

## Syntax

```javascript
expression.SetBottomMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The bottom margin size measured in millimeters. |

## Returns

boolean

## Example

Define the bottom page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the bottom margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing below the printed content on each page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetBottomMargin(25.4);
```
