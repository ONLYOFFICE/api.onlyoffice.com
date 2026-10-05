# GetScopeType

返回条件格式规则的作用域类型。

继承自 [ApiFormatCondition.GetScopeType](../../ApiFormatCondition/Methods/GetScopeType.md)。

## 语法

```javascript
expression.GetScopeType();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md)

## 示例

在电子表格中读取数据条规则在所选区域中的应用范围。

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
