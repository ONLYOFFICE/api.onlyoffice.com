# GetIndLeft

返回段落左侧缩进。

继承自 [ApiParaPr.GetIndLeft](../../ApiParaPr/Methods/GetIndLeft.md)。

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

在电子表格中读取段落所应用的左缩进值。

```javascript editor-xlsx
// How do I check how much space is added to the left side of a paragraph in a spreadsheet?

// Set a left indent on a paragraph and then retrieve the stored measurement in a spreadsheet.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
paragraph.AddText("This is a paragraph with the indent of 2 inches set to it. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.SetIndLeft(2880);
let indLeft = paragraph.GetIndLeft();
paragraph = Api.CreateParagraph();
paragraph.AddText("Left indent: " + indLeft);
content.Push(paragraph);
```
