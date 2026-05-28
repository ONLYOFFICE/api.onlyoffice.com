# GetUnderline

返回应用于指定字体的下划线类型。

## 语法

```javascript
expression.GetUnderline();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[XlUnderlineStyle](../../Enumeration/XlUnderlineStyle.md) \| null

## 示例

检索电子表格中应用于文本字符的下划线样式。

```javascript editor-xlsx
// How do I find out which underline style is used on a piece of text in a spreadsheet?

// Read the underline setting from a character's font and display the result in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);
```
