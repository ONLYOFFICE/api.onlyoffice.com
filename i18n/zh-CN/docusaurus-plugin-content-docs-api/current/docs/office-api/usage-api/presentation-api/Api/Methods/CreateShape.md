# CreateShape

使用指定的参数创建形状。

## 语法

```javascript
expression.CreateShape(sType, nWidth, nHeight, oFill, oStroke);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 可选 | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | 指定预设形状几何图形的形状类型。"textRect" 类型会创建文本框：它没有填充和轮廓，使用主题文本颜色，且其高度随文本变化。 |
| nWidth | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状宽度。 |
| nHeight | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状高度。 |
| oFill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充形状的颜色或图案。如果未指定，则使用默认形状样式填充（主题强调色），文本框没有填充。 |
| oStroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于绘制形状轮廓的笔触。如果未指定，则使用默认形状样式轮廓（主题强调色），文本框没有轮廓。 |

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

在演示文稿中添加具有填充和描边属性的流程图形状。

```javascript editor-pptx
// How do I create a custom shape with colors in a presentation?

// Set up a shape with a fill color, outline, and add text to it in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);

let run = Api.CreateRun();
run.SetFontSize(60);
run.AddText("This is just a sample text. ");
paragraph.AddElement(run);

run = Api.CreateRun();
run.SetFontSize(60);
run.SetFontFamily("Comic Sans MS");
run.AddText("This is a text run with the font family set to 'Comic Sans MS'.");
paragraph.AddElement(run);
slide.AddObject(shape);
```
