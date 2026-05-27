# GetSuperscript

返回指定字体的上标属性。

## 语法

```javascript
expression.GetSuperscript();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

检查电子表格中文本字符是否显示为上标。

```javascript editor-xlsx
// How do I find out if a character is raised above the text baseline in a spreadsheet?

// Read the superscript setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSuperscript(true);
let isSuperscript = font.GetSuperscript();
worksheet.GetRange("B3").SetValue("Superscript property: " + isSuperscript);
```
