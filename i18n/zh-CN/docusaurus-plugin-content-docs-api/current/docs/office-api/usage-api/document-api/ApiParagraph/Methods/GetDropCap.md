# GetDropCap

返回与当前段落相关的首字下沉（如果有）。

## 语法

```javascript
expression.GetDropCap();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiDropCap](../../ApiDropCap/ApiDropCap.md) \| null \| undefined

## 示例

在文档中获取段落的首字下沉以调整其设置。

```javascript editor-docx
// How do I access an existing drop cap of a paragraph to change its settings in a document?

// Retrieve the drop cap object of a paragraph and change the number of lines it spans in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
paragraph.SetDropCap('drop');
const dropCap = paragraph.GetDropCap();
dropCap.SetLinesToDrop(2);
```
