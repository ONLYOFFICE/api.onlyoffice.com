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

此示例演示如何获取指定字体的名称属性。

```javascript editor-xlsx
// How to determine a font name.

// Apply a font to the characters then get its name and add it in the range.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetName("Font 1");
let fontName = font.GetName();
worksheet.GetRange("B3").SetValue("Font name: " + fontName);
```
