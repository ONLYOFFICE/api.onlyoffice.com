# SetApplicationId

设置当前 OLE 对象的应用程序 ID。

## 语法

```javascript
expression.SetApplicationId(sAppId);
```

`expression` - 表示 [ApiOleObject](../ApiOleObject.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sAppId | 必需 | string |  | 与当前 OLE 对象关联的应用程序 ID。 |

## 返回值

boolean

## 示例

为演示文稿中的嵌入对象分配应用程序标识符。

```javascript editor-pptx
// How do I set the application ID for an embedded object in a presentation?

// Configure which application should handle an embedded object in a presentation.

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
oleObject.SetApplicationId('asc.{E5773A43-F9B3-4E81-81D9-CE0A132470E7}');
```
