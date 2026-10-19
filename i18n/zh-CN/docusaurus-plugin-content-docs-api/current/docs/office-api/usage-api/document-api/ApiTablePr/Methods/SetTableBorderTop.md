# SetTableBorderTop

设置将在当前表格顶部显示的边框。

## 语法

```javascript
expression.SetTableBorderTop(type, size, space, color);
```

`expression` - 表示 [ApiTablePr](../ApiTablePr.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| type | 必需 | [BorderType](../../Enumeration/BorderType.md) |  | 顶部边框样式。 |
| size | 必需 | [pt_8](../../Enumeration/pt_8.md) |  | 当前顶部边框的宽度，以磅的八分之一为单位。 |
| space | 必需 | [pt](../../Enumeration/pt.md) |  | 用于放置此边框的表格顶部间距偏移量，以磅为单位。 |
| color | 必需 | [ApiColor](../../ApiColor/ApiColor.md) |  | 边框颜色。 |

## 返回值

boolean

## 示例

在文档中为表格应用顶部边框。

```javascript editor-docx
// How do I add a border along the top edge of a table in a document?

// Style the upper edge of a table with a visible border line in a document.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We add the top 4 point black border:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
tablePr.SetTableBorderTop("single", 32, 0, Api.Color(51, 51, 51));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```
