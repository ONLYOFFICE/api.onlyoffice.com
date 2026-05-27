# CreateBlipFill

创建图片填充，使用所选图像作为对象背景应用于对象。

## 语法

```javascript
expression.CreateBlipFill(imageUrl, blipFillType);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageUrl | 必需 | string |  | 用于图片填充的图像路径（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| blipFillType | 必需 | [BlipFillType](../../Enumeration/BlipFillType.md) |  | 用于图片填充的填充类型（平铺或拉伸）。 |

## 返回值

[ApiFill](../../ApiFill/ApiFill.md)

## 示例

在演示文稿中用图像填充形状。

```javascript editor-pptx
// How do I set an image as the background of a shape in a presentation?

// Apply an image to a shape's background using a tiled fill pattern in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 300 * 36000, 130 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
slide.AddObject(drawing);
```
