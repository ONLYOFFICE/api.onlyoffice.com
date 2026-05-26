# GetTextOperator

返回基于文本的条件格式规则的文本运算符。

## 语法

```javascript
expression.GetTextOperator();
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlContainsOperator](../../Enumeration/XlContainsOperator.md) \| null

## 示例

读取电子表格中基于文本的条件格式规则使用的比较类型。

```javascript editor-xlsx
// How do I find out whether a text formatting rule checks for contains, begins with, or ends with in a spreadsheet?

// Identify the matching method a text-based formatting rule relies on in a spreadsheet.

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

let textOperator = condition1.GetTextOperator();

worksheet.GetRange("C1").SetValue("Text operator:");
worksheet.GetRange("C2").SetValue(textOperator ? textOperator : "None");
```
