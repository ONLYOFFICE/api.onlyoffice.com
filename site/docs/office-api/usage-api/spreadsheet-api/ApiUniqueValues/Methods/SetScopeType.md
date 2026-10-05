# SetScopeType

Sets the scope type for the conditional formatting rule.

Inherited from [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md).

## Syntax

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - A variable that represents an [ApiUniqueValues](../ApiUniqueValues.md) class.

## Parameters

| **Name** | **Required/Optional** | **Data type** | **Default** | **Description** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | Required | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | The scope type: "xlSelectionScope", "xlDataFieldScope", or "xlFieldsScope". |

## Returns

This method doesn't return any data.

## Example

Define the scope boundary for a unique values formatting rule in a spreadsheet.

```javascript editor-xlsx
// How do I specify what area a unique values formatting rule covers in a spreadsheet?

// Narrow or widen the scope a unique values rule uses when detecting entries in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetScopeType(0);

worksheet.GetRange("C1").SetValue("Scope type set to 0");
```
