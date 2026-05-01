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

在文档中用邮件合并字段包装段落内容。

```javascript editor-docx
// How to create a paragraph wrapped in 'Mail Merge Field' in a document.

// Add a paragraph to the mail merge field in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
