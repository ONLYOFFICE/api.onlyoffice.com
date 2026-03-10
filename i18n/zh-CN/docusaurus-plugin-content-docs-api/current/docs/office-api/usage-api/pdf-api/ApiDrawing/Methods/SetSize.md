# SetSize

设置对象（图像、形状、图表）边界框的大小。

## 语法

```javascript
expression.SetSize(width, height);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象宽度，以英制单位测量。 |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 对象高度，以英制单位测量。 |

## 返回值

boolean

## 示例

How to resize a drawing.

```javascript editor-pdf
// Get a shape object from a page and set its size.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(150 * 36000, 65 * 36000);

const docContent = shape.GetContent();
docContent.RemoveAllElements();
const paragraph = Api.CreateParagraph();
paragraph.SetJc("left");
paragraph.AddText("This is an example of a paragraph inside a shape. Nothing special.");
docContent.Push(paragraph);
page.AddObject(shape);
```
