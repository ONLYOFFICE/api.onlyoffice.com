# SetHyperlink

为当前绘图对象（形状或图像）设置超链接。
传递 null 以删除超链接。

继承自 [ApiDrawing.SetHyperlink](../../ApiDrawing/Methods/SetHyperlink.md)。

## 示例

在演示文稿中为形状和图像添加可点击的链接。

```javascript editor-pptx
// How do I add a hyperlink to a shape or image in a presentation?

// Attach a web link to a shape and a slide link to an image in a presentation.

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
