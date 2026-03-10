# Delete

删除当前格式条件。

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

此示例删除条件格式规则。

```javascript editor-xlsx
// How to remove specific conditional formatting rules from a range.

// Delete conditional formatting rule.

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

worksheet.GetRange("C1").SetValue("Rules before deletion:");
worksheet.GetRange("C2").SetValue(formatConditions.GetCount());

condition1.Delete();

worksheet.GetRange("D1").SetValue("Rules after deletion:");
worksheet.GetRange("D2").SetValue(formatConditions.GetCount());

```
