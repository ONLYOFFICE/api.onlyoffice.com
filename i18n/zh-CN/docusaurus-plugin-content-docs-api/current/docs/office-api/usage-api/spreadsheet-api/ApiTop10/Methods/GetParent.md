# GetParent

返回当前格式条件的父区域对象。

继承自 [ApiFormatCondition.GetParent](../../ApiFormatCondition/Methods/GetParent.md)。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

在电子表格中读取拥有前 10 项条件格式规则的工作表。

```javascript editor-xlsx
// How do I find the parent range of a top 10 conditional formatting rule in a spreadsheet?

// Identify which range object a top 10 highlight rule belongs to in a spreadsheet.

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

let parent = condition1.GetParent();

worksheet.GetRange("C1").SetValue("Parent name:");
worksheet.GetRange("C2").SetValue(parent.GetAddress());
```
