# PointsToPixels

将磅转换为像素。

## 语法

```javascript
expression.PointsToPixels(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为像素的磅数。 |

## 返回值

number

## 示例

在文档中将磅转换为像素。

```javascript editor-docx
// How do I convert points to pixels in a document?

// Display the pixel equivalent of a point value as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const pixels = Api.PointsToPixels(points);
paragraph.AddText(points + ' points are equal to ' + pixels + ' pixels.');
doc.Push(paragraph);
```
