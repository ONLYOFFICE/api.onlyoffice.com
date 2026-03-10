# AddObject

向当前幻灯片版式添加对象（图像、形状或图表）。

## 语法

```javascript
expression.AddObject(oDrawing);
```

`expression` - 表示 [ApiLayout](../ApiLayout.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 将添加到当前幻灯片版式的对象。 |

## 返回值

boolean

## 示例

此示例向幻灯片添加形状。

```javascript editor-pptx
// How to add a shape object to the master layout.

// Add a drawing to the ApiLayout object.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const master = presentation.GetMaster(0);
const layout = master.GetLayout(0);

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
layout.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("This shape was added to the current layout.");

```
