# Creating product catalog document

Create a document with a product catalog table containing images and product information:

- create a table with four columns for image, name, price, and description ([Api](/docs/office-api/usage-api/text-document-api/Api/Api.md), [Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md));
- insert images into table cells with proper sizing and alignment ([ApiDrawing](/docs/office-api/usage-api/text-document-api/ApiDrawing/ApiDrawing.md), [ApiParagraph/AddDrawing](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddDrawing.md));
- format product information with different text styles ([ApiRun](/docs/office-api/usage-api/text-document-api/ApiRun/ApiRun.md), [ApiParagraph](/docs/office-api/usage-api/text-document-api/ApiParagraph/ApiParagraph.md));
- style the table for better readability and professional appearance ([ApiTableCellPr](/docs/office-api/usage-api/text-document-api/ApiTableCellPr/ApiTableCellPr.md)).

```ts editor-docx zoom=60
let doc = Api.GetDocument();

// Create table (4 rows including header, 4 columns)
let catalogTable = Api.CreateTable(4, 4);

// Style the table
let tableStyle = doc.CreateStyle("CatalogTableStyle", "table");
tableStyle.SetBasedOn(doc.GetStyle("Bordered"));
let tablePr = tableStyle.GetTablePr();
tablePr.SetWidth("percent", 100);
let cellPr = tableStyle.GetTableCellPr();
cellPr.SetCellMarginTop(120);
cellPr.SetCellMarginBottom(120);
cellPr.SetCellMarginLeft(80);
cellPr.SetCellMarginRight(80);
catalogTable.SetStyle(tableStyle);

// Create header row
let headerRow = catalogTable.GetRow(0);
headerRow.SetBackgroundColor(75, 136, 209, false);

let headers = ["Image", "Name", "Price", "Description"];
for (let i = 0; i < 4; i++) {
  let headerCell = headerRow.GetCell(i);
  headerCell.SetVerticalAlign("center");
  let headerContent = headerCell.GetContent();
  let headerPara = headerContent.GetElement(0);
  headerPara.AddText(headers[i]);
  headerPara.SetColor(255, 255, 255, false);
  headerPara.SetBold(true);
  headerPara.SetJc("center");
}

// Product data
let products = [
  {
    name: "Super Notebook 14\"",
    price: "$499",
    description: "Lightweight and powerful notebook with 14-inch display, 8GB RAM, and 256GB SSD. Perfect for work and entertainment."
  },
  {
    name: "Wireless Mouse Pro",
    price: "$39",
    description: "Ergonomic design with long battery life. Features precision tracking and customizable buttons for productivity."
  },
  {
    name: "USB-C Dock Station",
    price: "$129",
    description: "Multiport adapter with HDMI, USB 3.0, and charging capabilities. Ideal for connecting multiple devices to your laptop."
  }
];

// Fill product rows
for (let i = 0; i < 3; i++) {
  let row = catalogTable.GetRow(i + 1);
  let bgColor = i % 2 === 0 ? 250 : 240;
  row.SetBackgroundColor(bgColor, bgColor, bgColor, false);
  
  // Image cell
  let imageCell = row.GetCell(0);
  imageCell.SetVerticalAlign("center");
  let imageContent = imageCell.GetContent();
  let imagePara = imageContent.GetElement(0);
  imagePara.SetJc("center");
  
  // Add image
  let imageDrawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 40 * 36000, 40 * 36000);
  imagePara.AddDrawing(imageDrawing);
  
  // Name cell
  let nameCell = row.GetCell(1);
  nameCell.SetVerticalAlign("center");
  let nameContent = nameCell.GetContent();
  let namePara = nameContent.GetElement(0);
  namePara.AddText(products[i].name);
  namePara.SetBold(true);
  namePara.SetFontSize(12 * 2);
  namePara.SetJc("left");
  
  // Price cell
  let priceCell = row.GetCell(2);
  priceCell.SetVerticalAlign("center");
  let priceContent = priceCell.GetContent();
  let pricePara = priceContent.GetElement(0);
  pricePara.AddText(products[i].price);
  pricePara.SetBold(true);
  pricePara.SetFontSize(14 * 2);
  pricePara.SetColor(0, 128, 0, false);
  pricePara.SetJc("center");
  
  // Description cell
  let descCell = row.GetCell(3);
  descCell.SetVerticalAlign("top");
  let descContent = descCell.GetContent();
  let descPara = descContent.GetElement(0);
  descPara.AddText(products[i].description);
  descPara.SetFontSize(10 * 2);
  descPara.SetJc("left");
}

// Add the table to document
doc.AddElement(0, catalogTable);

let summaryPara = Api.CreateParagraph();
summaryPara.AddText("Product Catalog Summary: ").SetBold(true);
summaryPara.AddText("This catalog showcases our featured products with images, pricing, and detailed descriptions. ");
summaryPara.AddText("Each product is presented in a structured format for easy comparison and selection. ");
summaryPara.AddText("Perfect for commercial proposals, sales presentations, and product documentation.");
doc.Push(summaryPara);
```
