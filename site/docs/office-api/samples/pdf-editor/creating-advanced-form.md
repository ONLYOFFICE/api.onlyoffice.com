---
hide_table_of_contents: true
---

# Creating advanced form

Create an advanced form with a table structure:

- create a new document, create tables for the text and form inputs ([Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md), [ApiDocument/Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md), [ApiDocumentContent/GetElement](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md), [ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md), [ApiTable/GetRow](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md), [ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md), [ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md));
- style tables ([ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md), [ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md), [ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md), [ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md), [ApiTable/SetWidth](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetWidth.md), [ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md));
- create the text and image forms and add them to the tables ([Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md), [Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)).

:::tip
This sample is also available for **Document Builder**.
Download the sample and get more information on the [Document Builder samples](/docs/document-builder/samples/samples.md) page.
:::

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// Helper functions for form creation
function addTextFormToParagraph(paragraph, fontSize, key, placeholder, maxCharacters, jc, comb, border, required) {
  let textForm = Api.CreateTextForm({
    key,
    required: required || false,
    comb,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true,
  });
  
  if (border) {
    textForm.SetBorderColor(200, 200, 200);
  }
  
  paragraph.AddElement(textForm);
  paragraph.SetFontSize(fontSize);
  paragraph.SetJc(jc);
}

function addComboBoxToParagraph(paragraph, fontSize, key, placeholder, items, jc) {
  let comboForm = Api.CreateComboBoxForm({
    key,
    required: false,
    placeholder,
    editable: false,
    autoFit: true,
    items: items
  });
  
  paragraph.AddElement(comboForm);
  paragraph.SetFontSize(fontSize);
  paragraph.SetJc(jc);
}

function addCheckBoxToParagraph(paragraph, fontSize, key, tip, checked) {
  let checkboxForm = Api.CreateCheckBoxForm({
    key,
    required: false,
    tip,
    checked: checked || false
  });
  
  paragraph.AddElement(checkboxForm);
  paragraph.SetFontSize(fontSize);
}

function setBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

function addTextToParagraph(paragraph, text, fontSize, isBold, jc) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  paragraph.SetJc(jc);
}

function getTableCellParagraph(table, row, col, width) {
  let cell = table.GetCell(row, col);
  if (width) {
    cell.SetWidth("twips", width);
  }
  return cell.GetContent().GetElement(0);
}

function createFullWidthTable(rows, cols, borderColor, marginTop) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setBorders(table, borderColor);
  table.SetTableCellMarginTop(marginTop);
  return table;
}

