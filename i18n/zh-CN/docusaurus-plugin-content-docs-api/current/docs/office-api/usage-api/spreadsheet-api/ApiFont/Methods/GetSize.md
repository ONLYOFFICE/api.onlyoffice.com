# GetSize

返回指定字体的大小属性。

## 语法

```javascript
expression.GetSize();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number \| null

## 示例

读取电子表格中应用于字符范围的字体大小。

```javascript editor-xlsx
// How do I find out the point size of the text used for specific characters in a cell in a spreadsheet?

// Set a font size on a group of characters, then retrieve and display that size in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);
```
