---
hide_table_of_contents: true
description: Copy the formatting of one cell and paste it to other cells.
tags: ["Docs", "Office API", "Spreadsheets"]
---

# Copying cell style

Copies the formatting (fill color, font, alignment, number format) of a reference cell and applies it to other cells without changing their values. This is useful for unifying formatting, building templates, or cloning a header style:

- format a reference cell ([ApiRange/SetFillColor](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetFillColor.md), [ApiRange/SetNumberFormat](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/SetNumberFormat.md));
- copy the reference cell to the editor clipboard ([ApiRange/Copy](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Copy.md));
- paste only its formatting to the target cells ([ApiRange/PasteSpecial](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/PasteSpecial.md)).

`PasteSpecial` with `xlPasteFormats` pastes the formatting of the copied cell and keeps the values of the target cells. It returns `false` if there is nothing to paste.

```ts editor-xlsx
let worksheet = Api.GetActiveSheet();

// Create sample data
let headers = ["Product", "Category", "Price", "Stock"];
let productData = [
  ["Laptop", "Electronics", 999.99, 25],
  ["Chair", "Furniture", 149.99, 50],
  ["Mouse", "Electronics", 29.99, 100],
  ["Desk", "Furniture", 299.99, 15],
  ["Keyboard", "Electronics", 79.99, 75]
];

for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

for (let i = 0; i < productData.length; ++i) {
  for (let j = 0; j < productData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(productData[i][j]);
  }
}

worksheet.SetColumnWidth(0, 15);
worksheet.SetColumnWidth(1, 15);
worksheet.SetColumnWidth(2, 12);
worksheet.SetColumnWidth(3, 10);

// Format the header reference cell (A1)
let headerCell = worksheet.GetRange("A1");
headerCell.SetFillColor(Api.CreateColorFromRGB(70, 130, 180));
headerCell.SetFontColor(Api.CreateColorFromRGB(255, 255, 255));
headerCell.SetBold(true);
headerCell.SetAlignHorizontal("center");
headerCell.SetAlignVertical("center");

// Copy the header style to the other header cells
headerCell.Copy();
worksheet.GetRange("B1:D1").PasteSpecial("xlPasteFormats", "xlPasteSpecialOperationNone", false, false);

// Format the price reference cell (C2)
let priceCell = worksheet.GetRange("C2");
priceCell.SetNumberFormat("$#,##0.00");
priceCell.SetFillColor(Api.CreateColorFromRGB(226, 239, 218));
priceCell.SetItalic(true);

// Copy the price style to the rest of the column
priceCell.Copy();
let isPasted = worksheet.GetRange("C3:C6").PasteSpecial("xlPasteFormats", "xlPasteSpecialOperationNone", false, false);
if (!isPasted) {
  worksheet.GetRange("A8").SetValue("Nothing to paste: copy a cell first.");
}
```
