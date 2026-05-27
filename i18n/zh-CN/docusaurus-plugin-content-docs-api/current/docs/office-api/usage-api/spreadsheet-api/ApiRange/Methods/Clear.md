# Clear

清除当前范围。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

清除电子表格中单元格范围的所有值和格式。

```javascript editor-xlsx
// How do I completely wipe a range of cells clean in a spreadsheet?

// Reset a group of cells to a blank state by removing both their data and styling in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:B1");
range.SetValue("1");
range.Clear();
worksheet.GetRange("A2").SetValue("The range A1:B1 was just cleared.");
```
