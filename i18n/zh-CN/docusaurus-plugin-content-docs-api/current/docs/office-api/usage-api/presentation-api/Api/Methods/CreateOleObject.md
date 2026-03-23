# CreateOleObject

使用指定的参数创建 OLE 对象。

## 语法

```javascript
expression.CreateOleObject(sImageSrc, nWidth, nHeight, sData, sAppId);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的 OLE 对象宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的 OLE 对象高度。 |
| sData | 必需 | string |  | OLE 对象字符串数据。 |
| sAppId | 必需 | string |  | 与当前 OLE 对象关联的应用程序 ID。 |

## 返回值

[ApiOleObject](../../ApiOleObject/ApiOleObject.md)

## 示例

此示例创建 OLE 对象并将其插入幻灯片。

```javascript editor-pptx
// How to create an Ole object.

// Add an Ole object to the slide.
 
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

```
