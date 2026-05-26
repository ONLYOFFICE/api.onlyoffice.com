# GetClassType

返回 ApiTablePr 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"tablePr"

## 示例

识别文档中附加到表格的格式对象类型。

```javascript editor-docx
// How do I confirm what category a table's settings object belongs to in a document?

// Verify the object type of a table's property container in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = tablePr.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
