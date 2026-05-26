# SetData

设置当前 OLE 对象的数据。

## 语法

```javascript
expression.SetData(sData);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sData | 必需 | string |  | OLE 对象字符串数据。 |

## 返回值

boolean

## 示例

更新文档中嵌入的 OLE 对象的数据字符串。

```javascript editor-docx
// How do I change the link or data stored in an OLE object in a document?

// Replace the existing OLE object content with a new URL or data value in a document.

let doc = Api.GetDocument();
let oleObject = Api.CreateOleObject(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000,
	'https://youtu.be/SKGz4pmnpgY',
	'asc.{38E022EA-AD92-45FC-B22B-49DF39746DB4}'
);
let paragraph = doc.GetElement(0);
paragraph.AddDrawing(oleObject);
oleObject.SetData('https://youtu.be/eJxpkjQG6Ew');
```
