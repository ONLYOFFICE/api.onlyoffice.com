# GetText

返回批注文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中批注的文本内容。

```javascript editor-xlsx
// How do I retrieve the written message stored inside a comment in a spreadsheet?

// Extract what a comment says so it can be displayed or compared in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment: ");
worksheet.GetRange("B3").SetValue(range.GetComment().GetText());
```
