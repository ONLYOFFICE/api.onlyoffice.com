# GetScopeType

Returns the scope type of the conditional formatting rule.

Inherited from [ApiFormatCondition.GetScopeType](../../ApiFormatCondition/Methods/GetScopeType.md).

## Syntax

```javascript
expression.GetScopeType();
```

`expression` - A variable that represents an [ApiIconSetCondition](../ApiIconSetCondition.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md)

## Example

Read the scope setting that controls how an icon set rule is applied in a spreadsheet.

```javascript editor-xlsx
// How do I find out the scope type of an icon set formatting rule in a spreadsheet?

// Determine the range of cells an icon set rule is scoped to cover in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Results");
worksheet.GetRange("A2").SetValue(87);
worksheet.GetRange("A3").SetValue(67);
worksheet.GetRange("A4").SetValue(47);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

let scopeType = iconCondition.GetScopeType();

worksheet.GetRange("B1").SetValue("Scope type: " + scopeType);
```
