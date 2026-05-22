# PointsToEmus

将磅转换为 EMU（英制度量单位）。

## 语法

```javascript
expression.PointsToEmus(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为 EMU 的磅数。 |

## 返回值

number

## 示例

将排版磅值转换为英制度量单位并在文档中显示结果。

```javascript editor-docx
// How do I translate a point measurement into English metric units in a document?

// Show the English metric unit equivalent of a given number of points as text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const emus = Api.PointsToEmus(points);
paragraph.AddText(points + ' points are equal to ' + emus + ' english metric units.');
doc.Push(paragraph);
```
