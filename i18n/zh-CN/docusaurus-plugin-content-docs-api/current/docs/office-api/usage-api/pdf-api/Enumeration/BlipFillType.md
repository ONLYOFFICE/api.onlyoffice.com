# BlipFillType

使用图像作为背景的填充类型。
-**「tile」** - 如果图像小于要填充的形状，图像将在创建的形状表面上平铺。
-**「stretch」** - 如果图像小于要填充的形状，图像将被拉伸以适应创建的形状表面。

## 类型

枚举

## 值

- "tile"
- "stretch"


## 示例

This example creates a blip fill with an image which is tiled all over the created shape.

```javascript editor-pdf
// How to create a blip fill from the image URL.

// Create a tiled blip fill from the image.

const imageUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
let blipFill = Api.CreateBlipFill(imageUrl, 'tile');

```
