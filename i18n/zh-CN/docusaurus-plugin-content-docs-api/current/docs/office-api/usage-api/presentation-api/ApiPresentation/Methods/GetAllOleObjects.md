# GetAllOleObjects

返回包含当前演示文稿中所有 OLE 对象的数组。

## 语法

```javascript
expression.GetAllOleObjects();
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## 示例

此示例演示如何获取当前演示文稿中的所有 OLE 对象。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();
const slideMaster = presentation.GetMaster(0);
slideMaster.RemoveObject(0, slideMaster.GetAllDrawings().length);

const oleObject1 = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
slide.AddObject(oleObject1);
const oleObject2 = oleObject1.Copy();
oleObject2.SetPosition(0, 48 * 36000);
slideMaster.AddObject(oleObject2);

const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 96 * 36000);
slide.AddObject(label);

const oleObjects = presentation.GetAllOleObjects();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('OLE Objects: ' + oleObjects.length);

```
