# SetFlipV

设置当前绘图的垂直翻转。

## 语法

```javascript
expression.SetFlipV(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否垂直翻转。 |

## 返回值

boolean

## 示例

This example shows how to flip the drawing vertically.

```javascript editor-pptx
// How to set the vertical flip property of the shape.

// Create a drawing and flip it vertically.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetFlipV(true);
const flip = drawing.GetFlipV();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped vertically: " + flip);
slide.AddObject(drawing);

```
