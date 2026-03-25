# PointsToTwips

将磅转换为缇。

## 语法

```javascript
expression.PointsToTwips(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为缇的磅数。 |

## 返回值

number

## 示例

此示例展示如何将磅转换为缇。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const twips = Api.PointsToTwips(points);
paragraph.AddText(points + ' points are equal to ' + twips + ' twips.');
doc.Push(paragraph);

```
