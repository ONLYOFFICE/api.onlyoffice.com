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

获取电子表格中指定字符范围的文本。

```javascript editor-xlsx
// How to get a raw text from the characters in a spreadsheet.

// Retrieve a text from the character collection in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let text = characters.GetText();
worksheet.GetRange("B3").SetValue("Text: " + text);
```
