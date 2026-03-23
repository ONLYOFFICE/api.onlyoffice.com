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
| sType | 可选 | [ShapeType](../../Enumeration/ShapeType.md) | "rect" | 指定预设形状几何图形的形状类型。 |
| nWidth | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状宽度。 |
| nHeight | 可选 | [EMU](../../Enumeration/EMU.md) | 914400 | 以英制度量单位表示的形状高度。 |
| oFill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | 用于填充形状的颜色或图案。 |
| oStroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | 用于创建元素阴影的笔触。 |

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

此示例使用 'flowChartMagneticTape' 预设创建形状。

```javascript editor-pptx
// How to add a new flowchart shape.

// Add a new shape indicating its properties.

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
