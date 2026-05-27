# Delete

从集合中删除所有格式条件。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiFormatConditions](../ApiFormatConditions.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

移除电子表格中应用于一组单元格的所有格式规则。

```javascript editor-xlsx
// How do I clear every highlight and color rule from a selected range in a spreadsheet?

// Strip away previously set visual conditions to return cells to their default look in a spreadsheet.

let worksheet = Api.GetActiveSheet();

worksheet.GetRange("A1").SetValue("Sample Data");
worksheet.GetRange("A2").SetValue(10);
worksheet.GetRange("A3").SetValue(45);
worksheet.GetRange("A4").SetValue(75);
worksheet.GetRange("A5").SetValue(25);
worksheet.GetRange("A6").SetValue(90);
worksheet.GetRange("A7").SetValue(60);
worksheet.GetRange("A8").SetValue(35);
worksheet.GetRange("A9").SetValue(80);

let dataRange = worksheet.GetRange("A2:A9");
let formatConditions = dataRange.GetFormatConditions();
formatConditions.AddIconSetCondition();

worksheet.GetRange("B1").SetValue("Rules before delete: " + formatConditions.GetCount());
formatConditions.Delete();
worksheet.GetRange("B2").SetValue("Rules after delete: " + formatConditions.GetCount());
```
