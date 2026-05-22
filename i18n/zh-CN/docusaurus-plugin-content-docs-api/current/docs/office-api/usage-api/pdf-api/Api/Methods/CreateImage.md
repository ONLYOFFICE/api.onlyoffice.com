# CreateImage

使用指定的参数创建图像。

## 语法

```javascript
expression.CreateImage(sImageSrc, nWidth, nHeight);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | 必需 | string |  | 要插入的图像来源（目前， |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)

## 示例

在 PDF 文档中使用 URL 创建图像对象并指定其宽度和高度。

```javascript editor-pdf
// Create an image and insert it to the page.

// Create the image in a PDF document.

const doc = Api.GetDocument();
const page = doc.GetPage(0);
const shape = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);
page.AddObject(shape);
```
