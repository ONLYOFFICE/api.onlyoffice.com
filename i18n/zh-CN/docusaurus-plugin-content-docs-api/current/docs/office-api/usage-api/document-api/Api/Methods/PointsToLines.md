# PointsToLines

将磅转换为行（1 行 = 12 磅）。

## 语法

```javascript
expression.PointsToLines(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为行的磅数。 |

## 返回值

number

## 示例

将排版磅值转换为行并在文档中显示结果。

```javascript editor-docx
// How do I find the line equivalent of a measurement given in points in a document?

// Show how many lines correspond to a specific number of points as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);
```
