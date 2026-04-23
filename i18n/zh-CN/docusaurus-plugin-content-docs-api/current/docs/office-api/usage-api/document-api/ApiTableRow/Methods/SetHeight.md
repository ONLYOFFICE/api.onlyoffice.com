# SetHeight

设置当前表格中当前表格行的高度。

## 语法

```javascript
expression.SetHeight(sHRule, nValue);
```

`expression` - 表示 [ApiTableRow](../ApiTableRow.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sHRule | 必需 | "auto" \| "atLeast" |  | 将高度值应用于当前表格行或忽略它的规则。使用 &lt;code&gt;"atLeast"&lt;/code&gt; 值以启用 &lt;code&gt;SetHeight&lt;/code&gt; 方法。 |
| nValue | 可选 | [twips](../../Enumeration/twips.md) |  | 当前表格行的高度，以点的二十分之一为单位（1/1440 英寸）。如果 &lt;code&gt;sHRule="auto"&lt;code&gt;，此值将被忽略。 |

## 返回值

boolean

## 示例

此示例设置表格中当前表格行的高度。

```javascript editor-docx
// Resize the height of the row.

// How to set a minimum row height of the table.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We create a 3x3 table and set the height of half an inch to all the rows:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetTableLook(true, true, true, true, false, false);
let tableRowPr = tableStyle.GetTableRowPr();
tableRowPr.SetHeight("atLeast", 720);
table.SetStyle(tableStyle);
doc.Push(table);
```
