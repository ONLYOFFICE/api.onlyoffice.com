# GetColor

返回指定字体的颜色属性。

## 语法

```javascript
expression.GetColor();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiColor](../../ApiColor/ApiColor.md) \| null

## 示例

读取电子表格中应用于字符范围的文本颜色。

```javascript editor-xlsx
// How do I retrieve the exact color used to display certain characters in a cell in a spreadsheet?

// Copy the color from one group of characters and apply it to another group of characters in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
let color = Api.CreateColorFromRGB(255, 111, 61);
font.SetColor(color);
color = font.GetColor();
characters = range.GetCharacters(16, 6);
font = characters.GetFont();
font.SetColor(color);
```
