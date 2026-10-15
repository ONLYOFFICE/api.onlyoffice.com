# GetParent

返回请求此首字下沉的段落：可以是带框架的首字下沉段落本身，也可以是延续其文本的段落。

## 语法

```javascript
expression.GetParent();
```

`expression` - 表示 [ApiDropCap](../ApiDropCap.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

访问文档中创建首字下沉的父段落。

```javascript editor-docx
// Format the parent paragraph, such as its text color, in a document.

// Get the parent paragraph and set its text color to red in a document.

const doc = Api.GetDocument();
const paragraph = Api.CreateParagraph();
paragraph.AddText('Once upon a time, there was a paragraph that started with a large decorative letter.');
doc.Push(paragraph);
const dropCap = paragraph.SetDropCap('drop');
const parent = dropCap.GetParent();
parent.SetColor(Api.RGB(255, 0, 0));
```
