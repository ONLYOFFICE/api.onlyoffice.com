# GetClassType

返回 ApiComment 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiComment](../ApiComment.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"comment"

## 示例

检索文档中批注对象的类类型。

```javascript editor-docx
// How do I check what type of object a comment is in a document?

// Confirm the object category of a comment to distinguish it from other element types.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is just a sample text");
Api.AddComment(paragraph, "comment", "John Smith");
let comments = doc.GetAllComments();
let classType = comments[0].GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
