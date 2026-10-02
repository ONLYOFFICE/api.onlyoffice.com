# GetScopeType

返回条件格式规则的作用域类型。

继承自 [ApiFormatCondition.GetScopeType](../../ApiFormatCondition/Methods/GetScopeType.md)。

## 语法

```javascript
expression.GetScopeType();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md)

## 示例

在电子表格中读取决定唯一值格式规则生效位置的范围类型。

```javascript editor-xlsx
// How do I find out the scope setting of a unique-values conditional formatting rule in a spreadsheet?

// Verify whether a unique-values rule is scoped to the whole sheet or a specific selection in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

let scopeType = uniqueValuesCondition.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope type:");
worksheet.GetRange("C2").SetValue(scopeType);
```
