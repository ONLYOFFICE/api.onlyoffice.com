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

在演示文稿中的嵌入对象中存储数据或 URL。

```javascript editor-pptx
// How do I change the data in an embedded object in a presentation?

// Update the content of a linked object with a new URL in a presentation.

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
oleObject.SetData('https://youtu.be/eJxpkjQG6Ew');
```
