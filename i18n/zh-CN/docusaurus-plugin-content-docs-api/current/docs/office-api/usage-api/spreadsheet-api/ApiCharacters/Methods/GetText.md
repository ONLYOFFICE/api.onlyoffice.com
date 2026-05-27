# GetText

返回指定字符范围的文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取电子表格中选定字符组的纯文本内容。

```javascript editor-xlsx
// How do I extract just the text from a specific portion of a cell's value in a spreadsheet?

// Capture a substring of cell text for comparison or display elsewhere in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);
```
