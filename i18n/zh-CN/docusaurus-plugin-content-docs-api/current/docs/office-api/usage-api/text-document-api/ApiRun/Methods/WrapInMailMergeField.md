# WrapInMailMergeField

将文本块包装在邮件合并域中。

## 语法

```javascript
expression.WrapInMailMergeField();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类（文本块）的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中用邮件合并字段包装 run。

```javascript editor-docx
// How to create a run wrapped in 'Mail Merge Field' in a document.

// Add a text run to the mail merge field in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let run = Api.CreateRun();
run.AddText("Name");
paragraph.AddElement(run);
run.WrapInMailMergeField();
paragraph.AddLineBreak();
run = Api.CreateRun();
run.AddText("Surname");
paragraph.AddElement(run);
run.WrapInMailMergeField();
```
