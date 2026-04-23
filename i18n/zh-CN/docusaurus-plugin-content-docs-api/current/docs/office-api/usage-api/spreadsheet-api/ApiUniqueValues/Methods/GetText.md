# GetText

返回基于文本的条件格式规则中使用的文本值。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例从基于文本的条件格式规则获取文本值。

```javascript editor-xlsx
// How to retrieve text values from text-based conditional formatting rules.

// Get conditional formatting rule text value.

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
