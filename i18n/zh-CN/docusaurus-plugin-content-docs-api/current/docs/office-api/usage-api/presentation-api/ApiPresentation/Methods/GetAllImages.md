# GetAllImages

返回包含演示文稿幻灯片中所有图像对象的数组，不包括幻灯片版式和幻灯片母版中的图像对象。

## 语法

```javascript
expression.GetAllImages();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)[]

## 示例

查找演示文稿中的所有图像文件。

```javascript editor-pptx
// Access every picture inserted on the presentation slides.

// Retrieve images from slides and count them in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const copiesCount = 3;
for (let i = 0; i < copiesCount; i++) {
	const imageSource = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';
	const drawing = Api.CreateImage(imageSource, 174 * 36000, 38 * 36000);
	drawing.SetPosition(0, i * 38 * 36000);
	slide.AddObject(drawing);
}

const fill = Api.CreateSolidFill(Api.RGB(255, 153, 204));
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('heart', 80 * 36000, 80 * 36000, fill, stroke);
shape.SetPosition(184 * 36000, 0 * 36000);
slide.AddObject(shape);

const docContent = shape.GetDocContent();
const paragraph = docContent.GetElement(0);
const imagesCount = presentation.GetAllImages().length;
paragraph.AddText('Images in presentation excluding slide layouts and master slides: ' + imagesCount);
```
