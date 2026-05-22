# GetId

返回当前内容控件的唯一 ID。

## 语法

```javascript
expression.GetId();
```

`expression` - 表示 [ApiBlockLvlSdt](../ApiBlockLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取分配给文档中内容控件的 ID。

```javascript editor-docx
// How do I get the ID of a content control in a document?

// Retrieve a content control's identifier and display it as text in a document.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
blockLvlSdt.SetId("4815162342");
blockLvlSdt.GetContent().GetElement(0).AddText("This is a block text content control with an ID set to it.");
doc.AddElement(0, blockLvlSdt);

let contentControlId = blockLvlSdt.GetId();
let paragraph = Api.CreateParagraph();
paragraph.AddText("Id: " + contentControlId);
doc.Push(paragraph);
```
