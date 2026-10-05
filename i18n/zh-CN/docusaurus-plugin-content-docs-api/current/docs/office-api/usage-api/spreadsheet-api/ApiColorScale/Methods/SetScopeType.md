# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型：“xlSelectionScope”、“xlDataFieldScope” 或 “xlFieldsScope”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中定义颜色渐变规则在所选单元格中的应用范围。

```javascript editor-xlsx
// How do I control whether a color scale rule covers each cell independently or the entire range together in a spreadsheet?

// Adjust the coverage mode of a color gradient condition to change which cells it treats as a group in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

worksheet.GetRange("C1").SetValue("Scope before:");
worksheet.GetRange("C2").SetValue(colorScale.GetScopeType());

colorScale.SetScopeType("xlDataFieldScope");

worksheet.GetRange("D1").SetValue("Scope after:");
worksheet.GetRange("D2").SetValue(colorScale.GetScopeType());
```
