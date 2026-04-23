# GetAllOleObjects

从文档内容返回 OLE 对象集合。

## 语法

```javascript
expression.GetAllOleObjects();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## 示例

此示例展示如何从文档内容获取 OLE 对象集合。

```javascript editor-docx
// Get all OLE objects added to the document.

// How to retrieve all OLE objects and display the application ID of the first one.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let shape = Api.CreateShape("rect", 100 * 36000, 100 * 36000, fill, stroke);
paragraph.AddDrawing(shape);
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
paragraph = Api.CreateParagraph();
paragraph.AddDrawing(oleObject);
let docContent = shape.GetDocContent();
docContent.AddElement(0, paragraph);
let oleObjects = docContent.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The application ID for the current OLE object: ' + appId);
doc.Push(paragraph);

```
