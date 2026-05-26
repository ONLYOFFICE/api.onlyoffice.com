# GetLock

返回当前容器的锁定类型。

## 语法

```javascript
expression.GetLock();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SdtLock](../../Enumeration/SdtLock.md)

## 示例

读取文档中应用于内联内容控件的锁定类型。

```javascript editor-docx
// How do I check the lock setting of an inline content control in a document?

// Confirm a content lock by setting it on an inline control and printing the result in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
let run = Api.CreateRun();
run.AddText("This is an inline text content control with the content lock set to it.");
inlineLvlSdt.AddElement(run, 0);
inlineLvlSdt.SetLock("sdtContentLocked");
paragraph.AddInlineLvlSdt(inlineLvlSdt);
let lock = inlineLvlSdt.GetLock();
paragraph = Api.CreateParagraph();
paragraph.AddText("Lock type: " + lock);
doc.Push(paragraph);
```
