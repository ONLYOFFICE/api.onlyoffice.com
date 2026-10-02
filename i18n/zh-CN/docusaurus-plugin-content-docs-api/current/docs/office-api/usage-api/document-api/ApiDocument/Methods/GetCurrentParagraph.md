# GetCurrentParagraph

返回光标所在的当前段落。

继承自 [ApiDocumentContent.GetCurrentParagraph](../../ApiDocumentContent/Methods/GetCurrentParagraph.md)。

## 语法

```javascript
expression.GetCurrentParagraph();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiParagraph](../../ApiParagraph/ApiParagraph.md)

## 示例

访问文档中光标所在的段落。

```javascript editor-docx
// How do I get the paragraph at the current cursor position in a document?

// Apply bold formatting to the paragraph the user is actively editing in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetCurrentParagraph();
paragraph.AddText('This is current paragraph');
paragraph.SetBold(true);
```
