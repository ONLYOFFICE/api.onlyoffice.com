# SetBold

为文本字符设置粗体属性。

## 语法

```javascript
expression.SetBold(isBold);
```

`expression` - 表示 [ApiTextPr](../ApiTextPr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isBold | 必需 | boolean |  | 指定文本块的内容显示为粗体。 |

## 返回值

[ApiTextPr](../../ApiTextPr/ApiTextPr.md)

## 示例

在演示文稿中为文本应用粗体格式。

```javascript editor-pptx
// How do I make text bold in a presentation?

// Use the text properties to enable bold font weight for characters in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const run = Api.CreateRun();
const textPr = run.GetTextPr();
textPr.SetFontSize(50);
textPr.SetBold(true);
paragraph.SetJc("left");
run.AddText("This is a sample text inside the shape with the font weight set to bold using the text properties.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
