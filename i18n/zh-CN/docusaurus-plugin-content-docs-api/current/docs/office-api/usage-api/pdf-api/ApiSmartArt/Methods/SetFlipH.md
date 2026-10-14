# SetFlipH

设置当前绘图的水平翻转。

继承自 [ApiDrawing.SetFlipH](../../ApiDrawing/Methods/SetFlipH.md)。

## 语法

```javascript
expression.SetFlipH(bFlip);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| bFlip | 必需 | boolean |  | 指定图形是否水平翻转。 |

## 返回值

boolean

## 示例

在 PDF 表单的页面上水平镜像形状。

```javascript editor-pdf
// Reverse a shape horizontally so its geometry is mirrored across the vertical axis.

// Create a shape, flip it horizontally, and display the resulting flip state.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape("rightArrow", 120 * 36000, 60 * 36000, fill, stroke);
shape.SetPosition(20 * 36000, 20 * 36000);
page.AddObject(shape);
shape.SetFlipH(true);
const paragraph = shape.GetContent().GetElement(0);
paragraph.AddText("Drawing is flipped horizontally: " + shape.GetFlipH());
```
