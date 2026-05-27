# GetText

返回指定范围的文本。

## 语法

```javascript
expression.GetText();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string \| string[][]

## 示例

从电子表格中的单元格范围读取原始文本内容。

```javascript editor-xlsx
// How do I extract the text stored in a range of cells in a spreadsheet?

// Pull the displayed text from a range and write it into another cell in a spreadsheet.

let worksheet = Api.GetActiveSheet();
worksheet.GetRange("A1").SetValue("text1");
worksheet.GetRange("B1").SetValue("text2");
worksheet.GetRange("C1").SetValue("text3");
let range = worksheet.GetRange("A1:C1");
let text = range.GetText();
worksheet.GetRange("A3").SetValue("Text from the cell A1: " + text);
```
