# GetParentContentControl

返回包含当前表格的内容控件。

## 语法

```javascript
expression.GetParentContentControl();
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiBlockLvlSdt](../../ApiBlockLvlSdt/ApiBlockLvlSdt.md) \| null

## 示例

此示例展示如何获取包含表格的内容控件。

```javascript editor-docx
// How to get the parent element of the table and set its alias.

// Retrieve the parent content control of the table.

let doc = Api.GetDocument();
let blockLvlSdt = Api.CreateBlockLvlSdt();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
blockLvlSdt.AddElement(table, 0);
doc.AddElement(0, blockLvlSdt);
let parentContentControl = table.GetParentContentControl();
parentContentControl.SetAlias("№1");
```
