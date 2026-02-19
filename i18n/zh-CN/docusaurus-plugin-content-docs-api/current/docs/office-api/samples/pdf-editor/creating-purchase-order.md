---
hide_table_of_contents: true
---

# 创建采购订单

创建包含公司详情和订单项目的采购订单模板：

- 为订单信息创建基于表格的布局（[Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md)、[ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)、[ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)）；
- 添加用于上传公司标志的图片表单（[Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md)）；
- 为可编辑字段添加文本表单（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)）；
- 设置表头和边框样式（[ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md)、[ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 实用函数：设置表格边框
function setTableBorders(table, color) {
  table.SetTableBorderTop("single", 4, 0, color, color, color);
  table.SetTableBorderBottom("single", 4, 0, color, color, color);
  table.SetTableBorderLeft("single", 4, 0, color, color, color);
  table.SetTableBorderRight("single", 4, 0, color, color, color);
  table.SetTableBorderInsideV("single", 4, 0, color, color, color);
  table.SetTableBorderInsideH("single", 4, 0, color, color, color);
}

// 实用函数：获取表格单元格中的段落
function getCellParagraph(table, row, col) {
  return table.GetCell(row, col).GetContent().GetElement(0);
}

// 实用函数：创建全宽表格
function createTable(rows, cols, borderColor) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setTableBorders(table, borderColor);
  table.SetTableCellMarginTop(50);
  table.SetTableCellMarginBottom(50);
  return table;
}

// 实用函数：向段落添加文本
function addText(paragraph, text, fontSize, isBold, align) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  paragraph.SetJc(align);
}

// 实用函数：向段落添加文本表单
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

// === 页眉部分 ===
// 创建包含标志和公司详情的页眉表格
let headerTable = createTable(3, 2, 200);

// 公司标志（左侧）
let para = getCellParagraph(headerTable, 0, 0);
let logoForm = Api.CreatePictureForm({
  key: "company_logo",
  tip: "上传公司标志",
  required: false,
  placeholder: "公司标志",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
});
para.AddElement(logoForm);
headerTable.GetCell(0, 0).SetVerticalAlign("center");

// 合并标志单元格跨行
headerTable.MergeCells(headerTable.GetCell(0, 0), headerTable.GetCell(2, 0));

// 采购订单标题（右侧）
para = getCellParagraph(headerTable, 0, 1);
addText(para, "采购订单", 24 * 2, true, "right");

// 公司名称字段
para = getCellParagraph(headerTable, 1, 1);
addTextForm(para, "company_name", "公司名称", 50, 12 * 2, "right");

// 公司地址字段
para = getCellParagraph(headerTable, 2, 1);
addTextForm(para, "company_address", "地址、城市、国家", 80, 10 * 2, "right");

doc.GetElement(0).AddText("");
doc.Push(headerTable);

// === 订单信息部分 ===
let infoTable = createTable(2, 4, 150);

// 第1行：订单编号和日期标签
para = getCellParagraph(infoTable, 0, 0);
addText(para, "订单编号：", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 0, 1);
addTextForm(para, "po_number", "PO-0001", 15, 11 * 2, "left");

para = getCellParagraph(infoTable, 0, 2);
addText(para, "日期：", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 0, 3);
addTextForm(para, "order_date", "DD.MM.YYYY", 10, 11 * 2, "left");

// 第2行：供应商和收货地址
para = getCellParagraph(infoTable, 1, 0);
addText(para, "供应商：", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 1, 1);
addTextForm(para, "vendor_name", "供应商名称", 40, 11 * 2, "left");

para = getCellParagraph(infoTable, 1, 2);
addText(para, "收货地址：", 11 * 2, true, "left");

para = getCellParagraph(infoTable, 1, 3);
addTextForm(para, "ship_to", "送货地址", 50, 11 * 2, "left");

doc.Push(infoTable);

// === 订单项目表格 ===
para = Api.CreateParagraph();
para.AddText("订单项目");
para.SetFontSize(14 * 2);
para.SetBold(true);
para.SetSpacingBefore(200);
doc.Push(para);

let itemsTable = createTable(6, 4, 100);

// 设置表头行样式
itemsTable.GetRow(0).SetBackgroundColor(70, 130, 180, false);

// 表头行
let headers = ["数量", "描述", "单价", "金额"];
for (let i = 0; i < headers.length; i++) {
  para = getCellParagraph(itemsTable, 0, i);
  addText(para, headers[i], 11 * 2, true, "center");
  para.SetColor(255, 255, 255);
}

// 设置列宽
itemsTable.GetCell(0, 0).SetWidth("twips", 800);
itemsTable.GetCell(0, 1).SetWidth("twips", 4500);
itemsTable.GetCell(0, 2).SetWidth("twips", 1500);
itemsTable.GetCell(0, 3).SetWidth("twips", 1500);

// 数据行（5个订单项）
for (let row = 1; row <= 5; row++) {
  // 数量列
  para = getCellParagraph(itemsTable, row, 0);
  addTextForm(para, `qty_${row}`, "0", 5, 10 * 2, "center");

  // 描述列
  para = getCellParagraph(itemsTable, row, 1);
  addTextForm(para, `desc_${row}`, "项目描述", 60, 10 * 2, "left");

  // 单价列
  para = getCellParagraph(itemsTable, row, 2);
  addTextForm(para, `price_${row}`, "¥0.00", 10, 10 * 2, "right");

  // 金额列
  para = getCellParagraph(itemsTable, row, 3);
  addTextForm(para, `amount_${row}`, "¥0.00", 10, 10 * 2, "right");
}

doc.Push(itemsTable);

// === 合计部分 ===
let totalsTable = createTable(3, 2, 150);
totalsTable.SetWidth("twips", 3500);
totalsTable.SetJc("right");

para = getCellParagraph(totalsTable, 0, 0);
addText(para, "小计：", 11 * 2, false, "right");
para = getCellParagraph(totalsTable, 0, 1);
addTextForm(para, "subtotal", "¥0.00", 12, 11 * 2, "right");

para = getCellParagraph(totalsTable, 1, 0);
addText(para, "税额：", 11 * 2, false, "right");
para = getCellParagraph(totalsTable, 1, 1);
addTextForm(para, "tax", "¥0.00", 12, 11 * 2, "right");

para = getCellParagraph(totalsTable, 2, 0);
addText(para, "总计：", 12 * 2, true, "right");
para = getCellParagraph(totalsTable, 2, 1);
addTextForm(para, "total", "¥0.00", 12, 12 * 2, "right");
totalsTable.GetRow(2).SetBackgroundColor(240, 240, 240, false);

doc.Push(totalsTable);

// === 备注部分 ===
para = Api.CreateParagraph();
para.AddText("备注：");
para.SetFontSize(11 * 2);
para.SetBold(true);
para.SetSpacingBefore(300);
doc.Push(para);

para = Api.CreateParagraph();
let notesForm = Api.CreateTextForm({
  key: "notes",
  required: false,
  placeholder: "附加说明或备注...",
  maxCharacters: 300,
  multiLine: true,
  autoFit: false,
});
para.AddElement(notesForm);
doc.Push(para);

// === 签名部分 ===
let sigTable = createTable(1, 2, 150);
sigTable.SetWidth("percent", 60);
sigTable.SetJc("left");
sigTable.SetTableCellMarginTop(200);

para = getCellParagraph(sigTable, 0, 0);
addText(para, "授权人：", 11 * 2, true, "left");

para = getCellParagraph(sigTable, 0, 1);
addTextForm(para, "authorized_by", "姓名/签名", 40, 11 * 2, "left");

doc.Push(sigTable);
```
