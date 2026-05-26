# GetIndRight

返回段落右侧缩进。

## 语法

```javascript
expression.GetIndRight();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

读取电子表格中应用于段落的右侧缩进距离。

```javascript editor-xlsx
// How do I check how far a paragraph is pushed in from the right margin in a spreadsheet?

// Inspect the right margin offset of a paragraph to verify its horizontal boundary in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndRight(2880);
paraPr.SetJc("right");
paragraph.AddText("This is the first paragraph with the right offset of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
let indRight = paraPr.GetIndRight();
paragraph = Api.CreateParagraph();
paragraph.AddText("Right indent: " + indRight);
content.Push(paragraph);
```
