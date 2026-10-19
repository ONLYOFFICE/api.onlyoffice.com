# SetLine

为当前图形对象设置轮廓属性。

继承自 [ApiDrawing.SetLine](../../ApiDrawing/Methods/SetLine.md)。

## 语法

```javascript
expression.SetLine(stroke);
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| stroke | 必需 | [ApiStroke](../../ApiStroke/ApiStroke.md) |  | 用于创建图形对象轮廓的笔触。 |

## 返回值

boolean

## 示例

在演示文稿中通过基础 ApiDrawing 接口设置绘图对象的轮廓。

```javascript editor-pptx
// SetLine is the base method for the outline and works for any graphic object on a slide, not only shapes.

// Add a rectangle to a slide and give it a dark solid outline.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const outline = Api.CreateStroke(36000, Api.CreateSolidFill(Api.RGB(51, 51, 51)));
drawing.SetLine(outline);
```
