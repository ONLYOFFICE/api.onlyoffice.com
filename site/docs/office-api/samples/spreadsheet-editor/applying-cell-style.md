# Applying cell style

Copies style (color, alignment, font, etc.) from one cell and applies it to others. Used for formatting unification, templates, or cloning headers:

- select reference cell by determining the cell whose style needs to be copied (e.g., A1);
- read style by extracting formatting properties like background color, borders, font, alignment ([ApiRange/Copy](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/Copy.md));
- apply to other cells by using the same style on all selected cells ([ApiRange/PasteSpecial](/docs/office-api/usage-api/spreadsheet-api/ApiRange/Methods/PasteSpecial.md)).

This approach is commonly used for consistent formatting, template creation, header styling, and maintaining visual uniformity across spreadsheets.

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

// Fill the data
for (let i = 0; i < headers.length; ++i) {
  worksheet.GetRangeByNumber(0, i).SetValue(headers[i]);
}

for (let i = 0; i < productData.length; ++i) {
  for (let j = 0; j < productData[i].length; ++j) {
    worksheet.GetRangeByNumber(i + 1, j).SetValue(productData[i][j]);
  }
}

// Create a styled reference cell (A1) - this will be our template
let referenceCell = worksheet.GetRange("A1");
let blueColor = Api.CreateColorFromRGB(70, 130, 180);
let whiteColor = Api.CreateColorFromRGB(255, 255, 255);

// Apply comprehensive styling to the reference cell
referenceCell.SetFillColor(blueColor);
referenceCell.SetFontColor(whiteColor);
referenceCell.SetBold(true);
referenceCell.SetAlignHorizontal("center");
referenceCell.SetAlignVertical("center");

// Set column widths for better display
worksheet.GetRange("A1").SetColumnWidth(15);
worksheet.GetRange("B1").SetColumnWidth(12);
worksheet.GetRange("C1").SetColumnWidth(10);
worksheet.GetRange("D1").SetColumnWidth(8);

// Method 1: Copy and paste style using Copy/PasteSpecial
// Copy the reference cell style
referenceCell.Copy();

// Apply the copied style to other header cells (B1:D1)
// Use PasteSpecial with "xlPasteFormats" to paste only formatting
let headerRange = worksheet.GetRange("B1:D1");
headerRange.PasteSpecial("xlPasteFormats", "xlPasteSpecialOperationNone", false, false);

// Method 2: Manual style application (alternative approach)
// Create additional styled cells manually for demonstration
let styledCells = ["A7", "B7", "C7", "D7"];
for (let i = 0; i < styledCells.length; ++i) {
  let cell = worksheet.GetRange(styledCells[i]);
  cell.SetValue("Header " + (i + 1));
  
  // Apply the same style properties manually
  cell.SetFillColor(blueColor);
  cell.SetFontColor(whiteColor);
  cell.SetBold(true);
  cell.SetAlignHorizontal("center");
  cell.SetAlignVertical("center");
}

// Method 3: Copy style to a range of cells
// Create another reference cell with different styling
let greenReferenceCell = worksheet.GetRange("A9");
let greenColor = Api.CreateColorFromRGB(60, 179, 113);
let darkColor = Api.CreateColorFromRGB(25, 25, 25);

greenReferenceCell.SetValue("Green Style");
greenReferenceCell.SetFillColor(greenColor);
greenReferenceCell.SetFontColor(darkColor);
greenReferenceCell.SetBold(true);
greenReferenceCell.SetAlignHorizontal("center");

// Copy the green style
greenReferenceCell.Copy();

// Apply to multiple cells at once
let targetRange = worksheet.GetRange("B9:D11");
for (let row = 9; row <= 11; ++row) {
  for (let col = 1; col <= 3; ++col) {
    let cell = worksheet.GetRange(String.fromCharCode(65 + col) + row);
    cell.SetValue("Styled");
  }
}
targetRange.PasteSpecial("xlPasteFormats", "xlPasteSpecialOperationNone", false, false);

// Add explanatory text
let explanationRow = 13;
worksheet.GetRangeByNumber(explanationRow, 0).SetValue("Style Application Examples:");
worksheet.GetRangeByNumber(explanationRow, 0).SetBold(true);

worksheet.GetRangeByNumber(explanationRow + 1, 0).SetValue("Row 1: Original blue header style (A1) copied to B1:D1");
worksheet.GetRangeByNumber(explanationRow + 2, 0).SetValue("Row 7: Same blue style applied manually to demonstrate consistency");
worksheet.GetRangeByNumber(explanationRow + 3, 0).SetValue("Rows 9-11: Green style (A9) copied to range B9:D11");

// Add method comparison
worksheet.GetRangeByNumber(explanationRow + 5, 0).SetValue("Style Application Methods:");
worksheet.GetRangeByNumber(explanationRow + 5, 0).SetBold(true);

worksheet.GetRangeByNumber(explanationRow + 6, 0).SetValue("1. Copy/PasteSpecial: Copy reference cell, then paste formats only");
worksheet.GetRangeByNumber(explanationRow + 7, 0).SetValue("2. Manual: Apply each style property individually");
worksheet.GetRangeByNumber(explanationRow + 8, 0).SetValue("3. Range Copy: Copy style to multiple cells simultaneously");

// Add use cases
worksheet.GetRangeByNumber(explanationRow + 10, 0).SetValue("Common Use Cases:");
worksheet.GetRangeByNumber(explanationRow + 10, 0).SetBold(true);

worksheet.GetRangeByNumber(explanationRow + 11, 0).SetValue("• Creating consistent headers across tables");
worksheet.GetRangeByNumber(explanationRow + 12, 0).SetValue("• Template standardization");
worksheet.GetRangeByNumber(explanationRow + 13, 0).SetValue("• Brand color application");
worksheet.GetRangeByNumber(explanationRow + 14, 0).SetValue("• Formatting unification");

// Format explanation text
let explanationRange = worksheet.GetRange("A" + (explanationRow + 1) + ":A" + (explanationRow + 14));
let grayColor = Api.CreateColorFromRGB(100, 100, 100);
explanationRange.SetFontColor(grayColor);
```
