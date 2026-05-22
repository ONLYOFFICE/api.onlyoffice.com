# GetNextImage

返回下一个内联图像（如果存在）。

## 语法

```javascript
expression.GetNextImage();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md) \| null

## 示例

获取给定图像之后的下一个图像并将其复制到文档的段落中。

```javascript editor-docx
// How do I access the image that follows another image in a document?

// Copy a sibling image by navigating forward through inline images in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);

let image1 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image1);
paragraph.AddLineBreak();

let image2 = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	130 * 36000, 90 * 36000
);
paragraph.AddDrawing(image2);

let nextImage = image1.GetNextImage();
let copyImage = nextImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);
```
