# MillimetersToPoints

将毫米转换为磅。

## 语法

```javascript
expression.MillimetersToPoints(mm);
```

`expression` - 表示 [Api](../Api.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| mm | 必需 | number |  | 要转换为磅的毫米数。 |

## 返回值

number

## 示例

将毫米测量值转换为排版磅并在文档中显示结果。

```javascript editor-docx
// How do I translate a length from millimeters into points in a document?

// Display the point equivalent of a millimeter value as a paragraph of text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();

const millimeters = 100;
const points = Api.MillimetersToPoints(millimeters);
paragraph.AddText(millimeters + ' millimeters are equal to ' + points + ' points.');
doc.Push(paragraph);
```
