# GetFormula1

返回当前条件格式规则使用的第一个公式。

## 语法

```javascript
expression.GetFormula1();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例获取条件格式规则的第一个公式。

```javascript editor-xlsx
// How to retrieve the first formula from conditional formatting rules.

// Get conditional formatting rule first formula.

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

let formula1 = condition1.GetFormula1();

worksheet.GetRange("C1").SetValue("First formula:");
worksheet.GetRange("C2").SetValue(formula1);

```
