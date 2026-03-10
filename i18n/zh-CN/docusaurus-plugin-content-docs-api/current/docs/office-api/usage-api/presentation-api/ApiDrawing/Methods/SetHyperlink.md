# SetHyperlink

为当前绘图对象（形状或图像）设置超链接。
传递 null 以删除超链接。

## 语法

```javascript
expression.SetHyperlink(hyperlink);
```

`expression` - 表示 [ApiDrawing](../ApiDrawing.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| hyperlink | 必需 | [ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md) \| null |  | 要设置到绘图的超链接对象，或传递 null 以删除超链接。 |

## 返回值

boolean

## 示例

This example sets a hyperlink for a shape and an image on a slide.

```javascript editor-pptx
const presentation = Api.GetPresentation();
presentation.AddSlide(Api.CreateSlide());

const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const fill = Api.CreateSolidFill(Api.HexColor('#e2e4f6'));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('rect', 150 * 36000, 150 * 36000, fill, stroke);
slide.AddObject(shape);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
image.SetPosition(160 * 36000, 0);
slide.AddObject(image);

const urlHyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
const pageHyperlink = Api.CreateHyperlink('ppaction://hlinksldjumpslide1', 'Link to the second slide');
shape.SetHyperlink(urlHyperlink);
image.SetHyperlink(pageHyperlink);

```
