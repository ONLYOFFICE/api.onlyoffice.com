# SetTopMargin

Sets the size of the top margin.

## Syntax

```javascript
expression.SetTopMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The top margin size measured in millimeters. |

## Returns

boolean

## Example

Define the top page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the top margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the top side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetTopMargin(20);
```
