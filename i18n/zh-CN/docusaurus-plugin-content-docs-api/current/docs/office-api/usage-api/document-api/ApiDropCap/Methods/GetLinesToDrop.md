# GetLinesToDrop

返回首字下沉所占的行数。

## 语法

```javascript
expression.GetLinesToDrop();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

读取文档中首字下沉跨越的行数。

```javascript editor-docx
// Find out how many lines the drop cap of a paragraph drops down in a document.

// Retrieve the line count that the drop cap of a paragraph occupies in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
dropCap.SetLinesToDrop(3);
const lines = dropCap.GetLinesToDrop();
const result = Api.CreateParagraph();
result.AddText('The drop cap spans ' + lines + ' lines');
doc.Push(result);
```
