# SetSize

设置对象（图像、形状、图表）边界框的大小。

## 语法

```javascript
expression.SetSize(nWidth, nHeight);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象宽度，以英制单位测量。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象高度，以英制单位测量。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置形状的大小。

```javascript editor-pptx
// How to resize a drawing.

// Get a shape object from a slide and set its size.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
slide.AddObject(shape);

```
