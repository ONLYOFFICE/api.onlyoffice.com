# SetLeftMargin

Sets the size of the left margin.

## Syntax

```javascript
expression.SetLeftMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The left margin size measured in millimeters. |

## Returns

boolean

## Example

Define the left page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the left margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the left side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetLeftMargin(20);
```
