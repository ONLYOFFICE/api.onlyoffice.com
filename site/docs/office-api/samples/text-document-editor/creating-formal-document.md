# Creating formal document

Create a document following the structure of a formal paper:

- create a title page with a document heading and subtitle ([Api](../../usage-api/text-document-api/Api/Api.md), [ApiDocumentContent](../../usage-api/text-document-api/ApiDocumentContent/ApiDocumentContent.md), [ApiDrawing](../../usage-api/text-document-api/ApiDrawing/ApiDrawing.md));
- create different styles for the document text, heading, subtitle, table, footer ([ApiParaPr](../../usage-api/text-document-api/ApiParaPr/ApiParaPr.md), [ApiStyle](../../usage-api/text-document-api/ApiStyle/ApiStyle.md), [ApiTable](../../usage-api/text-document-api/ApiTable/ApiTable.md), [ApiTableCell](../../usage-api/text-document-api/ApiTableCell/ApiTableCell.md), [ApiTablePr](../../usage-api/text-document-api/ApiTablePr/ApiTablePr.md), [ApiTableRow](../../usage-api/text-document-api/ApiTableRow/ApiTableRow.md), [ApiTextPr](../../usage-api/text-document-api/ApiTextPr/ApiTextPr.md));
- structure the document by marking up its section: set columns for text and pictures, set page size and margins, create header and footer ([ApiDocument](../../usage-api/text-document-api/ApiDocument/ApiDocument.md), [ApiSection](../../usage-api/text-document-api/ApiSection/ApiSection.md));
- fill the document with text, dividing it into separate fragments and highlighting them with headings ([ApiParagraph](../../usage-api/text-document-api/ApiParagraph/ApiParagraph.md), [ApiRun](../../usage-api/text-document-api/ApiRun/ApiRun.md));
- add images and charts to represent document text ([Api](../../usage-api/text-document-api/Api/Api.md), [ApiChart](../../usage-api/text-document-api/ApiChart/ApiChart.md)).

