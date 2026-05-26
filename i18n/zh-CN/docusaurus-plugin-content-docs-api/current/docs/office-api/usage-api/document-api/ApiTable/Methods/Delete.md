# Delete

删除当前表格。

## 语法

```javascript
expression.Delete();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

从文档中完全删除表格。

```javascript editor-docx
// How do I delete a table from a document?

// Eliminate an unwanted table so it no longer appears in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
table.Delete();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The table was removed from the document.");
doc.Push(paragraph);
```
