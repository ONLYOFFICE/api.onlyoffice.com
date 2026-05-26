# GetStrikethrough

返回指定字体的删除线属性。

## 语法

```javascript
expression.GetStrikethrough();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

读取电子表格中特定字符范围是否有删除线格式。

```javascript editor-xlsx
// How do I check if certain characters in a cell are displayed with a line through them in a spreadsheet?

// Inspect the strikethrough setting of a character range and display the result in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetStrikethrough(true);
let isStrikethrough = font.GetStrikethrough();
worksheet.GetRange("B3").SetValue("Strikethrough property: " + isStrikethrough);
```
