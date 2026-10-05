# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 语法

```javascript
expression.GetPTCondition();
```

`expression` - 表示 [ApiColorScale](../ApiColorScale.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

PTCondition \| null

## 示例

在电子表格中读取附加到色阶规则的数据透视表范围设置。

```javascript editor-xlsx
// How do I check whether a color scale rule targets a specific part of a pivot table in a spreadsheet?

// Inspect the pivot table condition of a color scale rule and display whether one is set in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");

let formatConditions = dataRange.GetFormatConditions();

let colorScale = formatConditions.AddColorScale();

let ptCondition = colorScale.GetPTCondition();

worksheet.GetRange("C1").SetValue("PT condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Has condition" : "No condition");
```
