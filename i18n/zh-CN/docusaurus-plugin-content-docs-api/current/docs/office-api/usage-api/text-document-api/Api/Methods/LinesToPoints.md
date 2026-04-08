# LinesToPoints

将行转换为磅（1 行 = 12 磅）。

## 语法

```javascript
expression.LinesToPoints(lines);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| lines | 必需 | number |  | 要转换为磅的行数。 |

## 返回值

number

## 示例

此示例展示如何将行转换为磅。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const lines = 100;
const points = Api.LinesToPoints(lines);
paragraph.AddText(lines + ' lines are equal to ' + points + ' points.');
doc.Push(paragraph);

```
