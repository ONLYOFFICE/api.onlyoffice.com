# GetSpacingAfter

返回当前段落的段后间距值。

## 语法

```javascript
expression.GetSpacingAfter();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取电子表格中段落之后的间距大小。

```javascript editor-xlsx
// How do I check how much space is added below a paragraph in a spreadsheet?

// Confirm the bottom spacing value after applying a gap to a paragraph's trailing edge in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingAfter(1440);
paragraph.AddText("This is an example of setting a space after a paragraph. ");
paragraph.AddText("The second paragraph will have an offset of one inch from the top. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let spacingAfter = paraPr.GetSpacingAfter();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing after : " + spacingAfter);
content.Push(paragraph);
```
