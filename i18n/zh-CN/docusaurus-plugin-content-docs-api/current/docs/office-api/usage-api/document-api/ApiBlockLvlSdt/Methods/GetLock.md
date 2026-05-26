# GetLock

返回当前容器的锁定类型。

## 语法

```javascript
expression.GetLock();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[SdtLock](../../Enumeration/SdtLock.md)

## 示例

读取文档中应用于内容控件的编辑限制。

```javascript editor-docx
// How do I check what lock type is set on a content control in a document?

// Apply a content lock to a content control and then verify what restriction is active in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Lock type: " + blockLvlSdt.GetLock());
```
