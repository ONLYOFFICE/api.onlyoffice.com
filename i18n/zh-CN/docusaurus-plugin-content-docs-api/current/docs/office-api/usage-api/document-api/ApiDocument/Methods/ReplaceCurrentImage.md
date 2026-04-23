# ReplaceCurrentImage

用指定的图像替换当前图像。

## 语法

```javascript
expression.ReplaceCurrentImage(sImageUrl, Width, Height);
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| Width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| Height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |

## 返回值

boolean

## 示例

此示例用指定的图像替换当前图像。

```javascript editor-docx
// How to change the image to another one.

// Add the new image instead of another using the URL.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let drawing = Api.CreateImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000
);
paragraph.AddDrawing(drawing);
drawing.Select();
doc.ReplaceCurrentImage('https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png');

```
