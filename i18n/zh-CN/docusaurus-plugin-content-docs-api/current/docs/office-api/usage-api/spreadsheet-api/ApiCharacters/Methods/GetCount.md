# GetCount

返回表示集合中对象数量的值。

## 语法

```javascript
expression.GetCount();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

计算电子表格中单元格内选定文本范围中的字符数。

```javascript editor-xlsx
// How do I find out how many characters are in a specific portion of a cell's text in a spreadsheet?

// Measure the length of a character selection taken from a cell value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let count = characters.GetCount();
worksheet.GetRange("B3").SetValue("Number of characters: " + count);
```
