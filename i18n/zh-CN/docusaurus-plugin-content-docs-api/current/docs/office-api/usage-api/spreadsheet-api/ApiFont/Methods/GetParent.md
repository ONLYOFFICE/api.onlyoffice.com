# GetParent

返回指定字体的父级 ApiCharacters 对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiFont](../ApiFont.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiCharacters](../../ApiCharacters/ApiCharacters.md)

## 示例

检索电子表格中字体设置所属的字符对象。

```javascript editor-xlsx
// How do I get back to the characters object from a font so I can change its text in a spreadsheet?

// Navigate from a font up to its owning characters object to update the displayed text in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let font = characters.GetFont();
let parent = font.GetParent();
parent.SetText("string");
```
