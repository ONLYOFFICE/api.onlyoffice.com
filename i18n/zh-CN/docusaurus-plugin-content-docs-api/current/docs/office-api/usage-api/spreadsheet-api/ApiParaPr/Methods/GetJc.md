# GetJc

返回段落内容对齐方式。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"left" \| "right" \| "both" \| "center" \| undefined

## 示例

读取电子表格中段落的文本对齐设置。

```javascript editor-xlsx
// How do I find out whether a paragraph's text is centered, left-aligned, or right-aligned in a spreadsheet?

// Confirm the justification applied to a paragraph after changing its alignment in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetJc("center");
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let justification = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + justification);
content.Push(paragraph);
```
