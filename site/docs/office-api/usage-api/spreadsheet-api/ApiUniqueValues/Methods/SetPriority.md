# SetPriority

Sets the priority value of the conditional formatting rule.

Inherited from [ApiFormatCondition.SetPriority](../../ApiFormatCondition/Methods/SetPriority.md).

## Syntax

```javascript
expression.SetPriority(Priority);
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Priority | Required | number |  | The priority value (1-based). |

## Returns

This method doesn't return any data.

## Example

Assign a specific evaluation priority to a unique values formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I set the exact priority number of a unique values formatting rule in a spreadsheet?

// Control the order in which a unique values rule is applied relative to others in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetPriority(5);

let priority = uniqueValuesCondition.GetPriority();

worksheet.GetRange("C1").SetValue("New priority:");
worksheet.GetRange("C2").SetValue(priority);
```
