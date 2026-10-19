# CreateImageStampAnnot

从图像创建图章注释。注释尺寸取自已加载的图像，或在图像加载后更新。

## 语法

```javascript
expression.CreateImageStampAnnot(position, imageSrc, author, creationDate);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| position | 必需 | [Point](../../Enumeration/Point.md) \| [Rect](../../Enumeration/Rect.md) |  | 注释左上角的位置。对于 Rect，仅使用 x1 和 y1。 |
| imageSrc | 必需 | string |  | 图像的来源（目前仅支持 Internet URL 或 Base64 编码的图像）。 |
| author | 可选 | string |  | 作者姓名 |
| creationDate | 可选 | number |  | 创建日期（时间戳） |

## 返回值

[ApiStampAnnotation](../../ApiStampAnnotation/ApiStampAnnotation.md)

## 示例

向 PDF 页面添加图像图章注释。

```javascript editor-pdf
// Create a PDF stamp annotation using an image URL.

// Place an image stamp at specified coordinates in a PDF.

let doc = Api.GetDocument();
let imageAnnot = Api.CreateImageStampAnnot(
	[40, 40, 160, 100],
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png'
);
let page = doc.GetPage(0);
page.AddObject(imageAnnot);
```
