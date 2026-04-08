# GetTables

返回表示嵌套在指定表格中的所有表格的数组。

## 语法

```javascript
expression.GetTables();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)[]

## 示例

此示例展示如何获取指定表格的嵌套表格。

```javascript editor-docx
// How to get all tables from the table object.

// Get array of tables and update their width.

let doc = Api.GetDocument();
let table1 = Api.CreateTable(3, 3);
let table2 = Api.CreateTable(3, 3);
let table3 = Api.CreateTable(2, 2);
let cell1 = table1.GetRow(0).GetCell(0);
let cell2 = table1.GetRow(1).GetCell(1);
table1.AddElement(cell1, 0, table2);
table1.AddElement(cell2, 0, table3);
table1.SetWidth("percent", 100);
doc.Push(table1);
let arrTables = table1.GetTables();
arrTables[0].SetWidth("percent", 50);
arrTables[1].SetWidth("percent", 30);
```
