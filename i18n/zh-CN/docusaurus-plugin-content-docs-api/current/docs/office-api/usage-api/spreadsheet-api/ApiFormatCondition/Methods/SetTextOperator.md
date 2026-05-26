# SetTextOperator

设置基于文本的条件格式规则的文本运算符。

## 语法

```javascript
expression.SetTextOperator(TextOperator);
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| TextOperator | 必需 | [XlContainsOperator](../../Enumeration/XlContainsOperator.md) |  | 文本运算符：“xlContains”、“xlDoesNotContain”、“xlBeginsWith”、“xlEndsWith”。 |

## 返回值

此方法不返回任何数据。

## 示例

更改电子表格中文本格式规则匹配单元格内容的方式，如以...开头或以...结尾。

```javascript editor-xlsx
// How do I switch a text highlight rule from checking if a cell contains a word to checking how it starts in a spreadsheet?

// Adjust the matching strategy of a text-based highlight rule to target different patterns in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Product Names");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Orange");
worksheet.GetRange("A5").SetValue("Grape");
worksheet.GetRange("A6").SetValue("Peach");

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlTextString", "xlContains", "Apple");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Original operator:");
worksheet.GetRange("C2").SetValue(condition1.GetTextOperator() || "None");

condition1.SetTextOperator("xlBeginsWith");

worksheet.GetRange("C4").SetValue("New operator:");
worksheet.GetRange("C5").SetValue(condition1.GetTextOperator() || "None");
```
