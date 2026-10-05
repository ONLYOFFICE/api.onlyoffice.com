# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiIconSetCondition](../ApiIconSetCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型：“xlSelectionScope”、“xlDataFieldScope” 或 “xlFieldsScope”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中定义图标集格式规则应用于哪些单元格。

```javascript editor-xlsx
// How do I control the scope of an icon set rule so it targets the right cells in a spreadsheet?

// Limit or expand the range of cells affected by an icon set rule based on selection or the entire sheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Metrics");
worksheet.GetRange("A2").SetValue(84);
worksheet.GetRange("A3").SetValue(64);
worksheet.GetRange("A4").SetValue(44);

let range = worksheet.GetRange("A2:A4");
let formatConditions = range.GetFormatConditions();

let iconCondition = formatConditions.AddIconSetCondition();

iconCondition.SetScopeType("xlSelectionScope");

let scopeType = iconCondition.GetScopeType();

worksheet.GetRange("B1").SetValue("New scope type: " + scopeType);
```
