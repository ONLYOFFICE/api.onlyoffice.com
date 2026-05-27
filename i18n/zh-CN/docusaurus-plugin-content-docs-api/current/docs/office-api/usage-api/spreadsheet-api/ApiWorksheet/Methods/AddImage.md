# AddImage

使用指定的参数向当前工作表添加图像。

## 语法

```javascript
expression.AddImage(sImageSrc, nWidth, nHeight, nFromCol, nColOffset, nFromRow, nRowOffset);
```

`expression` - 表示 [ApiWorksheet](../ApiWorksheet.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sImageSrc | 必需 | string |  | 要插入的图像来源（目前仅支持网络 URL 或 Base64 编码的图像）。 |
| nWidth | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像宽度。 |
| nHeight | 必需 | [EMU](../../Enumeration/EMU.md) |  | 以英制度量单位表示的图像高度。 |
| nFromCol | 必需 | number |  | 图像起始位置所在的列号。 |
| nColOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromCol 列到图像左侧的偏移量，以英制单位测量。 |
| nFromRow | 必需 | number |  | 图像起始位置所在的行号。 |
| nRowOffset | 必需 | [EMU](../../Enumeration/EMU.md) |  | 从 nFromRow 行到图像上部的偏移量，以英制单位测量。 |

## 返回值

[ApiImage](../../ApiImage/ApiImage.md)

## 示例

在电子表格的工作表上以特定位置和大小放置图像。

```javascript editor-xlsx
// How do I embed a picture from a URL into my sheet in a spreadsheet?

// Decorate a worksheet by inserting an image with defined dimensions and placement.

let worksheet = Api.GetActiveSheet();
worksheet.AddImage("https://static.onlyoffice.com/assets/docs/samples/img/presentation_sky.png", 60 * 36000, 35 * 36000, 0, 2 * 36000, 0, 3 * 36000);
```
