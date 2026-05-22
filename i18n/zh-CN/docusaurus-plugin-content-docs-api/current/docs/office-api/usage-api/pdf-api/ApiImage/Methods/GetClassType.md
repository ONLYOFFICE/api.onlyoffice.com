# GetClassType

返回 ApiImage 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiImage](../ApiImage.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"image"

## 示例

识别 PDF 中图像是哪种对象类型。

```javascript editor-pdf
// How do I find out what kind of image object I'm working with in a PDF?

// Retrieve the classification of an image element in a PDF.

const doc = Api.GetDocument();
const page = doc.GetPage(0);

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
page.AddObject(image);

const gs1 = Api.CreateGradientStop(Api.CreateRGBColor(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.CreateRGBColor(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('flowChartMagneticTape', 150 * 36000, 65 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetContent();
const classType = image.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc('left');
paragraph.AddText('Class Type = ' + classType);
page.AddObject(shape);
```
