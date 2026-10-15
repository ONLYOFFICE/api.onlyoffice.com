# Copy

创建当前 OLE 对象的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md) \| null

## 示例

复制 OLE 对象并将副本添加到文档中的同一段落。

```javascript editor-docx
// How do I make a copy of an OLE object in a document?

// Clone an OLE object so that the duplicate appears alongside the original in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	130 * 36000, 90 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
paragraph.AddDrawing(oleObject);

let copyOle = oleObject.Copy();
paragraph.AddDrawing(copyOle);
```
