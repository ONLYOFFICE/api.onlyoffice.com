# GetJc

返回段落内容对齐方式。

## 语法

```javascript
expression.GetJc();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"left" \| "right" \| "both" \| "center" \| undefined

## 示例

此示例展示如何获取段落内容对齐方式。

```javascript editor-docx
// Get the justification of the paragraph and show it in the document.

// How to know the justification type of the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paragraph.AddText("This is a paragraph with the text in it aligned by the center. ");
paragraph.AddText("The justification is specified in the paragraph style. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes. ");
paragraph.AddText("These sentences are used to add lines for demonstrative purposes.");
paraPr.SetJc("center");
let paraJc = paraPr.GetJc();
paragraph = Api.CreateParagraph();
paragraph.AddText("Justification: " + paraJc);
doc.Push(paragraph);
```
