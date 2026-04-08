# GetSpacing

从当前文本属性获取文本间距，以磅的二十分之一为单位。

## 语法

```javascript
expression.GetSpacing();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

此示例使用其属性获取文本间距。

```javascript editor-xlsx
// How to find out space size of a text.

// Get spacing size.

let worksheet = Api.GetActiveSheet();
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = worksheet.AddShape("flowChartOnlineStorage", 120 * 36000, 70 * 36000, fill, stroke, 0, 2 * 36000, 0, 3 * 36000);
let content = shape.GetContent();
let paragraph = content.GetElement(0);
let run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
let textProps = run.GetTextPr();
textProps.SetSpacing(80);
paragraph = Api.CreateParagraph();
let spacing = textProps.GetSpacing();
paragraph.AddText("Text spacing: " + spacing);
content.Push(paragraph);
```
