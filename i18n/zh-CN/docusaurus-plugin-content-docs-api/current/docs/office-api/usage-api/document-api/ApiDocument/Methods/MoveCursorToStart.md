# MoveCursorToStart

将光标移动到文档开头。

## 语法

```javascript
expression.MoveCursorToStart();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

将光标移动到文档的最开头。

```javascript editor-docx
// How do I place the cursor at the first position in a document?

// Prepend text before all existing content by jumping the cursor to the start in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToStart();
doc.EnterText('Cursor was moved to the beginning. ');
```
