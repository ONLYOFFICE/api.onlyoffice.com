# GetRowsCount

返回当前范围中的行数。

## 语法

```javascript
expression.GetRowsCount();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中选定范围内的行数。

```javascript editor-xlsx
// How do I find out how many rows a range spans in a spreadsheet?

// Verify the total row count of a range by displaying the result in a nearby cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1:C4");
range.SetValue("I was selected");
worksheet.GetRange("A5").SetValue("Rows count in the selected range should be 4: " + range.GetRowsCount());
```
