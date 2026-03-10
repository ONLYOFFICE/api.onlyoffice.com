# SetVAlign

设置表格的垂直对齐方式。

## 语法

```javascript
expression.SetVAlign(sType);
```

`expression` - 表示 [ApiTable](../ApiTable.md) 类的变量。

## 参数

| **名称** | **必需/可选** | **数据类型** | **默认值** | **描述** |
| ------------- | ------------- | ------------- | ------------- | ------------- |
| sType | 必需 | String |  | 垂直对齐类型：可以是 "top"、"center" 或 "bottom"。 |

## 返回值

boolean

## 示例

此示例设置表格的垂直对齐方式。

```javascript editor-docx
// How to indicate the vertical alignment of the table cell.

// Align the content of the table as bottom.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("The table was added to the bottom of the page. Scroll down to see it."); 
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetStyle(tableStyle);
doc.Push(table);
table.SetWrappingStyle(false);
table.SetTableBorderTop("single", 4, 0, 51, 51, 51);
table.SetTableBorderBottom("single", 4, 0, 51, 51, 51);
table.SetTableBorderLeft("single", 32, 0, 51, 51, 51);
table.SetTableBorderRight("single", 4, 0, 51, 51, 51);
table.SetTableBorderInsideV("single", 4, 0, 255, 111, 61);
table.SetTableBorderInsideH("single", 4, 0, 255, 111, 61);
table.GetCell(0, 0).GetContent().GetElement(0).AddText("This is just a sample text.");
table.SetVAlign("bottom");
```
