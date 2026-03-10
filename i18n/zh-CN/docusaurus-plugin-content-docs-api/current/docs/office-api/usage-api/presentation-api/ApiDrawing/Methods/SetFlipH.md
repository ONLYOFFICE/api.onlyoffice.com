# SetFlipH

设置当前绘图的水平翻转。

## 语法

```javascript
expression.SetFlipH(bFlip);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否水平翻转。 |

## 返回值

boolean

## 示例

This example shows how to flip the drawing horizontally.

```javascript editor-pptx
// How to set the horizontal flip property of the shape.

// Create a drawing and flip it horizontally.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("cube", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
drawing.SetFlipH(true);
const flip = drawing.GetFlipH();
const docContent = drawing.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc("left");
paragraph.AddText("Drawing is flipped horizontally: " + flip);
slide.AddObject(drawing);

```
