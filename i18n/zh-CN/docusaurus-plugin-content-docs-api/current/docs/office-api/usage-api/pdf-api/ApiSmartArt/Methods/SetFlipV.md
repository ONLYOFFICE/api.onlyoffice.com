# SetFlipV

设置当前绘图的垂直翻转。

继承自 [ApiDrawing.SetFlipV](../../ApiDrawing/Methods/SetFlipV.md)。

## 语法

```javascript
expression.SetFlipV(bFlip);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否垂直翻转。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上垂直镜像形状。

```javascript editor-pdf
// Reverse a shape vertically so its geometry is mirrored across the horizontal axis.

// Create a shape, flip it vertically, and display the resulting flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("upArrow", 60 * 36000, 120 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipV(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped vertically: " + shape.GetFlipV());
```
