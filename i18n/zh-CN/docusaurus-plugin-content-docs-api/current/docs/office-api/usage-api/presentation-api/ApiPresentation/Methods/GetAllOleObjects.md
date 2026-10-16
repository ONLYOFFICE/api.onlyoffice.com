# GetAllOleObjects

返回包含演示文稿幻灯片中所有 OLE 对象的数组，不包括幻灯片版式和幻灯片母版中的 OLE 对象。

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

列出演示文稿中所有嵌入或链接的文件。

```javascript editor-pptx
// Access every linked video, spreadsheet, or external file in the presentation.

// Retrieve OLE objects from slides and count them in a presentation.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const oleObject1 = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
slide.AddObject(oleObject1);
const oleObject2 = oleObject1.Copy();
oleObject2.SetPosition(0, 48 * 36000);
slide.AddObject(oleObject2);

const labelFill = Api.CreateSolidFill(Api.RGB(255, 230, 150));
const labelStroke = Api.CreateStroke(0, Api.CreateNoFill());
const label = Api.CreateShape('rect', 60 * 36000, 20 * 36000, labelFill, labelStroke);
label.SetPosition(0, 96 * 36000);
slide.AddObject(label);

const oleObjects = presentation.GetAllOleObjects();
const docContent = label.GetDocContent();
const paragraph = docContent.GetElement(0);
paragraph.AddText('OLE Objects in presentation excluding slide layouts and master slides: ' + oleObjects.length);
```
