# RemoveSelection

移除当前选区。

## 语法

```javascript
expression.RemoveSelection();
```

`expression` - 表示 [ApiDocument](../ApiDocument.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

删除文档中当前选定的文本范围。

```javascript editor-docx
// How do I remove a selected portion of text in a document?

// Programmatically select a range and then erase it to trim content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("Api ONLYOFFICE");
let range = doc.GetRange(0, 2);
range.Select();
doc.RemoveSelection();
paragraph = Api.CreateParagraph();
paragraph.AddText("The selection from the word 'Api' was removed.");
doc.Push(paragraph);
```
