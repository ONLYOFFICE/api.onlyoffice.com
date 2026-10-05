# SetTableLayout

指定将用于在文档中布局当前表格内容的算法。

继承自 [ApiTablePr.SetTableLayout](../../ApiTablePr/Methods/SetTableLayout.md)。

## 语法

```javascript
expression.SetTableLayout(sType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | "autofit" \| "fixed" |  | 文档中表格布局的类型。 |

## 返回值

boolean

## 示例

在文档中选择表格是自动调整列宽还是保持列宽固定。

```javascript editor-docx
// How do I lock a table's column widths so they do not change in a document?

// Prevent a table from resizing its columns when content changes in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetTableLayout("fixed");
let cell = table.GetRow(0).GetCell(0);
cell.GetContent().GetElement(0).AddText("Fixed layout");
table.SetStyle(tableStyle);
doc.Push(table);
```
