# GetPrevImage

返回上一个内联图像（如果存在）。

## 语法

```javascript
expression.GetPrevImage();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiImage](../../ApiImage/ApiImage.md) \| null

## 示例

此示例展示如何获取上一个内联图像（如果存在）。

```javascript editor-docx
// How to add the previous drawing to the paragraph.

// Get the previous drawing and add it separated with a line break.

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

let prevImage = image2.GetPrevImage();
let copyImage = prevImage.Copy();
paragraph.AddLineBreak();
paragraph.AddDrawing(copyImage);

```
