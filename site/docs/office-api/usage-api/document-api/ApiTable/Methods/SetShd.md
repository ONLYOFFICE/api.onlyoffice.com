# SetShd

Specifies the shading which is applied to the extents of the current table.

Inherited from [ApiTablePr.SetShd](../../ApiTablePr/Methods/SetShd.md).

## Example

Specify the shading which shall be applied to the extents of the table in a document.

```javascript editor-docx
// How to add shading to the paragraph in a document.

// Apply the clear shading to the paragraph in a document.

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
