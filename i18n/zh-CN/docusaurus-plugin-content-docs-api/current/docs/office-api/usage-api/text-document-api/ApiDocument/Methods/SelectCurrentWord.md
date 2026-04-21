# SelectCurrentWord

如果可能，选择当前单词。

## 语法

```javascript
expression.SelectCurrentWord();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

object

## 示例

选中文档中的当前单词。

```javascript editor-docx
// How to select the word at the specific cursor position in a document.

// Move the cursor to the position 16 and select the word in a document.

let doc = Api.GetDocument();
let para1 = doc.GetElement(0);
let run = para1.AddText("The quick brown fox jumps over the lazy dog");
run.MoveCursorToPos(16);

doc.SelectCurrentWord();

let para2 = Api.CreateParagraph();
para2.AddText("The selected text is " + doc.GetRangeBySelect().GetText());
doc.Push(para2);
```
