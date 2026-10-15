# SetStyleRowBandSize

指定此表格样式中每个表格行带包含的行数。

继承自 [ApiTablePr.SetStyleRowBandSize](../../ApiTablePr/Methods/SetStyleRowBandSize.md)。

## 语法

```javascript
expression.SetStyleRowBandSize(nCount);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 以正整数表示的行数。 |

## 返回值

boolean

## 示例

在文档中设置表格样式中构成重复镶边图案的行数。

```javascript editor-docx
// How do I control the height of alternating row groups in a table in a document?

// Group multiple rows together so they share the same banded formatting in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(4, 2);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleRowBandSize(2);
tableStyle.GetConditionalTableStyle("bandedRow").GetTextPr().SetBold(true);
table.Cells[0][0].AddText("Normal");
table.Cells[0][1].AddText("Normal");
table.Cells[1][0].AddText("Bold");
table.Cells[1][1].AddText("Bold");
table.Cells[2][0].AddText("Bold");
table.Cells[2][1].AddText("Bold");
table.Cells[3][0].AddText("Normal");
table.Cells[3][1].AddText("Normal");
doc.Push(table);
```
