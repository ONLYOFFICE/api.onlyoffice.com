# GetClassType

返回 ApiParagraph 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiParagraph](../ApiParagraph.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"paragraph"

## 示例

获取文档中段落对象的类类型。

```javascript editor-docx
// How can I get the class type of a paragraph in a document?

// Get the class type of a paragraph and display it in the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let classType = paragraph.GetClassType();
paragraph.AddText("Class Type = " + classType);
```
