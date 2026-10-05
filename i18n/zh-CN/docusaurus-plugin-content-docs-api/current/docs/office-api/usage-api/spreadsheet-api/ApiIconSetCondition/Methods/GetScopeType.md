# GetScopeType

返回条件格式规则的作用域类型。

继承自 [ApiFormatCondition.GetScopeType](../../ApiFormatCondition/Methods/GetScopeType.md)。

## 语法

```javascript
expression.GetScopeType();
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md)

## 示例

在电子表格中读取控制图标集规则应用方式的范围设置。

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
