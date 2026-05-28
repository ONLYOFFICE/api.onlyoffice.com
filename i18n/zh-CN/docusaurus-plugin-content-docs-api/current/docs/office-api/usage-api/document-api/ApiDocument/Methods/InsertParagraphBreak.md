# InsertParagraphBreak

在光标位置向文档添加段落。

## 语法

```javascript
expression.InsertParagraphBreak();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中光标位置将当前段落拆分为两个。

```javascript editor-docx
// How do I insert a paragraph break at a chosen location in a document?

// Divide existing text into separate paragraphs without manually retyping any content.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");
```
