# Delete

删除当前格式条件。

继承自 [ApiFormatCondition.Delete](../../ApiFormatCondition/Methods/Delete.md)。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiTop10](../ApiTop10.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中从区域中移除前 10 项条件格式规则。

```javascript editor-xlsx
// How do I delete a conditional formatting rule that highlights top values in a spreadsheet?

// Clear a highlight rule for top values and confirm the rule count dropped in a spreadsheet.

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

let countBefore = formatConditions.GetCount();
condition1.Delete();
let countAfter = formatConditions.GetCount();

worksheet.GetRange("C1").SetValue("Rules before: " + countBefore);
worksheet.GetRange("C2").SetValue("Rules after: " + countAfter);
```
