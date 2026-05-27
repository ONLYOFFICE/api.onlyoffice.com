# AddTabStop

向当前段落添加制表位。

## 语法

```javascript
expression.AddTabStop();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiRun](../../ApiRun/ApiRun.md)

## 示例

在文档中插入制表位以对齐段落内的文本。

```javascript editor-docx
// How do I add horizontal spacing between words using tab characters in a document?

// Position a block of text further along the line by placing multiple tab stops after an opening sentence in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text. After it three tab stops will be added.");
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddTabStop();
paragraph.AddText("This is the text which starts after the tab stops.");
```
