# Last

返回最后一个文档元素。

## 语法

```javascript
expression.Last();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[DocumentElement](../../Enumeration/DocumentElement.md)

## 示例

检索文档的最后一个元素。

```javascript editor-docx
// How do I access the final paragraph or element in a document?

// Apply bold formatting to the closing section without knowing the total element count in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is a sample text №1.");
paragraph = Api.CreateParagraph();
paragraph.AddText("This is a sample text №2.");
doc.Push(paragraph);
let element = doc.Last();
element.SetBold(true);
```
