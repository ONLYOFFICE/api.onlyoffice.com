# GetItalic

返回指定字体的斜体属性。

## 语法

```javascript
expression.GetItalic();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| null

## 示例

此示例演示如何获取指定字体的斜体属性。

```javascript editor-xlsx
// How to know whether a font style of characters is italic.

// Get a boolean value that represents whether a font is italic or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetItalic(true);
let isItalic = font.GetItalic();
worksheet.GetRange("B3").SetValue("Italic property: " + isItalic);
```
