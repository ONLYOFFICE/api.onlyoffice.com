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

获取文档对象的类类型。

```javascript editor-docx
// How can I get the class type of a document?

// Get the class type of a document and display it in the document.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
