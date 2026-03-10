# ReplaceCurrentImage

用新图像替换当前图像。

## 语法

```javascript
expression.ReplaceCurrentImage(sImageUrl, nWidth, nHeight);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageUrl | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |

## 返回值

此方法不返回任何数据。

## 示例

此示例用新图像替换原图像。

```javascript editor-xlsx
// How to replace an image to another one.

// Replace an image from one to another using their urls.

let worksheet = Api.GetActiveSheet();
let drawing = worksheet.AddImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png',
	60 * 36000, 60 * 36000,
	0, 2 * 36000, 0, 3 * 36000
); // todo_example we don't have method ApiDrawing.Select() which is necessary for this example
worksheet.ReplaceCurrentImage(
	'https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png',
	60 * 36000, 60 * 36000
);

```
