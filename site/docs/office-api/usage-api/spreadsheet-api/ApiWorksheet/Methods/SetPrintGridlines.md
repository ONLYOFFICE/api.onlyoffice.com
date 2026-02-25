# SetPrintGridlines

Specifies whether the current sheet gridlines must be printed or not.

## Syntax

```javascript
expression.SetPrintGridlines(bPrint);
```

`expression` - A variable that represents a [ApiWorksheet](../ApiWorksheet.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bPrint | Required | boolean |  | Defines if cell gridlines are printed on this page or not. |

## Returns

This method doesn't return any data.

## Example

This example specifies whether the sheet gridlines must be printed or not.

```javascript editor-xlsx playground
// How to set whether sheet gridlines should be printed or not.

// Set a boolean value representing whether to print gridlines or not.

let worksheet = Api.GetActiveSheet();
worksheet.SetPrintGridlines(true);
worksheet.GetRange("A1").SetValue("Gridlines of cells will be printed on this page: " + worksheet.GetPrintGridlines());

```
