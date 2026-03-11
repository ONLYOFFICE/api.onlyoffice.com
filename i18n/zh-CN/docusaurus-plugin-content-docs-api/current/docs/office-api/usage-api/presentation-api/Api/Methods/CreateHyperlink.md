# CreateHyperlink

创建新的超链接对象，用于在绘图对象（形状或图像）上设置超链接。

## 语法

```javascript
expression.CreateHyperlink(link, tooltip);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| link | 必需 | string |  | 超链接地址。 |
| tooltip | 必需 | string |  | 工具提示文本。 |

## 返回值

[ApiHyperlink](../../ApiHyperlink/ApiHyperlink.md)

## 示例

此示例展示如何创建超链接并将其设置到图像。

```javascript editor-pptx
const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	150 * 36000, 150 * 36000
);
slide.AddObject(image);

const hyperlink = Api.CreateHyperlink('https://onlyoffice.com', 'Link to OnlyOffice website');
image.SetHyperlink(hyperlink);

```
