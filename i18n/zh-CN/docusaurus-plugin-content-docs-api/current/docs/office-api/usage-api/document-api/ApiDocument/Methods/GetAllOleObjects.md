# GetAllOleObjects

从文档内容返回 OLE 对象集合。

继承自 [ApiDocumentContent.GetAllOleObjects](../../ApiDocumentContent/Methods/GetAllOleObjects.md)。

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

获取文档中的所有 OLE 对象。

```javascript editor-docx
// How do I collect every OLE object present in a document?

// Read the application ID of the first OLE object to identify which external app it belongs to.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let oleObjects = doc.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The application ID for the current OLE object: ' + appId);
doc.Push(paragraph);
```
