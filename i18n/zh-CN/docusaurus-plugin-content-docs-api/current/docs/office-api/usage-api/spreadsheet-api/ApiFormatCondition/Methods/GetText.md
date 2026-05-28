# GetText

返回基于文本的条件格式规则中使用的文本值。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiFormatCondition](../ApiFormatCondition.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中条件格式规则匹配的文本字符串。

```javascript editor-xlsx
// How do I find out what word or phrase a text-based formatting rule is looking for in a spreadsheet?

// Retrieve the search term stored inside a text-matching formatting rule in a spreadsheet.

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

let textValue = condition1.GetText();

worksheet.GetRange("C1").SetValue("Text value:");
worksheet.GetRange("C2").SetValue(textValue);
```
