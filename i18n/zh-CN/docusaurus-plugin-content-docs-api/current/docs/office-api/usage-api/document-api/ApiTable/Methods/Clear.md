# Clear

清除表格中的内容。

## 语法

```javascript
expression.Clear();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

boolean

## 示例

此示例清除表格中的内容。

```javascript editor-docx
// How to clear a content of a table.

// Get a table and remove everything from it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
doc.Push(table);
table.Clear();
let paragraph = Api.CreateParagraph();
paragraph.AddText("The content of the table was cleared.");
doc.Push(paragraph);
```
