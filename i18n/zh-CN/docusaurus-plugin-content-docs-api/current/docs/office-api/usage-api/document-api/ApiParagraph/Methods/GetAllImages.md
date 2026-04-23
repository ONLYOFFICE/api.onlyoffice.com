# GetAllImages

返回段落中的图像对象集合。

## 语法

```javascript
expression.GetAllImages();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)[]

## 示例

此示例展示如何获取段落中的图像对象集合。

```javascript editor-docx
// How to retrieve all images from the document.

// Get all images and get the class type of the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image1 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image1);

let image2 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	130 * 36000, 90 * 36000
);
paragraph.AddDrawing(image2);

let images = paragraph.GetAllImages();
let classType = images[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + classType);
doc.Push(paragraph);

```
