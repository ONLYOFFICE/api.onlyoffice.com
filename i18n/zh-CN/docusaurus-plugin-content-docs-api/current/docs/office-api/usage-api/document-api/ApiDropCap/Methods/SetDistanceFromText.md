# SetDistanceFromText

设置首字下沉与段落文本之间的距离，以二十分之一磅（1/1440 英寸）为单位。

## 语法

```javascript
expression.SetDistanceFromText(distance);
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| distance | 必需 | [twips](../../Enumeration/twips.md) |  | 首字下沉与段落文本之间的距离。必须为非负数。 |

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md)

## 示例

设置文档中首字下沉与段落文本之间的距离。

```javascript editor-docx
// Add spacing between a drop cap and the surrounding paragraph text in a document.

// Increase the horizontal gap between the decorative initial letter and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistanceFromText(72);
```
