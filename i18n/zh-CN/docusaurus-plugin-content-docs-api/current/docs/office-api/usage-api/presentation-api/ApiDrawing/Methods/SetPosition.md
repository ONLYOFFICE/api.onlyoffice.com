# SetPosition

设置绘图在幻灯片上的位置。

## 语法

```javascript
expression.SetPosition(nPosX, nPosY);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nPosX | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的从幻灯片左侧到绘图左侧的距离。 |
| nPosY | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制单位测量的从幻灯片顶部到绘图上侧的距离。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例设置形状的位置。

```javascript editor-pptx
// How to change a position of a drawing.

// Get a shape object from a slide and move it.

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
