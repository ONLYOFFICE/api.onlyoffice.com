# GetTableDescription

返回表格说明。

继承自 [ApiTablePr.GetTableDescription](../../ApiTablePr/Methods/GetTableDescription.md)。

## 语法

```javascript
expression.GetTableDescription();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

string

## 示例

读取分配给文档中表格的描述性文本。

```javascript editor-docx
// How do I retrieve the description that has been set on a table in a document?

// Display the stored description of a table as paragraph text in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + table.GetTableDescription());
doc.Push(table);
```
