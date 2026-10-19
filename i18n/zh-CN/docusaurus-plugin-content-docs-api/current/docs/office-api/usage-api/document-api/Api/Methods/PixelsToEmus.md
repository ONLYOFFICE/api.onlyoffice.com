# PixelsToEmus

将像素转换为 EMU（英制度量单位）。

## 语法

```javascript
expression.PixelsToEmus(px);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| px | 必需 | number |  | 要转换为 EMU 的像素数。 |

## 返回值

number

## 示例

将像素值转换为英制度量单位并在文档中显示结果。

```javascript editor-docx
// How do I find the English metric unit equivalent of a pixel measurement in a document?

// Show the English metric unit value that matches a given number of pixels in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 1080;
const emus = Api.PixelsToEmus(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
```
