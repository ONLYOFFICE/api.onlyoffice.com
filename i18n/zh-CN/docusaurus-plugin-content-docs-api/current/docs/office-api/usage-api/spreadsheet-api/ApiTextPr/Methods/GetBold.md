# GetBold

从当前文本属性获取粗体属性。

## 语法

```javascript
expression.GetBold();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例使用其属性获取文本粗体。

```javascript editor-xlsx
// How to find out whether a text is bold or not.

// Get a text bold property.

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
textProps.SetBold(true);
paragraph = Api.CreateParagraph();
let isBold = textProps.GetBold();
paragraph.AddText("Bold property: " + isBold);
content.Push(paragraph);
```
