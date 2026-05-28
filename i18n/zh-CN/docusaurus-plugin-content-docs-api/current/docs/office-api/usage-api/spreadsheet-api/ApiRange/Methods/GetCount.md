# GetCount

返回行数或列数。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中范围内的单元格总数。

```javascript editor-xlsx
// How do I find out how many cells are in a range in a spreadsheet?

// Write the cell count of a range into a separate cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
worksheet.GetRange("B1").SetValue("2");
worksheet.GetRange("C1").SetValue("3");
let count = worksheet.GetRange("A1:C1").GetCount();
worksheet.GetRange("A4").SetValue("Count: ");
worksheet.GetRange("B4").SetValue(count);
```
