# GetScopeType

Returns the scope type of the conditional formatting rule.

Inherited from [ApiFormatCondition.GetScopeType](../../ApiFormatCondition/Methods/GetScopeType.md).

## Syntax

```javascript
expression.GetScopeType();
```

`expression` - A variable that represents an [ApiDatabar](../ApiDatabar.md) class.

## Parameters

This method doesn't have any parameters.

## Returns

[XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md)

## Example

Read how broadly a data bar rule applies across the selection in a spreadsheet.

```javascript editor-xlsx
// How do I find out whether a data bar rule covers the entire range or only parts of it in a spreadsheet?

// Determine the reach of a data bar rule over the cells it targets in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

let scopeType = dataBar.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope type:");
worksheet.GetRange("C2").SetValue(scopeType);
```
