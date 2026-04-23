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

此示例演示如何获取应用于指定字体的下划线类型。

```javascript editor-xlsx
// How to determine whether a font is underlined or not.

// Get a boolean value that represents whether a font has an underline property or not and show the value in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetUnderline("xlUnderlineStyleSingle");
let underlineType = font.GetUnderline();
worksheet.GetRange("B3").SetValue("Underline property: " + underlineType);
```
