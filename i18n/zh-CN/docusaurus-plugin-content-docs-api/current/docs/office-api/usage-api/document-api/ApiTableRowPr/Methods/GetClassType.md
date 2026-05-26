# GetClassType

返回 ApiTableRowPr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRowPr](../ApiTableRowPr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRowPr"

## 示例

读取文档中表格行属性对象的类类型。

```javascript editor-docx
// How do I find out what kind of object holds the row formatting settings in a document?

// Identify the type label assigned to a table row properties object in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRowPr = tableStyle.GetTableRowPr();
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRowPr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
