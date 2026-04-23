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

此示例将段落内容包装在邮件合并域中。

```javascript editor-docx
// How to create a paragraph wrapped in 'Mail Merge Field'.

// Add a paragraph to the mail merge field.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Paragraph wrapped in 'Mail Merge Field'");
paragraph.WrapInMailMergeField();
```
