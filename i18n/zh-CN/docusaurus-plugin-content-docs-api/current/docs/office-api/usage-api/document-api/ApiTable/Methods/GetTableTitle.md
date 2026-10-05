# GetTableTitle

返回表格标题（题注）。

继承自 [ApiTablePr.GetTableTitle](../../ApiTablePr/Methods/GetTableTitle.md)。

## 语法

```javascript
expression.GetTableTitle();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取文档中分配给表格的标题。

```javascript editor-docx
// How do I retrieve the title that has been set on a table in a document?

// Display the stored title of a table as paragraph text in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableTitle("Table 1");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table title: " + table.GetTableTitle());
doc.Push(table);
```
