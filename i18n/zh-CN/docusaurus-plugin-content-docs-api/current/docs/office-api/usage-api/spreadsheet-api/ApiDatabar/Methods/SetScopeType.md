# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型：“xlSelectionScope”、“xlDataFieldScope” 或 “xlFieldsScope”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中定义数据条格式规则在区域内应用于哪些单元格。

```javascript editor-xlsx
// How do I control whether a data bar rule covers the entire table or only the selected cells in a spreadsheet?

// Narrow or broaden the reach of a data bar rule by choosing its application scope in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);

let dataRange = worksheet.GetRange("A2:A3");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

dataBar.SetScopeType("xlSelectionScope");

let scopeType = dataBar.GetScopeType();

worksheet.GetRange("C1").SetValue("New scope type:");
worksheet.GetRange("C2").SetValue(scopeType);
```
