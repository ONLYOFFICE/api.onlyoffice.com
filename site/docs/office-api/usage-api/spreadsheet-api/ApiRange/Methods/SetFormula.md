# SetFormula

Sets a formula or value to the current cell or cell range.

:::note\
This functionality is available in paid ONLYOFFICE Docs editions.\
:::

## Syntax

```javascript
expression.SetFormula(data);
```

`expression` - A variable that represents a [ApiRange](../ApiRange.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| data | Required | string \| number \| boolean \| (string \| number \| boolean)[] \| (string \| number \| boolean)[][] |  | The formula or value for the cell or cell range. |

## Returns

boolean

## Example

This example shows how to set a formula to the specified range.

```javascript editor-xlsx
// How to set a formula to a cell.

// Set a formula to a cell and get it back to display in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("B1").SetValue(1);
worksheet.GetRange("C1").SetValue(2);
let range = worksheet.GetRange("A1");
range.SetFormula("=SUM(B1:C1)");
let formula = range.GetFormula();
worksheet.GetRange("A3").SetValue("Formula from cell A1: " + formula);
```
