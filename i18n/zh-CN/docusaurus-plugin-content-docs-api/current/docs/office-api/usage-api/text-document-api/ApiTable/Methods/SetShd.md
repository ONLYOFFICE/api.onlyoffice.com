# SetShd

指定应用于当前表格范围的底纹。

Inherited from [ApiTablePr.SetShd](../../ApiTablePr/Methods/SetShd.md).

## 示例

此示例指定应应用于表格范围的底纹。

```javascript editor-docx
// How to add shading to the paragraph.

// Apply the clear shading to the paragraph.

let doc = Api.GetDocument();
let paragraph = doc.GetElement(0);
paragraph.AddText("We added an orange shading to the table:");
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
let table = Api.CreateTable(3, 3);
tablePr.SetShd("clear", Api.HexColor('#FF6F3D'));
table.SetTableLook(true, true, true, true, false, false);
table.SetStyle(tableStyle);
doc.Push(table);
```

