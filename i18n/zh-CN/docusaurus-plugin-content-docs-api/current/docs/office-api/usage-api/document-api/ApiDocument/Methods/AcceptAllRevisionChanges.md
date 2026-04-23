# AcceptAllRevisionChanges

接受在审阅模式下所做的所有更改。

## 语法

```javascript
expression.AcceptAllRevisionChanges();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例接受在审阅模式下所做的所有更改。

```javascript editor-docx
// How to apply all changes and fixes after review.

// Change the status of the document to the review mode and apply all changes.

let doc = Api.GetDocument();
let paragraph1 = doc.GetElement(0);
doc.SetTrackRevisions(true);
paragraph1.AddText("Reviewing documents");
paragraph1.SetJc("center");
paragraph1.SetFontSize(24);
paragraph1.SetBold(true);
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("If you need to get review report, you can use Document Builder. The steps below will show how to do it.");
doc.Push(paragraph2);
doc.AcceptAllRevisionChanges();
doc.SetTrackRevisions(false);
let paragraph = Api.CreateParagraph();
paragraph.AddText("All revision changes in this document were accepted.");
doc.Push(paragraph);
```
