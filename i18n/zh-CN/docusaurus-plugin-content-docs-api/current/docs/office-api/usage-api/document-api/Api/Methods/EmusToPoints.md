# EmusToPoints

将 EMU（英制度量单位）转换为磅。

## 语法

```javascript
expression.EmusToPoints(emu);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| emu | 必需 | number |  | 要转换为磅的 EMU 数。 |

## 返回值

number

## 示例

在文档中将 EMU 转换为磅。

```javascript editor-docx
// How do I convert EMUs to points in a document?

// Display the equivalent point value for a given number of EMUs in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const emus = 100;
const points = Api.EmusToPoints(emus);
paragraph.AddText(emus + ' emus are equal to ' + points + ' points.');
doc.Push(paragraph);
```
