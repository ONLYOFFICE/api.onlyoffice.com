# SetFill

设置当前图形对象的填充格式属性。

继承自 [ApiDrawing.SetFill](../../ApiDrawing/Methods/SetFill.md)。

## 语法

```javascript
expression.SetFill(oFill);
```

`expression` - 表示 [ApiSmartArt](../ApiSmartArt.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oFill | 必需 | [ApiFill](../../ApiFill/ApiFill.md) |  | 用于填充图形对象的填充类型。 |

## 返回值

boolean

## 示例

在演示文稿中通过基础 ApiDrawing 接口为绘图对象设置纯色填充。

```javascript editor-pptx
// The SetFill method works for any graphic object on a slide, including images and groups, not only shapes.

// Add a rectangle to a slide and fill it with a solid blue-grey color.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("rect", 150 * 36000, 80 * 36000, Api.CreateNoFill(), stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
const fill = Api.CreateSolidFill(Api.RGB(96, 125, 139));
drawing.SetFill(fill);
```
