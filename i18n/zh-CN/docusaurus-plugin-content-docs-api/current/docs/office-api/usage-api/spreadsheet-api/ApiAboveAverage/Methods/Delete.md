# Delete

删除当前格式条件。

继承自 [ApiFormatCondition.Delete](../../ApiFormatCondition/Methods/Delete.md)。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiAboveAverage](../ApiAboveAverage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中移除标记高于平均值的突出显示规则。

```javascript editor-xlsx
// How do I delete a conditional formatting rule that highlights above-average cells in a spreadsheet?

// Clear an above-average rule from a range so cells return to their default appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Test Scores");
worksheet.GetRange("A2").SetValue(85);
worksheet.GetRange("A3").SetValue(92);
worksheet.GetRange("A4").SetValue(78);
worksheet.GetRange("A5").SetValue(95);
worksheet.GetRange("A6").SetValue(88);

let dataRange = worksheet.GetRange("A2:A6");
let formatConditions = dataRange.GetFormatConditions();
let aboveAverageCondition = formatConditions.AddAboveAverage();
aboveAverageCondition.GetFont().SetColor(Api.CreateColorFromRGB(255, 0, 0));

worksheet.GetRange("C1").SetValue("Before: " + formatConditions.GetCount() + " rules");
aboveAverageCondition.Delete();
worksheet.GetRange("C2").SetValue("After: " + formatConditions.GetCount() + " rules");
```
