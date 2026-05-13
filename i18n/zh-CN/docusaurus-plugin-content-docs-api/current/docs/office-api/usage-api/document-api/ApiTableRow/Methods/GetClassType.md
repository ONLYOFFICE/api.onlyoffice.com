# GetClassType

返回 ApiTableRow 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tableRow"

## 示例

获取文档中表格行的类类型。

```javascript editor-docx
// How to identify the class type of a table row in a document?

// Obtain the class type identifier of a table row object in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let tableRow = table.GetRow(0);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tableRow.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
