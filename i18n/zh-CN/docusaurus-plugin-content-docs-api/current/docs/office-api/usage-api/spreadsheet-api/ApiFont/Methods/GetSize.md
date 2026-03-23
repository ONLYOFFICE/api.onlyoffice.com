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

此示例演示如何获取指定字体的大小属性。

```javascript editor-xlsx
// How to determine a font size of characters.

// Get the size of a font and display it in the worksheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetSize(18);
let size = font.GetSize();
worksheet.GetRange("B3").SetValue("Size property: " + size);
```
