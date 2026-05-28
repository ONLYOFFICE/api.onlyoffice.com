# GetLeftBorder

返回当前段落的左边框。

## 语法

```javascript
expression.GetLeftBorder();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Border](../../Enumeration/Border.md) \| undefined

## 示例

检索文档中应用于段落的左边框设置。

```javascript editor-docx
// How do I read the left border from a paragraph's formatting in a document?

// Useful when you need to inspect border details such as type and size drawn to the left of a paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetLeftBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a left border.");
let border = paraPr.GetLeftBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Left border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
```
