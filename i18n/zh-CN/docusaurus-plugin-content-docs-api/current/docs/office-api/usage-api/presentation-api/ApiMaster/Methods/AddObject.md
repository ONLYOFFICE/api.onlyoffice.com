# AddObject

向当前幻灯片母版添加对象（图像、形状或图表）。

## 语法

```javascript
expression.AddObject(oDrawing);
```

`expression` - 表示 [ApiMaster](../ApiMaster.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oDrawing | 必需 | [ApiDrawing](../../ApiDrawing/ApiDrawing.md) |  | 将添加到当前幻灯片母版的对象。 |

## 返回值

boolean

## 示例

此示例向当前幻灯片母版添加对象（图像、形状或图表）。

```javascript editor-pptx
// Create a shape and add it to the presentation master.

// Add an element like paragraph, image or chart and etc. to the slide master.

const presentation = Api.GetPresentation();
const master = presentation.GetMaster(0);
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("flowChartMagneticTape", 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);
master.AddObject(shape);

```
