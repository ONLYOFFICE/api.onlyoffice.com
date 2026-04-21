# MoveCursorToEnd

将光标移动到文档末尾。

## 语法

```javascript
expression.MoveCursorToEnd();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

在文档中将光标移动到文档末尾。

```javascript editor-docx
// How to move cursor to end for a document?

// Move cursor to end and display the result in a document.

const doc = Api.GetDocument();
const paragraph = doc.GetElement(0);
paragraph.AddText('This is the first paragraph.');

const paragraph2 = Api.CreateParagraph();
paragraph2.AddText('This is the second paragraph.');
doc.Push(paragraph2);

doc.MoveCursorToEnd();
doc.EnterText(' Cursor was moved to the end.');
```