```ts editor-docx zoom=60
let paragraph;
let run;
let drawing;
const doc = Api.GetDocument();

const noSpacingStyle = doc.GetStyle("No Spacing");
const finalSection = doc.GetFinalSection();
finalSection.SetEqualColumns(2, 720);
finalSection.SetPageSize(12_240, 15_840);
finalSection.SetPageMargins(1440, 1440, 1440, 1440);
finalSection.SetHeaderDistance(720);
finalSection.SetFooterDistance(720);
finalSection.SetType("continuous");

let textPr;
let paraPr;
let tablePr;

textPr = doc.GetDefaultTextPr();
textPr.SetFontSize(22);
textPr.SetLanguage("en-US");
textPr.SetFontFamily("Calibri");

paraPr = doc.GetDefaultParaPr();
paraPr.SetSpacingLine(276, "auto");
paraPr.SetSpacingAfter(200);

const normalStyle = doc.GetDefaultStyle("paragraph");
paraPr = normalStyle.GetParaPr();
paraPr.SetSpacingLine(240, "auto");
paraPr.SetJc("both");
textPr = normalStyle.GetTextPr();
textPr.SetColor(0x26, 0x26, 0x26, false);

const heading1Style = doc.CreateStyle("Heading 1", "paragraph");
paraPr = heading1Style.GetParaPr();
paraPr.SetKeepNext(true);
paraPr.SetKeepLines(true);
paraPr.SetSpacingAfter(240);
textPr = heading1Style.GetTextPr();
textPr.SetColor(0x29, 0x33, 0x4F, false);
textPr.SetFontSize(40);
textPr.SetFontFamily("Calibri Light");

const subtitleStyle = doc.CreateStyle("Subtitle");
paraPr = subtitleStyle.GetParaPr();
paraPr.SetSpacingAfter(0);
paraPr.SetSpacingBefore(240);
textPr = subtitleStyle.GetTextPr();
textPr.SetColor(0x29, 0x33, 0x4F, false);
textPr.SetFontSize(32);
textPr.SetFontFamily("Calibri Light");

const normalTableStyle = doc.GetDefaultStyle("table");
tablePr = normalTableStyle.GetTablePr();
tablePr.SetTableInd(0);
tablePr.SetTableCellMarginTop(0);
tablePr.SetTableCellMarginLeft(108);
tablePr.SetTableCellMarginRight(108);
tablePr.SetTableCellMarginBottom(0);

const tableGridStyle = doc.CreateStyle("TableGrid", "table");
tableGridStyle.SetBasedOn(normalTableStyle);
paraPr = tableGridStyle.GetParaPr();
paraPr.SetSpacingAfter(0);
paraPr.SetSpacingLine("auto", 240);
tablePr = tableGridStyle.GetTablePr();
tablePr.SetTableInd(0);
tablePr.SetTableBorderTop("single", 4, 0, 0, 0, 0);
tablePr.SetTableBorderLeft("single", 4, 0, 0, 0, 0);
tablePr.SetTableBorderRight("single", 4, 0, 0, 0, 0);
tablePr.SetTableBorderBottom("single", 4, 0, 0, 0, 0);
tablePr.SetTableBorderInsideH("single", 4, 0, 0, 0, 0);
tablePr.SetTableBorderInsideV("single", 4, 0, 0, 0, 0);
tablePr.SetTableCellMarginTop(0);
tablePr.SetTableCellMarginLeft(108);
tablePr.SetTableCellMarginBottom(0);
tablePr.SetTableCellMarginRight(108);

const footerStyle = doc.CreateStyle("Footer", "paragraph");
paraPr = footerStyle.GetParaPr();
paraPr.SetTabs([4680, 9360], ["center", "right"]);
paraPr.SetSpacingAfter(0);
paraPr.SetJc("left");
textPr = footerStyle.GetTextPr();
textPr.SetColor(0, 0, 0, true);
textPr.SetFontSize(22);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingLine(276, "auto");
paragraph.SetJc("left");
const paraMark = paragraph.GetParagraphMarkTextPr();
paraMark.SetFontSize(52);
paraMark.SetColor(0x14, 0x14, 0x14, false);
paraMark.SetSpacing(5);
paragraph.AddPageBreak();
let fill = Api.CreateSolidFill(Api.CreateRGBColor(61, 74, 107));
let stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 5_463_210, 9_655_810, fill, stroke);
paragraph.AddDrawing(drawing);
drawing.SetWrappingStyle("behind");
drawing.SetHorPosition("page", 155_575);
drawing.SetVerPosition("page", 201_295);

let docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
let paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
let run2 = paragraph2.AddText("ONLYOFFICE");
run2.AddLineBreak();
run2.AddText("Document Builder");
run2.SetFontSize(64);
run2.SetCaps(true);
run2.SetColor(255, 255, 255);
run2.SetFontFamily("Calibri Light");
paragraph2.SetBottomBorder("single", 1, 0, 151, 192, 60);
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
run2 = paragraph2.AddText("Product Launch Revenue Plan");
run2.SetFontSize(44);
run2.SetColor(255, 255, 255);
run2.SetFontFamily("Calibri Light");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
run2 = paragraph2.AddText("Confidential");
run2.SetFontSize(28);
run2.SetColor(255, 255, 255);
run2.SetFontFamily("Calibri Light");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
run2 = paragraph2.AddText("July 2016");
run2.SetFontSize(28);
run2.SetColor(255, 255, 255);
run2.SetFontFamily("Calibri Light");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("right");
docContent.Push(paragraph2);

fill = Api.CreateSolidFill(Api.CreateRGBColor(41, 51, 79));
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 1_880_870, 9_655_810, fill, stroke);
drawing.SetWrappingStyle("inFront");
drawing.SetHorPosition("page", 5_673_725);
drawing.SetVerPosition("page", 201_295);
paragraph.AddDrawing(drawing);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetStyle(noSpacingStyle);

let gs1 = Api.CreateGradientStop(Api.CreateRGBColor(176, 217, 84), 0);
let gs2 = Api.CreateGradientStop(Api.CreateRGBColor(151, 192, 60), 100_000);
fill = Api.CreateLinearGradientFill([gs1, gs2], 5_400_000);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 5_930_900, 15 * 36_000, fill, stroke);
drawing.SetWrappingStyle("topAndBottom");
drawing.SetHorAlign("margin", "left");
drawing.SetVerPosition("paragraph", 5715);
drawing.SetDistances(114_300, 0, 114_300, 0);
docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
run2 = paragraph2.AddText("Product Launch Revenue Plan");
run2.SetFontSize(36);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri Light");
docContent.AddElement(0, paragraph2);

paragraph.AddDrawing(drawing);

doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("Overview");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.AddText("In the previous meeting of the board of directors funds were approved to take the 'ONLYOFFICE Document Builder' product to market.  They have also allocated a sum of $250,000 towards market identification and launch efforts. This document describes in brief the objective set forth by the VP of marketing pursuant to the board's decision.");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetStyle(heading1Style);
paragraph.SetSpacingAfter(100, true);
paragraph.SetSpacingBefore(100, true);
paragraph.AddText("Summary");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(100, true);
paragraph.SetSpacingBefore(100, true);

fill = Api.CreateSolidFill(Api.CreateRGBColor(255, 104, 0));

gs1 = Api.CreateGradientStop(Api.CreateRGBColor(176, 217, 84), 0);
gs2 = Api.CreateGradientStop(Api.CreateRGBColor(151, 192, 60), 100_000);
fill = Api.CreateLinearGradientFill([gs1, gs2], 5_400_000);

stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 70 * 36_000, 40 * 36_000, fill, stroke);
drawing.SetWrappingStyle("topAndBottom");
drawing.SetVerPosition("paragraph", 900_888);
drawing.SetDistances(114_300, 0, 114_300, 0);
docContent = drawing.GetDocContent();
docContent.RemoveAllElements();
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
paragraph2.SetSpacingAfter(160);
run2 = paragraph2.AddText("Phase 1");
run2.SetFontSize(20);
run2.SetBold(true);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");

run2 = paragraph2.AddText(": Review market tests, marketing plans, and expected sales goals.");
run2.SetFontSize(20);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");

docContent.Push(paragraph2);

paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
paragraph2.SetSpacingAfter(160);
run2 = paragraph2.AddText("Phase 2");
run2.SetFontSize(20);
run2.SetBold(true);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");

run2 = paragraph2.AddText(": Developers complete final build of the solution.");
run2.SetFontSize(20);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");
docContent.Push(paragraph2);

paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
paragraph2.SetSpacingAfter(160);
run2 = paragraph2.AddText("Phase 3");
run2.SetFontSize(20);
run2.SetBold(true);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");

run2 = paragraph2.AddText(": The launch phase.");
run2.SetFontSize(20);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");
docContent.Push(paragraph2);

paragraph.AddDrawing(drawing);

paragraph.AddText("After years of market research and focused creative effort we are in a position to take our 'ONLYOFFICE Document Builder' to market. We have a three phase approach in place to complete the product and take the product to market.  The first step of this initiative is to test the market. ");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(0, true);
paragraph.SetSpacingBefore(0, true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetStyle(heading1Style);
paragraph.SetSpacingAfter(100, true);
paragraph.SetSpacingBefore(100, true);

drawing = Api.CreateChart("bar3D", [[200, 240, 300, 320, 390], [250, 260, 270, 280, 285]], ["Projected Revenue", "Estimated Costs"], [2016, 2017, 2018, 2019, 2020], 90 * 36_000, 2_347_595);
drawing.SetWrappingStyle("tight");
drawing.SetHorPosition("column", 80 * 36_000);
drawing.SetVerPosition("paragraph", 346_075);
drawing.SetDistances(114_300, 0, 114_300, 0);
drawing.SetVerAxisTitle("USD In Hundred Thousands");
drawing.SetLegendPos("bottom");
drawing.SetShowDataLabels(false, false, true);
paragraph.AddDrawing(drawing);
paragraph.AddText("Financial Overview");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetIndRight(5040);
paragraph.AddText("Included are the estimated investment costs to introduce the new product.  As you can see for the first 2 years we will be in the investment phase.  Generating market demand and building our reputation in this category.  By 201");
paragraph.AddText("8");
paragraph.AddText(" we expect to be profitable.");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetIndRight(5040);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetStyle(heading1Style);
paragraph.SetSpacingAfter(100, true);
paragraph.SetSpacingBefore(100, true);
paragraph.AddText("Details");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(240);
paragraph.AddText("Out of the $250,000 allocated for this effort, we would like to spend about $50,000 towards the identification of the market.  For this we are allowed to engage with a marketing consulting organization.  Let us start with creating an RFP for this and start inviting the bids.  We would like to get the selection process completed by no later than end of first quarter.");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingBefore(100, true);
paragraph.SetSpacingAfter(360);
doc.Push(paragraph);
const section1 = doc.CreateSection(paragraph);
section1.SetEqualColumns(1, 720);
section1.SetPageSize(12_240, 15_840);
section1.SetPageMargins(1440, 1440, 1440, 1440);
section1.SetHeaderDistance(720);
section1.SetFooterDistance(576);

paragraph = Api.CreateParagraph();
paragraph.SetStyle(subtitleStyle);
gs1 = Api.CreateGradientStop(Api.CreateRGBColor(176, 217, 84), 0);
gs2 = Api.CreateGradientStop(Api.CreateRGBColor(151, 192, 60), 100_000);
fill = Api.CreateLinearGradientFill([gs1, gs2], 5_400_000);
stroke = Api.CreateStroke(0, Api.CreateNoFill());
drawing = Api.CreateShape("rect", 2_718_435, 962_025, fill, stroke);
drawing.SetWrappingStyle("square");
drawing.SetHorAlign("margin", "right");
drawing.SetVerPosition("paragraph", 35_560);
drawing.SetDistances(114_300, 0, 114_300, 0);
const content = drawing.GetDocContent();
content.RemoveAllElements();
paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
run2 = paragraph2.AddText("Innovation. Profit.");
run2.SetFontSize(20);
run2.SetBold(true);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");
content.AddElement(0, paragraph2);

paragraph2 = Api.CreateParagraph();
paragraph2.SetJc("left");
run2 = paragraph2.AddText("After years of market research and focused creative effort we are in a position to take our 'ONLYOFFICE Document Builder' to market.");
run2.SetFontSize(18);
run2.SetItalic(true);
run2.SetColor(0, 0, 0);
run2.SetFontFamily("Calibri");
content.AddElement(1, paragraph2);

paragraph.AddDrawing(drawing);
paragraph.AddText("Legal Issues");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
drawing = Api.CreateChart("pie", [[53, 32, 14]], [], ["Enterprise", "Small Business", "Individual Developers"], 2_741_295, 2_473_300);
drawing.SetWrappingStyle("square");
drawing.SetHorAlign("margin", "right");
drawing.SetVerPosition("paragraph", 914_400);
drawing.SetDistances(114_300, 0, 114_300, 0);
drawing.SetTitle("Projected Market", 9);
drawing.SetShowDataLabels(false, false, true);
paragraph.AddDrawing(drawing);
paragraph.AddText("To support the new product, the Legal Department will maintain a centralized repository for all patent investigations as well as marketing claims.  The release team will adhere to all of the standardized processes for releasing new products.");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(0);
paragraph.AddText("As we approach release of the product, the Legal Department is prepared ");
paragraph.AddText("to develop all licensing agreements and has streamlined coordination with the marketing and sales department on the license terms and addendums.   ");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetStyle(subtitleStyle);
paragraph.AddText("Statement on Timeline");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetSpacingAfter(0);
paragraph.AddText("All timelines in this report are estimated and highly dependent upon each team meeting their individual objectives. There are many interdependencies that are detailed in the related project plan.  ");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetStyle(subtitleStyle);
paragraph.AddText("Productivity Gains");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.AddText("To support the new product, the Legal Department will maintain a centralized repository for all patent investigations");
paragraph.AddText(" as well as marketing claims.  ");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetStyle(subtitleStyle);
paragraph.AddText("License Agreements");

paragraph = Api.CreateParagraph();
paragraph.SetSpacingAfter(0);
paragraph.AddText("All timelines in this report are estimated and highly dependent upon each team meetin");
paragraph.AddText("g their individual objectives.  I");
paragraph.AddText("nterdependencies are detailed in the related project plan.  ");
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetStyle(subtitleStyle);
paragraph.SetKeepNext(true);
paragraph.SetKeepLines(true);
paragraph.AddText("Revenue Forecasting");

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
paragraph.SetKeepNext(true);
paragraph.SetKeepLines(true);
paragraph.AddText("To support the new product, the Legal Department will maintain a centralized repository for all ");
paragraph.AddText("patent investigations and");
paragraph.AddText(" marketing claims.  The release team will adhere to all of the stand");
paragraph.AddText("ardized processes for releasing ");
paragraph.AddText("new products. ");

let table = Api.CreateTable(2, 2);
doc.Push(table);
table.SetStyle(tableGridStyle);
table.SetWidth("twips", 4311);
table.SetTableInd(100);
table.SetTableLook(true, true, false, false, true, false);
table.SetTableBorderTop("single", 4, 0, 0xAF, 0xAD, 0x91);
table.SetTableBorderBottom("single", 4, 0, 0xAF, 0xAD, 0x91);
table.SetTableBorderLeft("single", 4, 0, 0xAF, 0xAD, 0x91);
table.SetTableBorderRight("single", 4, 0, 0xAF, 0xAD, 0x91);
table.SetTableBorderInsideH("single", 4, 0, 0xAF, 0xAD, 0x91);
table.SetTableBorderInsideV("single", 4, 0, 0xAF, 0xAD, 0x91);
let row = table.GetRow(0);
let cell;
let cellContent;

if (row) {
  row.SetHeight("atLeast", 201);
  cell = row.GetCell(0);
  cell.SetWidth("twips", 1637);
  cell.SetShd("clear", 151, 192, 60, false);
  cell.SetVerticalAlign("center");
  cellContent = cell.GetContent();
  paragraph = cellContent.GetElement(0);
  paragraph.SetJc("center");
  run = paragraph.AddText("2016");
  run.SetBold(true);
  run.SetColor(0, 0, 0, false);

  cell = row.GetCell(1);
  cell.SetWidth("twips", 2674);
  cell.SetShd("clear", 151, 192, 60, false);
  cell.SetVerticalAlign("center");
  cellContent = cell.GetContent();
  paragraph = cellContent.GetElement(0);
  paragraph.SetJc("center");
  run = paragraph.AddText("2017");
  run.SetBold(true);
  run.SetColor(0, 0, 0, false);
}
row = table.GetRow(1);
if (row) {
  row.SetHeight("atLeast", 700);
  cell = row.GetCell(0);
  cell.SetWidth("twips", 1637);
  cell.SetVerticalAlign("center");
  cellContent = cell.GetContent();
  paragraph = cellContent.GetElement(0);
  paragraph.SetJc("center");
  paragraph.AddText("All Projects");
  paragraph.AddLineBreak();
  paragraph.AddText("Pending");

  cell = row.GetCell(1);
  cell.SetWidth("twips", 2674);
  cell.SetShd("clear", 0, 0, 0, true);
  cell.SetVerticalAlign("center");
  cellContent = cell.GetContent();
  cellContent.RemoveAllElements();
  cell.SetCellMarginTop(150);
  const innerTable = Api.CreateTable(3, 3);
  cellContent.AddElement(0, innerTable);
  innerTable.SetStyle(tableGridStyle);
  innerTable.SetWidth("twips", 2448);
  innerTable.SetTableLook(true, true, false, false, true, false);
  const mergeCells = [];
  row = innerTable.GetRow(0);
  if (row) {
    row.SetHeight("atLeast", 201);
    cell = row.GetCell(0);
    if (cell) {
      mergeCells.push(cell);
    }
    cell = row.GetCell(1);
    if (cell) {
      cell.SetWidth("twips", 865);
      cell.SetShd("clear", 189, 227, 100, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("West");
    }
    cell = row.GetCell(2);
    if (cell) {
      cell.SetWidth("twips", 1092);
      cell.SetShd("clear", 225, 245, 174, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("Approved");
    }
  }
  row = innerTable.GetRow(1);
  if (row) {
    row.SetHeight("atLeast", 196);
    cell = row.GetCell(0);
    if (cell) {
      mergeCells.push(cell);
    }

    cell = row.GetCell(1);
    if (cell) {
      cell.SetWidth("twips", 865);
      cell.SetShd("clear", 189, 227, 100, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("Central");
    }
    cell = row.GetCell(2);
    if (cell) {
      cell.SetWidth("twips", 1092);
      cell.SetShd("clear", 225, 245, 174, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("Pending");
    }
  }
  row = innerTable.GetRow(2);
  if (row) {
    row.SetHeight("atLeast", 196);
    cell = row.GetCell(0);
    if (cell) {
      mergeCells.push(cell);
    }
    cell = row.GetCell(1);
    if (cell) {
      cell.SetWidth("twips", 865);
      cell.SetShd("clear", 189, 227, 100, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("East");
    }
    cell = row.GetCell(2);
    if (cell) {
      cell.SetWidth("twips", 1092);
      cell.SetShd("clear", 225, 245, 174, false);
      cellContent = cell.GetContent();
      paragraph = cellContent.GetElement(0);
      paragraph.AddText("Approved");
    }
  }
  const mergedCell = innerTable.MergeCells(mergeCells);
  mergedCell.SetVerticalAlign("center");
  mergedCell.SetTextDirection("btlr");
  mergedCell.SetWidth("twips", 491);
  mergedCell.SetShd("clear", 177, 217, 84, false);
  cellContent = mergedCell.GetContent();
  paragraph = cellContent.GetElement(0);
  paragraph.SetIndLeft(113);
  paragraph.SetIndRight(113);
  paragraph.SetJc("center");
  run = paragraph.AddText("USA");
  run.SetBold(true);
}

paragraph = Api.CreateParagraph();
doc.Push(paragraph);
textPr = paragraph.GetParagraphMarkTextPr();
textPr.SetColor(0xFF, 0x00, 0x00);
textPr.SetFontFamily("Segoe UI");

section1.SetTitlePage(true);
docContent = section1.GetHeader("default", true);
table = Api.CreateTable(2, 1);
docContent.AddElement(0, table);
table.SetWidth("auto");
table.SetJc("right");
table.SetTableLook(true, true, false, false, true, false);

row = table.GetRow(0);
if (row) {
  row.SetHeight("atLeast", 792);
  cell = row.GetCell(0);
  if (cell) {
    cell.SetWidth("twips", 7337);
    cell.SetVerticalAlign("bottom");
    cellContent = cell.GetContent();
    paragraph = cellContent.GetElement(0);
    paragraph.SetStyle("Header");
    paragraph.SetJc("right");
    textPr = paragraph.GetParagraphMarkTextPr();
    textPr.SetFontFamily("Calibri Light");
    textPr.SetFontSize(28);
    run = paragraph.AddText("ONLYOFFICE Document Builder");
    run.SetSmallCaps(true);
    run.SetFontSize(32);
    run.SetFontFamily("Calibri Light");
  }
  cell = row.GetCell(1);
  if (cell) {
    cell.SetWidth("twips", 792);
    cell.SetShd("clear", 0x3D, 0x4A, 0x6B);
    cell.SetVerticalAlign("center");
    cellContent = cell.GetContent();
    paragraph = cellContent.GetElement(0);
    paragraph.SetStyle("Header");
    paragraph.SetJc("center");
    paragraph.GetParagraphMarkTextPr().SetColor(0xFF, 0xFF, 0xFF);
    run = paragraph.AddPageNumber();
    run.SetColor(0xFF, 0xFF, 0xFF);
  }
}

docContent = section1.GetFooter("default", true);
table = Api.CreateTable(2, 1);
docContent.AddElement(0, table);
table.SetWidth("auto");
table.SetJc("right");
table.SetTableLook(true, true, false, false, true, false);
row = table.GetRow(0);
if (row) {
  cell = row.GetCell(0);
  if (cell) {
    cell.SetWidth("auto");
    cellContent = cell.GetContent();
    paragraph = cellContent.GetElement(0);
    paragraph.SetStyle(footerStyle);
    paragraph.SetJc("right");
    paragraph.AddText("ONLYOFFICE Document Builder");
    paragraph.AddText(" | Confidential");
  }
  cell = row.GetCell(1);
  if (cell) {
    cell.SetWidth("auto");
    cellContent = cell.GetContent();
    paragraph = cellContent.GetElement(0);
    paragraph.SetStyle(footerStyle);
    paragraph.SetJc("right");
    drawing = Api.CreateImage("https://static.onlyoffice.com/assets/docs/samples/img/onlyoffice_logo.png", 495_300, 481_965);
    drawing.SetWrappingStyle("inline");
    paragraph.AddDrawing(drawing);
  }
}

paragraph.SetStyle(footerStyle);
doc.RemoveElement(doc.GetElementsCount() - 1);
```
