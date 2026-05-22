# GetStrikeout

从当前文本属性获取删除线属性。

## 语法

```javascript
expression.GetStrikeout();
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

检查演示文稿中的文本是否应用了单删除线。

```javascript editor-pptx
// How do I find out if text is crossed out with one line in a presentation?

// Read the strikeout property to determine if the single line strike formatting exists in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
let paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
run.AddText("This is just a sample text. ");
run.AddText("The text properties are changed and the style is added to the paragraph. ");
run.AddLineBreak();
paragraph.AddElement(run);
const textPr = run.GetTextPr();
textPr.SetStrikeout(true);
slide.AddObject(shape);

paragraph = Api.CreateParagraph();
const strikeout = textPr.GetStrikeout();
paragraph.AddText("Strikeout property: " + strikeout);
docContent.Push(paragraph);
```
