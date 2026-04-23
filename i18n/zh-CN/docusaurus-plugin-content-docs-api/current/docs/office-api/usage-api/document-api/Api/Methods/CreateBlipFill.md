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

```javascript editor-docx
// How to create a shape with the "star10" type and a tiled blip fill and add it to the first paragraph of the document.

// Creates a blip fill with the specified image ur and the "tile" fill type and uses it to fill the created shape in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateBlipFill("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", "tile");
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("star10", 5930900, 595605, fill, stroke);
paragraph.AddDrawing(shape);
```
