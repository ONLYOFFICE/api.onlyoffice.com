# SetWidth

设置当前表格的首选宽度。
💡 表格默认使用 [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) 方法属性创建，它始终覆盖 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法属性。因此尝试应用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 是无效的。我们建议您改用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法。

## 语法

```javascript
expression.SetWidth(sType, nValue);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | [TableWidth](../../Enumeration/TableWidth.md) |  | 宽度值类型，来自可用的宽度值类型之一。 |
| nValue | 可选 | number |  | 以正整数表示的表格宽度值。 |

## 返回值

boolean

## 示例

此示例设置表格的首选宽度。

```javascript editor-docx
// How to change the width of the table.

// Set the table width in percentage.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table cells to preserve their size:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
