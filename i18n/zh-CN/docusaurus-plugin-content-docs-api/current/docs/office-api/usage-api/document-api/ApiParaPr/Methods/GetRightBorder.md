# GetRightBorder

返回当前段落的右边框。

## 语法

```javascript
expression.GetRightBorder();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Border](../../Enumeration/Border.md) \| undefined

## 示例

检索文档中应用于段落的右边框样式和大小。

```javascript editor-docx
// How do I read the right border settings of a paragraph in a document?

// Inspect a paragraph's right border to display its type and size values in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetRightBorder("single", 24, 0, 255, 111, 61);
paragraph.AddText("This is a paragraph with a right border.");
let border = paraPr.GetRightBorder();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Right border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
```
