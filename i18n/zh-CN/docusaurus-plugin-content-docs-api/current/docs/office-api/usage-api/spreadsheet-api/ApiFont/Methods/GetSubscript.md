# GetSubscript

返回指定字体的下标属性。

## 语法

```javascript
expression.GetSubscript();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

读取电子表格中特定字符范围是否格式化为下标。

```javascript editor-xlsx
// How do I check if certain characters in a cell are displayed in a lowered subscript position in a spreadsheet?

// Inspect the subscript setting of a character range and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSubscript(true);
let isSubscript = font.GetSubscript();
worksheet.GetRange("B3").SetValue("Subscript property: " + isSubscript);
```
