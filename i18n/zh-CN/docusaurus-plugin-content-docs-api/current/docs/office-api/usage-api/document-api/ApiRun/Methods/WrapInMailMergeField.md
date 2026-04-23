# WrapInMailMergeField

将运行包装在邮件合并域中。

## 语法

```javascript
expression.WrapInMailMergeField();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例将运行包装在邮件合并域中。

```javascript editor-docx
// How to create a run wrapped in 'Mail Merge Field'.

// Add a text run to the mail merge field.

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
