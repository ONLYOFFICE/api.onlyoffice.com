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

此示例创建一个图像填充，该图像平铺在整个创建的形状上。

```javascript editor-xlsx
// How to create a blip fill from the image URL.

// Create a tiled blip fill from the image.

const imageUrl = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
let blipFill = Api.CreateBlipFill(imageUrl, 'tile');

```
