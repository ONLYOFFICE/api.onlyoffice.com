# InchesToPoints

将英寸转换为磅。

## 语法

```javascript
expression.InchesToPoints(inches);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| inches | 必需 | number |  | 要转换为磅的英寸数。 |

## 返回值

number

## 示例

在文档中将英寸转换为磅。

```javascript editor-docx
// How do I convert inches to points in a document?

// Display the equivalent point value for a given number of inches in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const inches = 100;
const points = Api.InchesToPoints(inches);
paragraph.AddText(inches + ' inches are equal to ' + points + ' points.');
doc.Push(paragraph);
```
