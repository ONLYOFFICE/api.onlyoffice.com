# GetParentTableCell

返回包含当前运行的表格单元格。

## 语法

```javascript
expression.GetParentTableCell();
```

`expression` - 表示 [ApiRun](../ApiRun.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTableCell](../../ApiTableCell/ApiTableCell.md) \| null

## 示例

此示例展示如何获取包含运行的表格单元格。

```javascript editor-docx
// Get a parent table cell of the text.

// How to set shading of the table cell that contains a text run.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let paragraph = Api.CreateParagraph();
let run = Api.CreateRun();
run.AddText("This is just a sample text.");
paragraph.AddElement(run);
let cell = table.GetCell(0, 0);
table.AddElement(cell, 0, paragraph);
let parentTableCell = run.GetParentTableCell();
parentTableCell.SetShd("clear", Api.HexColor('#FF6F3D'));
```
