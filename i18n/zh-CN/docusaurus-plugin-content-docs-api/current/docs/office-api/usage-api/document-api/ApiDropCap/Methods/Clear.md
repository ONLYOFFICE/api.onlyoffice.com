# Clear

移除首字下沉，将首字下沉字母合并回段落文本中。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中移除首字下沉，并将其字母合并回段落中。

```javascript editor-docx
// Remove the drop cap of a paragraph and restore its original text in a document.

// Delete the drop cap of a paragraph and merge the decorative letter back into the text in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.Clear();
```
