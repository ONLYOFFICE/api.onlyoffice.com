# GetCaption

返回表示指定字符范围文本的字符串值。

## 语法

```javascript
expression.GetCaption();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

从电子表格中单元格内选定的字符范围提取文本字符串。

```javascript editor-xlsx
// How do I read the actual text that a character selection represents in a spreadsheet?

// Pull out a substring from a cell by selecting characters at a given position in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(23, 4);
let caption = characters.GetCaption();
worksheet.GetRange("B3").SetValue("Caption: " + caption);
```
