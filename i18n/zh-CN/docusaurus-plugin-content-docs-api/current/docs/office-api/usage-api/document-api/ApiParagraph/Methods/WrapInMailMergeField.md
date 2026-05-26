# WrapInMailMergeField

将段落内容包装在邮件合并域中。

## 语法

```javascript
expression.WrapInMailMergeField();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将段落包含在邮件合并字段中，使其文本在文档中充当合并占位符。

```javascript editor-docx
// How do I mark a paragraph as a mail merge field to be filled with data during merging in a document?

// Turn a paragraph into a dynamic merge region that gets replaced with real values during mail merge in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
