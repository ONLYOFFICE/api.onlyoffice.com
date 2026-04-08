# CreateImage

使用指定的参数创建图像。

## 语法

```javascript
expression.CreateImage(imageSrc, width, height);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| imageSrc | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)

## 示例

此示例创建一个图像并将其粘贴到文档中。

```javascript editor-docx
// Creates the ApiImage object and adds it to the ApiParagraph class.

// How to create the ApiImage object using the URL to the image, its width and height.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let image = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(image);
```
