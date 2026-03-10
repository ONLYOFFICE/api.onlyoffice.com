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

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiRange.

// Retrieve class type of ApiRange object and insert it to the document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
let classType = range.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class type: " + classType);
doc.Push(paragraph);
```
