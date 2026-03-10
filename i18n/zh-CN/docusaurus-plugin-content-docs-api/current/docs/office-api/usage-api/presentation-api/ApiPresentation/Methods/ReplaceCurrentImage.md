# ReplaceCurrentImage

用指定的图像替换当前图像。

## 语法

```javascript
expression.ReplaceCurrentImage(sImageUrl, Width, Height);
```

`expression` - 表示 [ApiPresentation](../ApiPresentation.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| Width | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| Height | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例演示如何用指定的图像替换当前图像。

```javascript editor-pptx
// How to replace an image with another one.

// Replace the current ApiImage with another image on the slide.

const presentation = Api.GetPresentation();
const slide = presentation.GetSlideByIndex(0);
slide.RemoveAllObjects();

const url1 = 'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png';
const url2 = 'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png';

const drawing = Api.CreateImage(url1, 300 * 36000, 150 * 36000);
slide.AddObject(drawing);
drawing.Select();
presentation.ReplaceCurrentImage(url2, 60 * 36000, 60 * 36000);

```
