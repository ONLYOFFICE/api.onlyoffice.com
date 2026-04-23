# GetItalic

从当前文本属性获取斜体属性。

## 语法

```javascript
expression.GetItalic();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例获取文本斜体属性。

```javascript editor-xlsx
// How to find out whether a text is italic or not.

// Get a text italic property as a boolean value.

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
textProps.SetItalic(true);
paragraph = Api.CreateParagraph();
let isItalic = textProps.GetItalic();
paragraph.AddText("Italic property: " + isItalic);
content.Push(paragraph);
```
