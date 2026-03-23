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
| nWidth | 可选 | [EMU](../../Enumeration/EMU.md) | 72 | 以英制度量单位表示的形状宽度。 |
| nHeight | 可选 | [EMU](../../Enumeration/EMU.md) | 72 | 以英制度量单位表示的形状高度。 |
| oFill | 可选 | [ApiFill](../../ApiFill/ApiFill.md) | Api.CreateNoFill() | 用于填充形状的颜色或图案。 |
| oStroke | 可选 | [ApiStroke](../../ApiStroke/ApiStroke.md) | Api.CreateStroke(0, Api.CreateNoFill()) | 用于创建元素阴影的笔触。 |

## 返回值

[ApiShape](../../ApiShape/ApiShape.md)

## 示例

如何添加新的流程图形状。

```javascript editor-pdf
// Add a new shape indicating its properties.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
const docContent = shape.GetContent();
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
page.AddObject(shape);
```
