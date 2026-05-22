# CreateTextPr

创建空的文本属性。

## 语法

```javascript
expression.CreateTextPr();
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

定义字体大小和字重设置以应用于电子表格中的文本段落。

```javascript editor-xlsx
// How do I configure text styling such as size and bold before adding it to a shape in a spreadsheet?

// Prepare a reusable set of text style rules and attach them to a paragraph in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 80 * 36000, 50 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let docContent = shape.GetContent();
docContent.RemoveAllElements();
let textPr = Api.CreateTextPr();
textPr.SetFontSize(30);
textPr.SetBold(true);
let paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is a sample text with the font size set to 30 and the font weight set to bold.");
paragraph.SetTextPr(textPr);
docContent.Push(paragraph);
```
