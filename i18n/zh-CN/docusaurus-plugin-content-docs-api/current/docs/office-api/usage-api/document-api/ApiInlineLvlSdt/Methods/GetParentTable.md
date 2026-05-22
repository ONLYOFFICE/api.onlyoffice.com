# GetParentTable

返回包含当前内容控件的表格。

## 语法

```javascript
expression.GetParentTable();
```

`expression` - 表示 [ApiInlineLvlSdt](../ApiInlineLvlSdt.md) 类的变量。

## 参数

此方法没有任何参数。

## 返回值

[ApiTable](../../ApiTable/ApiTable.md) \| null

## 示例

检索文档中包含内联内容控件的表格。

```javascript editor-docx
// How do I get the parent table of an inline content control in a document?

// Modify the parent table structure after locating it through an inline content control in a document.

let doc = Api.GetDocument();
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
table.SetStyle(tableStyle);
doc.Push(table);
let inlineLvlSdt = Api.CreateInlineLvlSdt();
inlineLvlSdt.AddText("This is an inline text content control.");
let paragraph = Api.CreateParagraph();
paragraph.AddElement(inlineLvlSdt, 0);
let cell = table.GetRow(0).GetCell(0);
cell.AddElement(0, paragraph);
let parentTable = inlineLvlSdt.GetParentTable();
cell = parentTable.GetRow(2).GetCell(0);
parentTable.RemoveRow(cell);
```
