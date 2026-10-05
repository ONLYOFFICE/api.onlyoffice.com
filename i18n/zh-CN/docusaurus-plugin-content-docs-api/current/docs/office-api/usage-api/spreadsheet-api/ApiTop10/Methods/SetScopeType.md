# SetScopeType

设置条件格式规则的作用域类型。

继承自 [ApiFormatCondition.SetScopeType](../../ApiFormatCondition/Methods/SetScopeType.md)。

## 语法

```javascript
expression.SetScopeType(ScopeType);
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| ScopeType | 必需 | [XlPivotConditionScope](../../Enumeration/XlPivotConditionScope.md) |  | 作用域类型：“xlSelectionScope”、“xlDataFieldScope” 或 “xlFieldsScope”。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中定义前 10 项条件格式规则计算数据的哪一部分。

```javascript editor-xlsx
// How do I limit a top 10 rule to the current selection rather than the whole range in a spreadsheet?

// Narrow the comparison area for a highlight rule by changing its scope in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let scopeBefore = condition1.GetScopeType();
condition1.SetScopeType("xlSelectionScope");
let scopeAfter = condition1.GetScopeType();

worksheet.GetRange("C1").SetValue("Scope before: " + scopeBefore);
worksheet.GetRange("C2").SetValue("Scope after: " + scopeAfter);
```