// Create document header
let paragraph = doc.GetElement(0);
paragraph.AddText("PURCHASE ORDER FORM");
paragraph.SetFontSize(20 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// Header information table
let headerTable = createFullWidthTable(3, 3, 100, 50);

// Row 1: PO Number and Date
paragraph = getTableCellParagraph(headerTable, 0, 0, 2000);
addTextToParagraph(paragraph, "PO Number:", 12 * 2, true, "left");
paragraph = getTableCellParagraph(headerTable, 0, 1, 2000);
addTextFormToParagraph(paragraph, 12 * 2, "po_number", "Enter PO Number", 15, "left", true, true, true);
paragraph = getTableCellParagraph(headerTable, 0, 2, 2000);
addTextToParagraph(paragraph, "Date:", 12 * 2, true, "left");

// Row 2: Serial and Date field
paragraph = getTableCellParagraph(headerTable, 1, 0);
addTextToParagraph(paragraph, "Serial #:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(headerTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "serial_number", "Serial", 10, "left", true, true, false);
paragraph = getTableCellParagraph(headerTable, 1, 2);
addTextFormToParagraph(paragraph, 12 * 2, "order_date", "DD.MM.YYYY", 10, "left", true, true, true);

// Row 3: Priority and Status
paragraph = getTableCellParagraph(headerTable, 2, 0);
addTextToParagraph(paragraph, "Priority:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(headerTable, 2, 1);
addComboBoxToParagraph(paragraph, 12 * 2, "priority", "Select Priority", ["Low", "Medium", "High", "Urgent"], "left");
paragraph = getTableCellParagraph(headerTable, 2, 2);
addTextToParagraph(paragraph, "Status: Draft", 12 * 2, false, "left");

doc.Push(headerTable);

// Company logo section
paragraph = Api.CreateParagraph();
paragraph.AddText("Company Logo:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
let pictureForm = Api.CreatePictureForm({
  key: "company_logo",
  tip: "Upload Company Logo",
  required: false,
  placeholder: "Click to upload logo",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
});
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

// Vendor information section
paragraph = Api.CreateParagraph();
paragraph.AddText("Vendor Information:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let vendorTable = createFullWidthTable(3, 2, 150, 50);

// Vendor details
paragraph = getTableCellParagraph(vendorTable, 0, 0);
addTextToParagraph(paragraph, "Company Name:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_company", "Company Name", 50, "left", false, false, true);

paragraph = getTableCellParagraph(vendorTable, 1, 0);
addTextToParagraph(paragraph, "Contact Person:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_contact", "Contact Name", 40, "left", false, false, false);

paragraph = getTableCellParagraph(vendorTable, 2, 0);
addTextToParagraph(paragraph, "Email Address:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 2, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_email", "email@company.com", 50, "left", false, false, false);

doc.Push(vendorTable);

// Shipping information
paragraph = Api.CreateParagraph();
paragraph.AddText("Shipping Information:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let shippingTable = createFullWidthTable(2, 2, 150, 50);

paragraph = getTableCellParagraph(shippingTable, 0, 0);
addTextToParagraph(paragraph, "Ship To:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(shippingTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "ship_to_address", "Shipping Address", 60, "left", false, false, true);

paragraph = getTableCellParagraph(shippingTable, 1, 0);
addTextToParagraph(paragraph, "Delivery Method:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(shippingTable, 1, 1);
addComboBoxToParagraph(paragraph, 12 * 2, "delivery_method", "Select Method", ["Standard", "Express", "Overnight", "Pickup"], "left");

doc.Push(shippingTable);

// Items table
paragraph = Api.CreateParagraph();
paragraph.AddText("Order Items:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let itemsTable = createFullWidthTable(8, 5, 100, 50);
itemsTable.GetRow(0).SetBackgroundColor(230, 230, 230, false);

// Header row
let headerCells = ["Item #", "Description", "Qty", "Unit Price", "Total"];
let cellWidths = [800, 3000, 800, 1200, 1200];

for (let i = 0; i < headerCells.length; i++) {
  paragraph = getTableCellParagraph(itemsTable, 0, i, cellWidths[i]);
  addTextToParagraph(paragraph, headerCells[i], 12 * 2, true, "center");
}

// Data rows
for (let i = 1; i < 8; i++) {
  paragraph = getTableCellParagraph(itemsTable, i, 0);
  addTextFormToParagraph(paragraph, 10 * 2, `item_${i}`, `${i}`, 5, "center", true, false, false);
  
  paragraph = getTableCellParagraph(itemsTable, i, 1);
  addTextFormToParagraph(paragraph, 10 * 2, `description_${i}`, "Item description", 40, "left", false, false, false);
  
  paragraph = getTableCellParagraph(itemsTable, i, 2);
  addTextFormToParagraph(paragraph, 10 * 2, `qty_${i}`, "0", 5, "center", true, false, false);
  
  paragraph = getTableCellParagraph(itemsTable, i, 3);
  addTextFormToParagraph(paragraph, 10 * 2, `price_${i}`, "$0.00", 10, "right", false, false, false);
  
  paragraph = getTableCellParagraph(itemsTable, i, 4);
  addTextFormToParagraph(paragraph, 10 * 2, `total_${i}`, "$0.00", 10, "right", false, false, false);
}

doc.Push(itemsTable);

// Terms and conditions
paragraph = Api.CreateParagraph();
paragraph.AddText("Terms and Conditions:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_net30", "Net 30 payment terms", false);
paragraph.AddText(" Net 30 payment terms");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_fob", "FOB destination", false);
paragraph.AddText(" FOB destination");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_warranty", "Standard warranty applies", true);
paragraph.AddText(" Standard warranty applies");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// Approval section
paragraph = Api.CreateParagraph();
paragraph.AddText("Approval:");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let approvalTable = createFullWidthTable(2, 3, 150, 50);

paragraph = getTableCellParagraph(approvalTable, 0, 0);
addTextToParagraph(paragraph, "Requested by:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(approvalTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "requested_by", "Name", 30, "left", false, false, true);
paragraph = getTableCellParagraph(approvalTable, 0, 2);
addTextToParagraph(paragraph, "Date:", 12 * 2, false, "left");

paragraph = getTableCellParagraph(approvalTable, 1, 0);
addTextToParagraph(paragraph, "Approved by:", 12 * 2, false, "left");
paragraph = getTableCellParagraph(approvalTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "approved_by", "Manager Name", 30, "left", false, false, false);
paragraph = getTableCellParagraph(approvalTable, 1, 2);
addTextFormToParagraph(paragraph, 12 * 2, "approval_date", "DD.MM.YYYY", 10, "left", true, true, false);

doc.Push(approvalTable);
```
