# GetFormula2

返回当前条件格式规则使用的第二个公式。

## 语法

```javascript
expression.GetFormula2();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

此示例获取条件格式规则的第二个公式。

```javascript editor-xlsx
// How to retrieve the second formula from conditional formatting rules.

// Get conditional formatting rule second formula.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.Add("xlCellValue", "xlBetween", "100", "200");
condition1.SetFillColor(Api.CreateColorFromRGB(255, 0, 0));

let formula1 = condition1.GetFormula1();
let formula2 = condition1.GetFormula2();

worksheet.GetRange("C1").SetValue("First formula:");
worksheet.GetRange("C2").SetValue(formula1);
worksheet.GetRange("C3").SetValue("Second formula:");
worksheet.GetRange("C4").SetValue(formula2);

```
