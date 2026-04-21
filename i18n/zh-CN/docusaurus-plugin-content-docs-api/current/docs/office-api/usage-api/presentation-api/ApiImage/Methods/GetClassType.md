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

获取演示文稿中图像对象的类类型。

```javascript editor-pptx
// How can I get the class type of an image in a presentation?

// Get the class type of an image and display it in the presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
slide.AddObject(image);

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateRadialGradientFill([gs1, gs2]);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const shape = Api.CreateShape('flowChartMagneticTape', 300 * 36000, 130 * 36000, fill, stroke);
shape.SetPosition(608400, 1267200);

const docContent = shape.GetDocContent();
const classType = image.GetClassType();
const paragraph = docContent.GetElement(0);
paragraph.SetJc('left');
paragraph.AddText('Class Type = ' + classType);
slide.AddObject(shape);
```
