# SetTableDescription

设置表格说明。

## 语法

```javascript
expression.SetTableDescription(sDescr);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sDescr | 必需 | string |  | 要设置的表格说明。 |

## 返回值

boolean

## 示例

为文档中的表格分配描述性文本标签。

```javascript editor-docx
// How do I attach a written description to a table in a document?

// Give a table a readable summary that can be retrieved later in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableDescription("Empty table");
table.SetStyle(tableStyle);
let paragraph = doc.GetElement(0);
paragraph.AddText("Table description: " + tablePr.GetTableDescription());
doc.Push(table);
```
