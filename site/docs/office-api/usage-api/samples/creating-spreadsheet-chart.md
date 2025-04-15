# Creating spreadsheet chart

Creates a custom chart filled with array-based values in the spreadsheet:

- create a spreadsheet and fill top cells with data ([ApiRange/SetValue](../spreadsheet-api/ApiRange/Methods/SetValue.md));
- create a chart using the data ([ApiWorksheet/AddChart](../spreadsheet-api/ApiWorksheet/Methods/AddChart.md));
- customize the chart ([ApiChart/SetTitle](../spreadsheet-api/ApiChart/Methods/SetTitle.md), [ApiChart/SetLegendPos](../spreadsheet-api/ApiChart/Methods/SetLegendPos.md));

```ts document-builder={"documentType": "cell", "editorConfig": {"customization": {"zoom": 60}}}
let worksheet = Api.GetActiveSheet();
let headers = ["Year", "Revenue South dept", "Revenue West dept"];
let data = [
  ["Q1 2022", "Q2 2022", "Q3 2022", "Q4 2022", "Q1 2023", "Q2 2023", "Q3 2023"],
  ["14512", "15502", "13897", "11110", "13906", "12023", "11274"],
  ["9201", "10338", "8937", "11680", "15516", "18095", "18251"],
];

for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(i, 0).SetValue(headers[i]);
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(i, j + 1).SetValue(data[i][j]);
  }
}

worksheet.GetRange("B2:H3").SetNumberFormat("$#,##0");
worksheet.GetRange("A1").SetColumnWidth(18);
worksheet.GetRange("B1:H3").SetAlignHorizontal("left");
let sheetName = worksheet.GetName();
let chart = worksheet.AddChart(`'${sheetName}'!$A$1:$H$3`, true, "lineNormal", 1, 153 * 36_000, 50 * 36_000, 0, 0, 4, 0);
chart.SetTitle("Financial Overview (in thousands of USD)", 10);
chart.SetLegendPos("left");
```
