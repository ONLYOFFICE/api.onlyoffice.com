# GetClassType

返回 ApiRange 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"range"

## 示例

识别文档中所选文本区域的类型。

```javascript editor-docx
// How do I check what kind of object a text selection is in a document?

// Confirm the category of a highlighted portion before applying further changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
let classType = range.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
