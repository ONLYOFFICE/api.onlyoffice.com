# GetAllOleObjects

返回幻灯片中所有 OLE 对象的数组。

## 语法

```javascript
expression.GetAllOleObjects();
```

`expression` - 表示 [ApiSlide](../ApiSlide.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## 示例

此示例展示如何获取幻灯片中所有 OLE 对象的数组。

```javascript editor-pptx
// How to get all OLE objects from the slide.

// Get all OLE objects from the slide as an array.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
oleObject.SetSize(200 * 36000, 130 * 36000);
oleObject.SetPosition(70 * 36000, 30 * 36000);
slide.AddObject(oleObject);
const allOleObjects = slide.GetAllOleObjects();
const appId = allOleObjects[0].GetApplicationId();

const gs1 = Api.CreateGradientStop(Api.RGB(255, 213, 191), 0);
const gs2 = Api.CreateGradientStop(Api.RGB(255, 111, 61), 100000);
const fill = Api.CreateLinearGradientFill([gs1, gs2], 5400000);
const stroke = Api.CreateStroke(0, Api.CreateNoFill());
const drawing = Api.CreateShape('rect', 300 * 36000, 15 * 36000, fill, stroke);
drawing.SetPosition(20 * 36000, 170 * 36000);

const docContent = drawing.GetContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('The application ID for the current OLE object: ' + appId);
slide.AddObject(drawing);

```
