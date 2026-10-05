# SetPriority

Sets the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md).

## Syntax

```javascript
expression.SetPriority(Priority);
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | Required | number |  | The priority value (1-based). |

## Returns

This method doesn't return any data.

## Example

Control the order in which a data bar formatting rule is evaluated relative to others in a spreadsheet.

```javascript editor-xlsx
// How do I decide which conditional formatting rule takes precedence when multiple rules overlap in a spreadsheet?

// Resolve conflicts between overlapping formatting rules by assigning a specific priority number in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar1 = formatConditions.AddDatabar();
let dataBar2 = formatConditions.AddDatabar();

dataBar2.SetPriority(3);

let priority = dataBar2.GetPriority();

worksheet.GetRange("C1").SetValue("New priority:");
worksheet.GetRange("C2").SetValue(priority);
```
