# PointsToInches

将磅转换为英寸。

## 语法

```javascript
expression.PointsToInches(pt);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| pt | 必需 | number |  | 要转换为英寸的磅数。 |

## 返回值

number

## 示例

此示例展示如何将磅转换为英寸。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const points = 1000;
const inches = Api.PointsToInches(points);
paragraph.AddText(points + ' points are equal to ' + inches + ' inches.');
doc.Push(paragraph);

```
