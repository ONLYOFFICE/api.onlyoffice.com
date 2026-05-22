# Select

将选区设置为指定范围。

## 语法

```javascript
expression.Select();
```

`expression` - 表示 [ApiRange](../ApiRange.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将文档中的特定文本范围高亮显示为活动选区。

```javascript editor-docx
// How do I make a portion of text become the current selection in a document?

// Mark a segment of text so it is selected and ready for further actions in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("ONLYOFFICE Document Builder");
let range = paragraph.GetRange(0, 9);
range.Select();
paragraph = Api.CreateParagraph();
paragraph.AddText("The word 'ONLYOFFICE' was just selected.");
doc.Push(paragraph);
```
