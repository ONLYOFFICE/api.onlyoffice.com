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

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-docx
// How to get a class type of ApiTableRowPr.

// Retrieve class type of ApiTableRowPr object and insert it to the document.

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
