---
hide_table_of_contents: true
---

# Filling spreadsheet

Fill an empty spreadsheet with the data stored in arrays:

- create a loop for columns and nest another loop for rows;
- get each cell ([ApiWorksheet/GetRangeByNumber](/docs/office-api/usage-api/spreadsheet-api/ApiWorksheet/Methods/GetRangeByNumber.md)) and set the corresponding value from the data array ([ApiRange/SetValue](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetValue.md)).

Check Exchanging data among files and Using command line arguments to learn more options for passing external data in the DocBuilder script.
This sample is available for the **C++ and .Net DocBuilder Frameworks**.
Download the sample and get more information on the [Builder framework samples](/docs/document-builder/samples/samples.md) page.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();
let headers = ["ID", "Product", "Price", "Available"];
let data = [
  ["D51s15", "D83a01", "D14s09", "D60a12"],
  ["Soda", "Granola", "Donuts", "Cake"],
  [2.5, 12.1, 19.9, 48.1],
  ["true", "true", "false", "true"],
];

for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
  for (let j = 0; j < data[i].length; ++j) {
    worksheet.GetRangeByNumber(j + 1, i).SetValue(data[i][j]);
  }
}
```
