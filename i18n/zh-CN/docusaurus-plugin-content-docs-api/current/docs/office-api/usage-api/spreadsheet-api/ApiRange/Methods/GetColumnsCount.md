# GetColumnsCount

返回当前范围中的列数。

## 语法

```javascript
expression.GetColumnsCount();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中选定范围内的列数。

```javascript editor-xlsx
// How do I find out how many columns a range spans in a spreadsheet?

// Display the column count of a range in a nearby cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:E2");
range.SetValue("I was selected");
worksheet.GetRange("A3").SetValue("Columns count in the selected range should be 5: " + range.GetColumnsCount());
```
