# SetAxisPosition

Sets the axis position for the data bar conditional formatting rule.

## Syntax

```javascript
expression.SetAxisPosition(position);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | Required | [XlDataBarAxisPosition](../../Enumeration/XlDataBarAxisPosition.md) |  | The axis position setting for the data bar. |

## Returns

This method doesn't return any data.

## Example

This example demonstrates setting the axis position of a data bar conditional formatting rule.

```javascript editor-xlsx
// How to change the axis position setting of a data bar.

// Set the axis position of a data bar conditional formatting rule.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before:");
worksheet.GetRange("C2").SetValue(dataBar.GetAxisPosition());

dataBar.SetAxisPosition("xlDataBarAxisMidpoint");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetAxisPosition());

```
