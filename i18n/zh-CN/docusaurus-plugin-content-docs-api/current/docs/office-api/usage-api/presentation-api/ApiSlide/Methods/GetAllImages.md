# GetAllImages

返回幻灯片中所有图像对象的数组。

## 语法

```javascript
expression.GetAllImages();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)[]

## 示例

此示例展示如何获取幻灯片中所有图像对象的数组。

```javascript editor-pptx
// How to get all images from the slide.

// Get all images from the slide as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
slide.AddObject(image);
const allImages = slide.GetAllImages();
const type = allImages[0].GetClassType();

const fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('flowChartMagneticTape', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);
shape.SetSize(300 * 36000, 130 * 36000);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.SetJc('left');
paragraph.AddText('Class type = ' + type);
slide.AddObject(shape);

```
