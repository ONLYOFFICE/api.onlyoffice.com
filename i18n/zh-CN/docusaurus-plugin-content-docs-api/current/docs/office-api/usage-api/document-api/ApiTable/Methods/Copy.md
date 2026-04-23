# Copy

创建当前表格的副本。

## 语法

```javascript
expression.Copy();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md)

## 示例

此示例创建表格的副本。

```javascript editor-docx
// How to create identical table.

// Get a table object and create a copy of it.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let copyTable = table.Copy();
doc.Push(copyTable);
```
