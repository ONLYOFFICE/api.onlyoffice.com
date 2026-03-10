# GetClassType

返回 ApiOleObject 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"oleObject"

## 示例

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiOleObject.

// Retrieve class type of ApiOleObject object and insert it to the document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
let type = oleObject.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText('Class type: ' + type);
doc.Push(paragraph);

```
