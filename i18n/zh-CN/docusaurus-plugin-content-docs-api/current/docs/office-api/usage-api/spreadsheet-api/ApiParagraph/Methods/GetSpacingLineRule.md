# GetSpacingLineRule

返回段落行距规则。

## 语法

```javascript
expression.GetSpacingLineRule();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"auto" \| "atLeast" \| "exact" \| undefined

## 示例

此示例展示如何获取段落行距值。

```javascript editor-xlsx
// How to get spacing line value between sentences of a paragraph.

// Create a paragraph set spacing line between the sentences and retrieve the value.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetSpacingLine(3 * 240, "auto");
paragraph.AddText("Paragraph 1. Spacing: 3 times of a common paragraph line spacing.");
paragraph.AddLineBreak();
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
let spacingLineValue = paraPr.GetSpacingLineValue();
paragraph = Api.CreateParagraph();
paragraph.AddText("Spacing line value : " + spacingLineValue);
content.Push(paragraph);
```
