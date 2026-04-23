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

此示例展示如何在当前光标位置输入段落。

```javascript editor-docx
// How to add a paragraph at the cursor position.

// Add text and create a new paragraph.
let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("This is the first paragraph.");
doc.MoveCursorRight(6, false, true);
doc.InsertParagraphBreak();
doc.EnterText("This is the second paragraph.");
```
