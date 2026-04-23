# GetTextOperator

返回基于文本的条件格式规则的文本运算符。

## 语法

```javascript
expression.GetTextOperator();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlContainsOperator](../../Enumeration/XlContainsOperator.md) \| null

## 示例

此示例从基于文本的条件格式规则获取文本运算符。

```javascript editor-xlsx
// How to retrieve text operators from text-based conditional formatting rules.

// Get conditional formatting rule text operator.

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
