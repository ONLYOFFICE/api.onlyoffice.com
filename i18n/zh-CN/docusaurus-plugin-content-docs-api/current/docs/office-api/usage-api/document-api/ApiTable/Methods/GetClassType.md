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

此示例获取类类型并将其插入到文档中。

```javascript editor-docx
// How to get a class type of ApiTable.

// Retrieve class type of ApiTable object and insert it to the document.

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
