# SetRowPr

为当前表格行设置属性。

## 语法

```javascript
expression.SetRowPr(oApiTableRowPr);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| oApiTableRowPr | 必需 | [ApiTableRowPr](../../ApiTableRowPr/ApiTableRowPr.md) |  | 表格行属性。 |

## 返回值

boolean

## 示例

设置文档中表格行的格式属性。

```javascript editor-docx
// SetRowPr applies an ApiTableRowPr object to configure row appearance such as height.

// Create a table, build row properties with a fixed minimum height, and apply them to the first row in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let row = table.GetRow(0);
let rowPr = Api.CreateTableRowPr();
rowPr.SetHeight("atLeast", 720);
row.SetRowPr(rowPr);
```
