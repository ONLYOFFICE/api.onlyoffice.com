# GetPageBreakBefore

返回当前段落的段前分页值。

## 语法

```javascript
expression.GetPageBreakBefore();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| undefined

## 示例

读取文档中段落是否设置为从新页面开始。

```javascript editor-docx
// How do I check if a page break is applied before a paragraph in a document?

// Confirm that a paragraph's page break setting is active by reading its value and displaying it in a document.

let doc = Api.GetDocument();
doc.Push(Api.CreateParagraph());
let paragraph = doc.GetElement(1);
let paraPr = paragraph.GetParaPr();
paraPr.SetPageBreakBefore(true);
paragraph.AddText("This paragraph starts on a new page.");
let pageBreakBefore = paraPr.GetPageBreakBefore();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Page break before: " + pageBreakBefore);
doc.Push(paragraph2);
```
