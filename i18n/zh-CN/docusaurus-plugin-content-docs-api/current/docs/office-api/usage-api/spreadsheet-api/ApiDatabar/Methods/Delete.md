# Delete

删除当前格式条件。

继承自 [ApiFormatCondition.Delete](../../ApiFormatCondition/Methods/Delete.md)。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiDatabar](../ApiDatabar.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

在电子表格中从单元格区域中移除条形可视化规则。

```javascript editor-xlsx
// How do I delete a data bar formatting rule applied to a cell range in a spreadsheet?

// Clear bar-based conditional formatting so a range returns to its plain appearance in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sales Data");
worksheet.GetRange("A2").SetValue(100);
worksheet.GetRange("A3").SetValue(250);
worksheet.GetRange("A4").SetValue(150);

let dataRange = worksheet.GetRange("A2:A4");
let formatConditions = dataRange.GetFormatConditions();

let dataBar = formatConditions.AddDatabar();

worksheet.GetRange("C1").SetValue("Before Delete: Has formatting");

dataBar.Delete();

worksheet.GetRange("C2").SetValue("After Delete: Formatting removed");
```
