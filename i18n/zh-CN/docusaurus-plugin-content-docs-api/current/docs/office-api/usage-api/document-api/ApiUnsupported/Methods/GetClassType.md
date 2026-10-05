# GetClassType

返回 ApiUnsupported 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiUnsupported](../ApiUnsupported.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"unsupported"

## 示例

读取文档中无法识别的批注对象的类型标识符。

```javascript editor-docx
// How do I find out what kind of unsupported element I have encountered in a document?

// Confirm the category of an unknown annotation by retrieving its type label in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This paragraph has a comment.");
paragraph.AddComment("comment", "John Smith");
let element = paragraph.GetElement(0);
let classType = element.GetClassType();
paragraph = Api.CreateParagraph();
paragraph.AddText("Class Type = " + classType);
doc.Push(paragraph);
```
