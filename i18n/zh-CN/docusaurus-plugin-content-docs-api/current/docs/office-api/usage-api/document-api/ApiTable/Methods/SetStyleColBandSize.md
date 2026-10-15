# SetStyleColBandSize

指定此表格样式中每个表格列带包含的列数。

继承自 [ApiTablePr.SetStyleColBandSize](../../ApiTablePr/Methods/SetStyleColBandSize.md)。

## 语法

```javascript
expression.SetStyleColBandSize(nCount);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| nCount | 必需 | number |  | 以正整数表示的列数。 |

## 返回值

boolean

## 示例

在文档中设置表格样式中构成重复镶边图案的列数。

```javascript editor-docx
// How do I control the width of alternating column groups in a table in a document?

// Group multiple columns together so they share the same banded formatting in a document.

let doc = Api.GetDocument();
doc.RemoveAllElements();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(2, 4);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
table.SetStyleColBandSize(2);
tableStyle.GetConditionalTableStyle("bandedColumn").GetTextPr().SetBold(true);
table.Cells[0][0].GetContent().AddText("Bold");
table.Cells[0][1].GetContent().AddText("Bold");
table.Cells[0][2].GetContent().AddText("Normal");
table.Cells[0][3].GetContent().AddText("Normal");
table.Cells[1][0].GetContent().AddText("Bold");
table.Cells[1][1].GetContent().AddText("Bold");
table.Cells[1][2].GetContent().AddText("Normal");
table.Cells[1][3].GetContent().AddText("Normal");
doc.Push(table);
```
