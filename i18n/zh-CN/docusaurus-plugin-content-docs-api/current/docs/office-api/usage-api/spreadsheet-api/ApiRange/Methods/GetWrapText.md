# GetWrapText

返回有关单元格自动换行样式的信息。

## 语法

```javascript
expression.GetWrapText();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例演示如何获取有关单元格自动换行样式的信息。

```javascript editor-xlsx
// How to get a cell value wrapping type.

// Get a wrapping type of a cell from its range and show it.

let worksheet = Api.GetActiveSheet();
let range = worksheet.GetRange("A1");
range.SetValue("This is the text wrapped to fit the cell size.");
range.SetWrap(true);
worksheet.GetRange("A3").SetValue("The text in the cell A1 is wrapped: " + range.GetWrapText());

```
