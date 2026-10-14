# GetPosition

返回首字下沉类型。

## 语法

```javascript
expression.GetPosition();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"none" \| "drop" \| "margin"

## 示例

读取文档中首字下沉的类型。

```javascript editor-docx
// Check whether a drop cap is placed in the text or in the margin in a document.

// Retrieve the current drop cap type from a paragraph drop cap in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('margin');
const type = dropCap.GetPosition();
const result = Api.CreateParagraph();
result.AddText('The drop cap type: ' + type);
doc.Push(result);
```
