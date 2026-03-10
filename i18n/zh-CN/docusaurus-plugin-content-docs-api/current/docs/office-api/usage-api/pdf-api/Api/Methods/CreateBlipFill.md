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

此示例展示如何创建图片填充，使用所选图像作为对象背景应用于对象。

```javascript editor-pdf
// How to set an image as a background.

// Use blip fill to fill a background with an image.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape("star10", 150 * 36000, 65 * 36000, fill, stroke);
drawing.SetPosition(608400, 1267200);
page.AddObject(drawing);

```
