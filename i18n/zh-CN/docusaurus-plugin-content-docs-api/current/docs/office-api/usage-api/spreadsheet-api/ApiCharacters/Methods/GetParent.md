# GetParent

返回指定字符的父对象。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRange](../../ApiRange/ApiRange.md)

## 示例

检索电子表格中拥有特定字符范围的父单元格。

```javascript editor-xlsx
// How do I find which cell a selected group of characters belongs to in a spreadsheet?

// Trace a character selection back to its containing cell to apply further formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let parent = characters.GetParent();
parent.SetBorders("Bottom", "Thick", Api.CreateColorFromRGB(255, 111, 61));
```
