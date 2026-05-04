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

移除文档中的当前选区。

```javascript editor-docx
// How to remove the selected part of the document.

// Select the range and delete it in a document.

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
