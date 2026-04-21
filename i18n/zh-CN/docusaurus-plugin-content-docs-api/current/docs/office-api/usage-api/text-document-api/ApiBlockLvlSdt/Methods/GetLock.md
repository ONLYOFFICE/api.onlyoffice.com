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

获取文档中容器的锁定类型。

```javascript editor-docx
// Create a block content control, set its lock to "sdtContentLocked", and return the lock type to insert it into the second paragraph of the document.

// How to get the lock type of the block-level content control object in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with the content lock set to it.");
blockLvlSdt.SetLock("sdtContentLocked");
doc.AddElement(0, blockLvlSdt);
doc.GetElement(1).AddText("Lock type: " + blockLvlSdt.GetLock());
```
