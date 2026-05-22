# SetTableLayout

指定将用于在文档中布局当前表格内容的算法。

## 语法

```javascript
expression.SetTableLayout(sType);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "autofit" \| "fixed" |  | 文档中表格布局的类型。 |

## 返回值

boolean

## 示例

选择文档中的表格是自动调整列大小还是保持固定宽度。

```javascript editor-docx
// How do I prevent table columns from changing size when content is added in a document?

// Lock column widths so the table structure stays consistent regardless of content in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetTableLayout("fixed");
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
doc.Push(table);
```
