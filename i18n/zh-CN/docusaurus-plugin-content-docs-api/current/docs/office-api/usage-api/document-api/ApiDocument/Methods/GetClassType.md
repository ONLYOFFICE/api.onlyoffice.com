# GetClassType

返回 ApiDocument 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"document"

## 示例

读取文档中文档对象的类类型标识符。

```javascript editor-docx
// How do I check what class type a document object belongs to in a document?

// Confirm the object kind before processing it by reading its class type in a document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
