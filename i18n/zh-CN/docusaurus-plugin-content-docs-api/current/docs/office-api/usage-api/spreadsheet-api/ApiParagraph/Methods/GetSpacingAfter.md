# GetSpacingAfter

返回当前段落的段后间距值。

继承自 [ApiParaPr.GetSpacingAfter](../../ApiParaPr/Methods/GetSpacingAfter.md)。

## 语法

```javascript
expression.GetSpacingAfter();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

在电子表格中读取形状内段落下方添加的间距。

```javascript editor-xlsx
// How do I check how much gap follows a paragraph in a spreadsheet?

// Measure the bottom spacing of a paragraph after setting it and display the value in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph1 = content.GetElement(0);
paragraph1.AddText("This is an example of setting a space after a paragraph. ");
paragraph1.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph1.AddText("This is due to the fact that the first paragraph has this offset enabled.");
paragraph1.SetSpacingAfter(1440);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("This is the second paragraph and it is one inch away from the first paragraph.");
paragraph2.AddLineBreak();
let spacingAfter = paragraph1.GetSpacingAfter();
paragraph2.AddText("Spacing after: " + spacingAfter);
content.Push(paragraph2);
```
