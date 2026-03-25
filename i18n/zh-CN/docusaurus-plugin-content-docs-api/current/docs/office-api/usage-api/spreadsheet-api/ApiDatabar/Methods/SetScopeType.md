# SetScopeType

设置条件格式规则的作用域类型。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型："xlSelectionScope"、"xlDataFieldScope" 或 "xlFieldsScope"。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置条件格式规则的作用域类型。

```javascript editor-xlsx
// How to change the scope type of conditional formatting rules.

// Set conditional formatting rule scope type.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlGreater", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original scope:");
worksheet.GetRange("C2").SetValue(condition1.GetScopeType());

condition1.SetScopeType("xlDataFieldScope");

worksheet.GetRange("C4").SetValue("New scope:");
worksheet.GetRange("C5").SetValue(condition1.GetScopeType());

```
