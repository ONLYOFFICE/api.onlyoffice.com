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

此示例获取类类型并将其粘贴到演示文稿中。

```javascript editor-docx
// How to get a class type of ApiTablePr.

// Retrieve class type of ApiTablePr object and insert it to the document.

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
