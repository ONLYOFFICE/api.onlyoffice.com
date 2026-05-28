# GetQuoteText

返回当前批注的引用文本。

## 语法

```javascript
expression.GetQuoteText();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

String \| null

## 示例

读取与电子表格中单元格批注关联的引用文本。

```javascript editor-xlsx
// How do I retrieve the text that a comment quotes from its target cell in a spreadsheet?

// Capture the source text that a comment references to understand what content it annotates in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's quote text: ");
worksheet.GetRange("B3").SetValue(comment.GetQuoteText());
```
