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

此示例演示如何获取指定字体的上标属性。

```javascript editor-xlsx
// How to determine a font superscript property.

// Get a boolean value that represents whether a font has a superscript property or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSuperscript(true);
let isSuperscript = font.GetSuperscript();
worksheet.GetRange("B3").SetValue("Superscript property: " + isSuperscript);
```
