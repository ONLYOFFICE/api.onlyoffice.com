# SetRightMargin

Sets the size of the right margin.

## Syntax

```javascript
expression.SetRightMargin(nMargin);
```

`expression` - A variable that represents an [ApiPageSetup](../ApiPageSetup.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nMargin | Required | number |  | The right margin size measured in millimeters. |

## Returns

boolean

## Example

Define the right page margin for a sheet in a spreadsheet.

```javascript editor-xlsx
// How do I set the right margin of a worksheet for printing in a spreadsheet?

// Adjust the spacing on the right side of the printed page in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let pageSetup = worksheet.GetPageSetup();
pageSetup.SetRightMargin(20);
```
