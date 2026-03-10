# TwipsToPoints

将缇转换为磅。

## 语法

```javascript
expression.TwipsToPoints(twips);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| twips | 必需 | number |  | 要转换为磅的缇数。 |

## 返回值

number

## 示例

此示例展示如何将缇转换为磅。

```javascript editor-docx
const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const twips = 100;
const points = Api.TwipsToPoints(twips);
paragraph.AddText(twips + ' twips are equal to ' + points + ' points.');
doc.Push(paragraph);

```
