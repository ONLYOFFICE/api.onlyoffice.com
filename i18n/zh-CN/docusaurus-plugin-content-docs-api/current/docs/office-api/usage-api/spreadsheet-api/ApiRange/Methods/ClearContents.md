# ClearContents

清除当前范围中的所有内容。

## 语法

```javascript
expression.ClearContents();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

此方法不返回任何数据。

## 示例

删除电子表格中单元格范围的值，同时保留其格式不变。

```javascript editor-xlsx
// How do I remove cell data without touching the styling in a spreadsheet?

// Wipe only the text and numbers from selected cells so their appearance stays unchanged in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1:B1").SetValue("Example text");
let range = worksheet.GetRange("A1");
range.ClearContents();
worksheet.GetRange("A2").SetValue("Result is contents cleared for A1 cell.");
```
