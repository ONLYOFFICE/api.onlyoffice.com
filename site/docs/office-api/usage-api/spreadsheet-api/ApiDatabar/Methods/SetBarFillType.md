# SetBarFillType

Sets the bar fill type for the data bar.

## Syntax

```javascript
expression.SetBarFillType(fillType);
```

`expression` - A variable that represents a [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| fillType | Required | [XlDataBarFillType](../../Enumeration/XlDataBarFillType.md) |  | The fill type setting for the data bar (solid or gradient). |

## Returns

This method doesn't return any data.

## Example

This example demonstrates setting the bar fill type of a data bar conditional formatting rule.

```javascript editor-xlsx playground
// How to change the fill type setting of a data bar.

// Set the bar fill type of a data bar conditional formatting rule.

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
worksheet.GetRange("C2").SetValue(dataBar.GetBarFillType());

dataBar.SetBarFillType("xlDataBarFillSolid");

worksheet.GetRange("C3").SetValue("After:");
worksheet.GetRange("C4").SetValue(dataBar.GetBarFillType());

```
