---
hide_table_of_contents: true
---

# Creating purchase order

Creates a purchase order template with company details and line items:

- create a table-based layout for order information ([Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md), [ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md));
- add a picture form for company logo upload ([Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md));
- add text forms for editable fields ([Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md));
- style table headers and borders ([ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md)).

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Utility function: Set table borders
function setTableBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

// Utility function: Get paragraph from table cell
function getCellParagraph(table, row, col) {
  return table.GetCell(row, col).GetContent().GetElement(0);
}

// Utility function: Create a full-width table
function createTable(rows, cols, borderColor) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setTableBorders(table, borderColor);
  table.SetTableCellMarginTop(50);
  table.SetTableCellMarginBottom(50);
  return table;
}

// Utility function: Add text to paragraph
function addText(paragraph, text, fontSize, isBold, align) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  paragraph.SetJc(align);
}

// Utility function: Add text form to paragraph
function addTextForm(paragraph, key, placeholder, maxChars, fontSize, align) {
  let form = Api.CreateTextForm({
    key: key,
    required: false,
    placeholder: placeholder,
    maxCharacters: maxChars,
    multiLine: false,
    autoFit: true,
  });
  paragraph.AddElement(form);
  paragraph.SetFontSize(fontSize);
  paragraph.SetJc(align);
}

// === HEADER SECTION ===
// Create header table with logo and company details
let headerTable = createTable(3, 2, 200);

// Company logo (left side)
let para = getCellParagraph(headerTable, 0, 0);
let logoForm = Api.CreatePictureForm({
  key: "company_logo",
  tip: "Upload company logo",
  required: false,
  placeholder: "Company Logo",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
});
para.AddElement(logoForm);
headerTable.GetCell(0, 0).SetVerticalAlign("center");

// Merge logo cell across rows
headerTable.MergeCells(headerTable.GetCell(0, 0), headerTable.GetCell(2, 0));

// PURCHASE ORDER title (right side)
para = getCellParagraph(headerTable, 0, 1);
addText(para, "PURCHASE ORDER", 24 * 2, true, "right");

// Company name field
para = getCellParagraph(headerTable, 1, 1);
addTextForm(para, "company_name", "Company Name", 50, 12 * 2, "right");

// Company address field
para = getCellParagraph(headerTable, 2, 1);
addTextForm(para, "company_address", "Address, City, Country", 80, 10 * 2, "right");

doc.GetElement(0).AddText("");
doc.Push(headerTable);

// === ORDER INFO SECTION ===
let infoTable = createTable(2, 4, 150);

// Row 1: PO Number and Date labels
para = getCellParagraph(infoTable, 0, 0);
addText(para, "PO Number:", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 0, 1);
addTextForm(para, "po_number", "PO-0001", 15, 11 * 2, "left");

para = getCellParagraph(infoTable, 0, 2);
addText(para, "Date:", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 0, 3);
addTextForm(para, "order_date", "DD.MM.YYYY", 10, 11 * 2, "left");

// Row 2: Vendor and Ship To
para = getCellParagraph(infoTable, 1, 0);
addText(para, "Vendor:", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 1, 1);
addTextForm(para, "vendor_name", "Vendor Name", 40, 11 * 2, "left");

para = getCellParagraph(infoTable, 1, 2);
addText(para, "Ship To:", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 1, 3);
addTextForm(para, "ship_to", "Delivery Address", 50, 11 * 2, "left");

doc.Push(infoTable);

// === LINE ITEMS TABLE ===
para = Api.CreateParagraph();
para.AddText("Order Items");
para.SetFontSize(14 * 2);
para.SetBold(true);
para.SetSpacingBefore(200);
doc.Push(para);

let itemsTable = createTable(6, 4, 100);

// Style header row
itemsTable.GetRow(0).SetBackgroundColor(70, 130, 180, false);

// Header row
let headers = ["Qty", "Description", "Unit Price", "Amount"];
for (let i = 0; i < headers.length; i++) {
  para = getCellParagraph(itemsTable, 0, i);
  addText(para, headers[i], 11 * 2, true, "center");
  para.SetColor(255, 255, 255);
}

// Set column widths
itemsTable.GetCell(0, 0).SetWidth("twips", 800);
itemsTable.GetCell(0, 1).SetWidth("twips", 4500);
itemsTable.GetCell(0, 2).SetWidth("twips", 1500);
itemsTable.GetCell(0, 3).SetWidth("twips", 1500);

// Data rows (5 line items)
for (let row = 1; row <= 5; row++) {
  // Qty column
  para = getCellParagraph(itemsTable, row, 0);
  addTextForm(para, `qty_${row}`, "0", 5, 10 * 2, "center");

  // Description column
  para = getCellParagraph(itemsTable, row, 1);
  addTextForm(para, `desc_${row}`, "Item description", 60, 10 * 2, "left");

  // Unit Price column
  para = getCellParagraph(itemsTable, row, 2);
  addTextForm(para, `price_${row}`, "$0.00", 10, 10 * 2, "right");

  // Amount column
  para = getCellParagraph(itemsTable, row, 3);
  addTextForm(para, `amount_${row}`, "$0.00", 10, 10 * 2, "right");
}

doc.Push(itemsTable);

// === TOTALS SECTION ===
let totalsTable = createTable(3, 2, 150);
totalsTable.SetWidth("twips", 3500);
totalsTable.SetJc("right");

para = getCellParagraph(totalsTable, 0, 0);
addText(para, "Subtotal:", 11 * 2, false, "right");
para = getCellParagraph(totalsTable, 0, 1);
addTextForm(para, "subtotal", "$0.00", 12, 11 * 2, "right");

para = getCellParagraph(totalsTable, 1, 0);
addText(para, "Tax:", 11 * 2, false, "right");
para = getCellParagraph(totalsTable, 1, 1);
addTextForm(para, "tax", "$0.00", 12, 11 * 2, "right");

para = getCellParagraph(totalsTable, 2, 0);
addText(para, "Total:", 12 * 2, true, "right");
para = getCellParagraph(totalsTable, 2, 1);
addTextForm(para, "total", "$0.00", 12, 12 * 2, "right");
totalsTable.GetRow(2).SetBackgroundColor(240, 240, 240, false);

doc.Push(totalsTable);

// === NOTES SECTION ===
para = Api.CreateParagraph();
para.AddText("Notes:");
para.SetFontSize(11 * 2);
para.SetBold(true);
para.SetSpacingBefore(300);
doc.Push(para);

para = Api.CreateParagraph();
let notesForm = Api.CreateTextForm({
  key: "notes",
  required: false,
  placeholder: "Additional notes or instructions...",
  maxCharacters: 300,
  multiLine: true,
  autoFit: false,
});
para.AddElement(notesForm);
doc.Push(para);

// === SIGNATURE SECTION ===
let sigTable = createTable(1, 2, 150);
sigTable.SetWidth("percent", 60);
sigTable.SetJc("left");
sigTable.SetTableCellMarginTop(200);

para = getCellParagraph(sigTable, 0, 0);
addText(para, "Authorized By:", 11 * 2, true, "left");

para = getCellParagraph(sigTable, 0, 1);
addTextForm(para, "authorized_by", "Name / Signature", 40, 11 * 2, "left");

doc.Push(sigTable);
```
