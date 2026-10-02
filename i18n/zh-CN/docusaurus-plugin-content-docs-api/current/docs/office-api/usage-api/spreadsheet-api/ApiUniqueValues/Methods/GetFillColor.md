# GetFillColor

返回格式条件的背景颜色。

当格式条件的背景颜色为 null 时返回“无填充”。

继承自 [ApiFormatCondition.GetFillColor](../../ApiFormatCondition/Methods/GetFillColor.md)。

## 语法

```javascript
expression.GetFillColor();
```

`expression` - 表示 [ApiUniqueValues](../ApiUniqueValues.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| 'No Fill'

## 示例

在电子表格中读取唯一值条件格式规则设置的背景颜色。

```javascript editor-xlsx
// How do I find out what fill color a unique-values rule applies to matching cells in a spreadsheet?

// Inspect the highlight color of a unique-values rule to confirm its appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Data");
worksheet.GetRange("A2").SetValue("Apple");
worksheet.GetRange("A3").SetValue("Banana");
worksheet.GetRange("A4").SetValue("Apple");
worksheet.GetRange("A5").SetValue("Orange");

let range = worksheet.GetRange("A2:A5");
let formatConditions = range.GetFormatConditions();
let uniqueValuesCondition = formatConditions.AddUniqueValues();

uniqueValuesCondition.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let fillColor = uniqueValuesCondition.GetFillColor();
let rgbValue = fillColor.GetRGB();

worksheet.GetRange("C1").SetValue("Fill Color RGB:");
worksheet.GetRange("C2").SetValue(rgbValue);
```
