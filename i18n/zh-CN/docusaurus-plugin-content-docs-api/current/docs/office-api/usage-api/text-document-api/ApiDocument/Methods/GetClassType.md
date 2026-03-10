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

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How get a class type of ApiDocument.

// Retrieve class type of a created document object and display it.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let classType = doc.GetClassType();
paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
