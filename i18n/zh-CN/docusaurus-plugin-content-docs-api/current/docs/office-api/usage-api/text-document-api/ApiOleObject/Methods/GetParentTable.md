# GetParentTable

返回包含图形对象的父表格。

Inherited from [ApiDrawing.GetParentTable](../../ApiDrawing/Methods/GetParentTable.md).

## 示例

此示例展示如何获取包含图形对象的父表格。

```javascript editor-docx
// Get an element's parent table.

// How to show the shape's wrapper table.

let doc = Api.GetDocument();
let paragraph = Api.CreateParagraph();
let table = Api.CreateTable(3, 3);
table.SetWidth("percent", 100);
let fill = Api.CreateSolidFill(Api.RGB(255, 111, 61));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
let drawing = Api.CreateShape("rect", 3212465, 963295, fill, stroke);
paragraph.AddDrawing(drawing);
let cell = table.GetCell(1, 1);
cell.AddElement(0, paragraph);
doc.Push(table);
let parentTable = drawing.GetParentTable();
let tableStyle = doc.GetStyle("Bordered");
parentTable.SetStyle(tableStyle);
```

