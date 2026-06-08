# SetAutoFilter

向当前范围添加自动筛选。

## 语法

```javascript
expression.SetAutoFilter(Field, Criteria1, Operator, Criteria2, VisibleDropDown);
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| Field | 可选 | number \| null |  | 要作为筛选基准的字段的整数偏移量（从列表左侧开始；最左边的字段是字段一）。如果提供 \{null\}，则清除范围的自动筛选。 |
| Criteria1 | 可选 | string \| string[] \| [ApiColor](../../ApiColor/ApiColor.md) \| [XlDynamicFilterCriteria](../../Enumeration/XlDynamicFilterCriteria.md) |  | 条件（字符串；例如 "101"）。使用 "=" 查找空白字段，"\<\>" 查找非空白字段，"\>\<" 选择数据类型中的（无数据）字段。如果省略此参数，则条件为全部。如果 Operator 为 xlTop10Items，则 Criteria1 指定项目数量（例如 "10"）。 |
| Operator | 可选 | [XlAutoFilterOperator](../../Enumeration/XlAutoFilterOperator.md) |  | 指定筛选类型的 XlAutoFilterOperator 常量。 |
| Criteria2 | 可选 | string |  | 第二个条件（字符串）。与 Criteria1 和 Operator 一起使用以构建复合条件。 |
| VisibleDropDown | 可选 | boolean |  | True 表示显示筛选字段的自动筛选下拉箭头。False 表示隐藏筛选字段的自动筛选下拉箭头。默认为 True。 |

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中为单元格范围应用自动筛选。

```javascript editor-xlsx
// How do I let users filter rows by value within a range in a spreadsheet?

// Narrow visible rows down to only those matching chosen values in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("header");
worksheet.GetRange("A2").SetValue("value2");
worksheet.GetRange("A3").SetValue("value3");
worksheet.GetRange("A4").SetValue("value4");
worksheet.GetRange("A5").SetValue("value5");
let range = worksheet.GetRange("A1:A5");
range.SetAutoFilter(1, ["value2","value3"], "xlFilterValues");
```
