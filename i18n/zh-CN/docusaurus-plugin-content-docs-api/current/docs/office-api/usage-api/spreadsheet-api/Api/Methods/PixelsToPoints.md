# PixelsToPoints

将像素转换为磅。

## 语法

```javascript
expression.PixelsToPoints(px);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | 必需 | number |  | 要转换为磅的像素数。 |

## 返回值

number

## 示例

在电子表格中将像素数表示为排版磅。

```javascript editor-xlsx
// How do I turn a number of pixels into an equivalent number of points in a spreadsheet?

// Record the point equivalent of a pixel measurement in a spreadsheet.

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
const text = pixels + ' pixels are equal to ' + points + ' points.';

let worksheet = Api.GetActiveSheet();
worksheet.GetRange('B2').SetValue(text);
```
