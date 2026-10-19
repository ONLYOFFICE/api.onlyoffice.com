# GetDistanceFromText

返回首字下沉与段落文本之间的距离，以二十分之一磅（1/1440 英寸）为单位。

## 语法

```javascript
expression.GetDistanceFromText();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[twips](../../Enumeration/twips.md)

## 示例

读取文档中首字下沉与段落文本之间的距离。

```javascript editor-docx
// Find out the gap between a drop cap and the paragraph text in a document.

// Retrieve the horizontal distance between the drop cap and the paragraph text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetDistanceFromText(72);
const distance = dropCap.GetDistanceFromText();
const result = Api.CreateParagraph();
result.AddText('The distance between the drop cap and the text: ' + distance + ' twips');
doc.Push(result);
```
