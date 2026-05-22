# GetAllOleObjects

返回段落中的 OLE 对象集合。

## 语法

```javascript
expression.GetAllOleObjects();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)[]

## 示例

检索文档中段落内嵌入的所有 OLE 对象。

```javascript editor-docx
// How do I get every OLE object from a paragraph in a document?

// Read application metadata from embedded objects by collecting all OLE objects in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let oleObjects = paragraph.GetAllOleObjects();
let appId = oleObjects[0].GetApplicationId();
paragraph = Api.CreateParagraph();
paragraph.AddText('The application ID for the current OLE object: ' + appId);
doc.Push(paragraph);
```
