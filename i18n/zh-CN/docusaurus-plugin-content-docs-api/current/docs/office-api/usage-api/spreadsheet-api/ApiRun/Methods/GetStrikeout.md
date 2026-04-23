# GetStrikeout

从当前文本属性获取删除线属性。

## 语法

```javascript
expression.GetStrikeout();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例使用其属性获取文本删除线。

```javascript editor-xlsx
// How to find out whether a text is stroke out or not.

// Get cross out property of a text.

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
textProps.SetStrikeout(true);
paragraph = Api.CreateParagraph();
let isStrikeout = textProps.GetStrikeout();
paragraph.AddText("Strikeout property: " + isStrikeout);
content.Push(paragraph);
```
