# GetElementsCount

返回当前文档中的元素数量。

继承自 [ApiDocumentContent.GetElementsCount](../../ApiDocumentContent/Methods/GetElementsCount.md)。

## 语法

```javascript
expression.GetElementsCount();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

统计文档中的所有元素，并显示在文档中添加段落前后的总数。

```javascript editor-docx
// How do I check how many elements exist at different points while building a document?

// Track the element count dynamically as new paragraphs are pushed into a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Number of document elements at this point: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
paragraph = Api.CreateParagraph();
paragraph.AddText("Now we add one more paragraph and push it.");
doc.Push(paragraph);
paragraph = Api.CreateParagraph();
paragraph.AddText("Number of document elements after we added the second paragraph ");
paragraph.AddText("but before we push the third one: ");
paragraph.AddTabStop();
paragraph.AddText("" + doc.GetElementsCount());
doc.Push(paragraph);
```
