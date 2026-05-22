# GetContextualSpacing

返回当前段落的上下文间距值。

## 语法

```javascript
expression.GetContextualSpacing();
```

`expression` - 表示 [ApiParaPr](../ApiParaPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean \| undefined

## 示例

从文档中段落的格式读取上下文间距设置。

```javascript editor-docx
// How do I check whether contextual spacing is enabled for a paragraph in a document?

// Confirm the spacing behavior between same-styled paragraphs before adjusting layout.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
let paraPr = paragraph.GetParaPr();
paraPr.SetContextualSpacing(true);
paragraph.AddText("This is a paragraph with contextual spacing enabled.");
let contextualSpacing = paraPr.GetContextualSpacing();
let paragraph2 = Api.CreateParagraph();
paragraph2.AddText("Contextual spacing: " + contextualSpacing);
doc.Push(paragraph2);
```
