# GetPTCondition

返回数据透视表条件对象。

继承自 [ApiFormatCondition.GetPTCondition](../../ApiFormatCondition/Methods/GetPTCondition.md)。

## 语法

```javascript
expression.GetPTCondition();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

PTCondition \| null

## 示例

在电子表格中检查前 10 项条件格式规则是否与数据透视表关联。

```javascript editor-xlsx
// How do I tell if a top 10 conditional formatting rule applies to a pivot table in a spreadsheet?

// Verify if the top 10 highlight rule targets pivot table data in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);
worksheet.GetRange("A5").SetValue(300);
worksheet.GetRange("A6").SetValue(75);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();

let condition1 = formatConditions.AddTop10();
condition1.SetFillColor(Api.CreateColorFromRGB(255, 255, 0));

let ptCondition = condition1.GetPTCondition();

worksheet.GetRange("C1").SetValue("Pivot table condition:");
worksheet.GetRange("C2").SetValue(ptCondition ? "Yes" : "No");
```
