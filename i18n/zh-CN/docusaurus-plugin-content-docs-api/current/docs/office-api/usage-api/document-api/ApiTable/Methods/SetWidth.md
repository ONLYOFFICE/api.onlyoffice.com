# SetWidth

设置当前表格的首选宽度。

:::note
表格默认使用 [ApiTable#SetWidth](../../ApiTable/Methods/SetWidth.md) 方法属性创建，这些属性始终会覆盖 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法属性。因此尝试应用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 是没有用的。我们建议您改用 [ApiTablePr#SetWidth](../../ApiTablePr/Methods/SetWidth.md) 方法。
:::

继承自 [ApiTablePr.SetWidth](../../ApiTablePr/Methods/SetWidth.md)。

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

在文档中拉伸表格以填满页面的全部宽度。

```javascript editor-docx
// How do I make a table span the entire width of the page in a document?

// Expand a table so it takes up all available horizontal space in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table width to 100 percent:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
```
