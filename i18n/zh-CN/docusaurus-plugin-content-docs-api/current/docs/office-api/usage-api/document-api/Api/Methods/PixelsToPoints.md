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

将像素测量值转换为排版磅并在文档中显示结果。

```javascript editor-docx
// How do I translate a pixel value into points in a document?

// Write out the point equivalent of a given pixel count as readable text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const pixels = 100;
const points = Api.PixelsToPoints(pixels);
paragraph.AddText(pixels + ' pixels are equal to ' + points + ' points.');
doc.Push(paragraph);
```
