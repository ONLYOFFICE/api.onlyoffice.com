# GetEndPos

返回当前范围的结束位置。

## 语法

```javascript
expression.GetEndPos();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

number

## 示例

确定文档内容中选定文本区域的结束位置。

```javascript editor-docx
// How do I find the last character position of a text selection in a document?

// Pinpoint the final boundary of a highlighted span to measure its extent in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange();
paragraph = Api.CreateParagraph();
paragraph.AddText("We used range in previous paragraph with end position: " + range.GetEndPos());
doc.Push(paragraph);
```
