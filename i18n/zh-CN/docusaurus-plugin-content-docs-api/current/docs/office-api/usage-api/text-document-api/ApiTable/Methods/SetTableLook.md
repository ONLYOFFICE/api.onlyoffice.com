# SetTableLook

指定引用的表格样式（如果存在）的条件格式组件，
这些组件将应用于具有当前表格级属性例外的表格行集。表格样式
最多可指定六种不同的可选条件格式，例如第一列的不同格式，
然后可以应用于或从父表格中的各个表格行中省略。

默认设置是应用行带和列带格式，但不应用首行、末行、首列
或末列格式。

## 语法

```javascript
expression.SetTableLook(isFirstColumn, isFirstRow, isLastColumn, isLastRow, isHorBand, isVerBand);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| isFirstColumn | 必需 | boolean |  | 指定将首列条件格式应用于表格。 |
| isFirstRow | 必需 | boolean |  | 指定将首行条件格式应用于表格。 |
| isLastColumn | 必需 | boolean |  | 指定将末列条件格式应用于表格。 |
| isLastRow | 必需 | boolean |  | 指定将末行条件格式应用于表格。 |
| isHorBand | 必需 | boolean |  | 指定不将水平带条件格式应用于表格。 |
| isVerBand | 必需 | boolean |  | 指定不将垂直带条件格式应用于表格。 |

## 返回值

boolean

## 示例

此示例展示如何设置表格锁定。

```javascript editor-docx
// How to set the table look.

// Create a table and indicate its look properties.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We set the table look to override the current table style:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
table.SetTableLook(true, true, true, true, true, true);
tableStyle.GetConditionalTableStyle("topLeftCell").GetTableCellPr().SetShd("clear", Api.HexColor('#FF6F3D'));
doc.Push(table);
```
