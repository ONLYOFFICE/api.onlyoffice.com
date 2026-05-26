# GetName

返回指定字体的名称属性。

## 语法

```javascript
expression.GetName();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| null

## 示例

读取电子表格中应用于字符范围的字体名称。

```javascript editor-xlsx
// How do I find out which font family is used for specific characters in a cell in a spreadsheet?

// Set a typeface on a group of characters, then retrieve and display its name in a cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
