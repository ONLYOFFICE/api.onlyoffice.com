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

此示例展示如何获取批注的引用文本。

```javascript editor-xlsx
// How to get a comment quote.

// Add a comment to the range and display its quote text in the worksheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("1");
let range = worksheet.GetRange("A1");
let comment = range.AddComment("This is just a number.");
worksheet.GetRange("A3").SetValue("Comment's quote text: ");
worksheet.GetRange("B3").SetValue(comment.GetQuoteText());
```
