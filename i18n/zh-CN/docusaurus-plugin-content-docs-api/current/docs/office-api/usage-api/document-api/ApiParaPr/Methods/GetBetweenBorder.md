# GetBetweenBorder

返回当前段落的段间边框。

## 语法

```javascript
expression.GetBetweenBorder();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[Border](../../Enumeration/Border.md) \| undefined

## 示例

检索文档中应用于段落样式的段间边框设置。

```javascript editor-docx
// How do I read the between border from a paragraph's formatting in a document?

// Useful when you need to inspect border details such as type and size set between paragraphs.

let doc = Api.GetDocument();
let myStyle = doc.CreateStyle("My document style");
let paraPr = myStyle.GetParaPr();
paraPr.SetBetweenBorder("single", 24, 0, 255, 111, 61);
let border = paraPr.GetBetweenBorder();
let paragraph = doc.GetElement(0);
paragraph.SetStyle(myStyle);
paragraph.AddText("This is a paragraph with a between border.");
let paragraph2 = Api.CreateParagraph();
paragraph2.SetStyle(myStyle);
paragraph2.AddText("Between border type: " + border.Type + ", size: " + border.Size);
doc.Push(paragraph2);
```
