# GetIndLeft

返回段落左侧缩进。

## 语法

```javascript
expression.GetIndLeft();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md) \| undefined

## 示例

此示例展示如何获取段落左侧缩进。

```javascript editor-xlsx
// How to get a left indent of a paragraph.

// Get the left paragraph indent by the side.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetIndLeft(2880);
paragraph.AddText("This is the first paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("This indent is set by the paragraph style. No paragraph inline style is applied. ");
let indLeft = paraPr.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
content.Push(paragraph);
```
