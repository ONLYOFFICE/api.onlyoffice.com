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

检索文档中段落内嵌入的所有图像对象。

```javascript editor-docx
// How do I get every image from a paragraph in a document?

// Inspect or process multiple pictures at once by collecting all images in a document.

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
