# PointsToCentimeters

将磅转换为厘米。

## 语法

```javascript
expression.PointsToCentimeters(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为厘米的磅数。 |

## 返回值

number

## 示例

将排版磅值转换为厘米并在文档中显示结果。

```javascript editor-docx
// How do I find the centimeter equivalent of a measurement given in points in a document?

// Write out how many centimeters correspond to a specific number of points in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const centimeters = Api.PointsToCentimeters(points);
paragraph.AddText(points + ' points are equal to ' + centimeters + ' centimeters.');
doc.Push(paragraph);
```
