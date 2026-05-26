# GetClassType

返回 ApiTable 类的类型。

## 语法

```javascript
expression.GetClassType();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

"table"

## 示例

识别文档中表格的对象类型。

```javascript editor-docx
// How do I check what kind of object a table is in a document?

// Confirm the category of a table element and display the result in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
let classType = table.GetClassType();
let paragraph = doc.GetElement(0);
paragraph.AddText("Class Type = " + classType);
```
