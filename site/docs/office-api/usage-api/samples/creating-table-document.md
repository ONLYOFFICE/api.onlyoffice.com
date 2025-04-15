# Creating table document

Create a document with a styled table filled with array-based values:

- create an empty document with a table ([Api](../text-document-api/Api/Api.md), [Api/CreateTable](../text-document-api/Api/Methods/CreateTable.md))
- create a custom style for the table ([ApiDocument/GetStyle](../text-document-api/ApiDocument/Methods/GetStyle.md), [ApiStyle](../text-document-api/ApiStyle/ApiStyle.md), [ApiTableCellPr](../text-document-api/ApiTableCellPr/ApiTableCellPr.md), [ApiTableRow](../text-document-api/ApiTableRow/ApiTableRow.md));
- populate the table with the array-based data cell by cell ([ApiTableCell](../text-document-api/ApiTableCell/ApiTableCell.md)).

```ts document-builder={"documentType": "word", "editorConfig": {"customization": {"zoom": 60}}}
let doc = Api.GetDocument();
let headers = ["ID", "Year", "Region", "2023 Revenue", "2024 Revenue", "% Change"];
let data = [
  ["1", "2", "3", "4", "5", "6", "7", "8", "9"],
  ["2023", "2023", "2023", "2023", "2024", "2024", "2024", "2024", "2024"],
  ["East", "South", "North", "East", "North", "South", "West", "North", "East"],
  ["$80.191", "$80.773", "$59.151", "$39.120", "$68.622", "$98.019", "$84.410", "$95.739", "92.511"],
  ["$83.021", "$93.056", "$75.716", "$34.295", "$68.622", "$122.714", "$30.670", "$138.856", "92.019"],
  ["4%", "15%", "27%", "-14%", "0%", "25%", "-64%", "45%", "-0.5%"],
];

let table = Api.CreateTable(6, 10);
table.SetWidth("percent", 100);
let tableStyle = doc.CreateStyle("CustomTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(40);
cellPr.SetCellMarginBottom(40);
table.SetStyle(tableStyle);

let headerRow = table.GetRow(0);
headerRow.SetBackgroundColor(75, 136, 209, false);
for (let i = 0; i < 6; ++i) {
  let cell = table.GetRow(0).GetCell(i);
  cell.SetVerticalAlign("center");
  let content = cell.GetContent();
  let paragraph = content.GetElement(0);
  paragraph.AddText(headers[i]);
  paragraph.SetColor(255, 255, 255, false);
  paragraph.SetBold(true);
  paragraph.SetJc("center");
}

for (let i = 1; i < 10; ++i) {
  let row = table.GetRow(i);
  let byte = i % 2 === 0 ? 225 : 245;
  row.SetBackgroundColor(byte, byte, byte, false);
  for (let j = 0; j < 6; ++j) {
    let cell = table.GetRow(i).GetCell(j);
    cell.SetVerticalAlign("center");
    let content = cell.GetContent();
    let paragraph = content.GetElement(0);
    paragraph.AddText(data[j][i - 1]);
    paragraph.SetJc("center");
    setTextColor(paragraph, data[j][i - 1]);
  }
}

function setTextColor(paragraph, value) {
  if (value.includes("%") !== -1) {
    if (value.includes("-") !== -1) {
      paragraph.SetColor(173, 35, 28);
    } else {
      paragraph.SetColor(28, 173, 52);
    }
  }
}

doc.Push(table);
```
