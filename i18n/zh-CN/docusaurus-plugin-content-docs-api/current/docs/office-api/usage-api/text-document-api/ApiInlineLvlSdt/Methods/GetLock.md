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

此示例展示如何获取容器的锁定类型。

```javascript editor-docx
// How to display the lock of the inline text control in the document.

// Set the lock type of the inline text element and print it.

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
