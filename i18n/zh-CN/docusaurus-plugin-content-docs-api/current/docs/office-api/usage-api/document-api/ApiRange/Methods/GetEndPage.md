# GetEndPage

返回当前范围的结束页码。

## 语法

```javascript
expression.GetEndPage();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

Number

## 示例

查找文档中选定文本区域结束的最后一页。

```javascript editor-docx
// How do I determine which page a text selection finishes on in a document?

// Locate the closing page of a highlighted span to understand its layout position in a document.

const doc = Api.GetDocument();

const firstParagraph = doc.GetElement(0);
firstParagraph.AddText('This text is on the first page.');

doc.MoveCursorToEnd();
doc.InsertBlankPage();

const secondParagraph = Api.CreateParagraph();
secondParagraph.AddText('This text is on the second page.');
doc.Push(secondParagraph);

const firstRange = firstParagraph.GetRange();
const secondRange = secondParagraph.GetRange();

const resultParagraph = Api.CreateParagraph();
resultParagraph.AddText('First paragraph range ends on page: ' + firstRange.GetEndPage());
resultParagraph.AddLineBreak();
resultParagraph.AddText('Second paragraph range ends on page: ' + secondRange.GetEndPage());
doc.Push(resultParagraph);
```
