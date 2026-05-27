# GetFont

返回表示指定字符字体的 ApiFont 对象。

## 语法

```javascript
expression.GetFont();
```

`expression` - 表示 [ApiCharacters](../ApiCharacters.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiFont](../../ApiFont/ApiFont.md)

## 示例

访问电子表格中单元格内特定字符范围的字体设置。

```javascript editor-xlsx
// How do I read or change the font properties of part of a cell's text in a spreadsheet?

// Target individual characters within a cell to apply bold, size, or other formatting in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("B1");
range.SetValue("This is just a sample text.");
let characters = range.GetCharacters(9, 4);
let font = characters.GetFont();
font.SetBold(true);
```
