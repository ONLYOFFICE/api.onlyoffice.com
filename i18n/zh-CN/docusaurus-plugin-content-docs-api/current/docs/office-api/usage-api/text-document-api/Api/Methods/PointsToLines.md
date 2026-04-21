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

在文档中将磅转换为行。

```javascript editor-docx
// How can I convert points to lines in a document?

// Convert points to lines in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 100;
const lines = Api.PointsToLines(points);
paragraph.AddText(points + ' points are equal to ' + lines + ' lines.');
doc.Push(paragraph);
```
