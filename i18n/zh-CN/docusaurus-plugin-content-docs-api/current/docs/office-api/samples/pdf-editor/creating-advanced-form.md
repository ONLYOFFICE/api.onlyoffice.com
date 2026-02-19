---
hide_table_of_contents: true
---

# 创建高级表单

创建具有表格结构的高级表单：

- 创建新文档，为文本和表单输入创建表格（[Api/CreateParagraph](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateParagraph.md)、[Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md)、[ApiDocument/Push](/docs/office-api/usage-api/text-document-api/ApiDocument/Methods/Push.md)、[ApiDocumentContent/GetElement](/docs/office-api/usage-api/text-document-api/ApiDocumentContent/Methods/GetElement.md)、[ApiParagraph/AddText](/docs/office-api/usage-api/text-document-api/ApiParagraph/Methods/AddText.md)、[ApiTable/GetRow](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetRow.md)、[ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)、[ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)）；
- 设置表格样式（[ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md)、[ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md)、[ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md)、[ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md)、[ApiTable/SetWidth](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetWidth.md)、[ApiTableRow/SetBackgroundColor](/docs/office-api/usage-api/text-document-api/ApiTableRow/Methods/SetBackgroundColor.md)）；
- 创建文本和图片表单并添加到表格中（[Api/CreatePictureForm](/docs/office-api/usage-api/form-api/Api/Methods/CreatePictureForm.md)、[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)）。

:::tip
此示例也适用于 **Document Builder**。
下载示例并在 [Document Builder 示例](/docs/document-builder/samples/samples.md) 页面获取更多信息。
:::

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 表单创建辅助函数
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

// 创建文档标题
let paragraph = doc.GetElement(0);
paragraph.AddText("采购订单表");
paragraph.SetFontSize(20 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 表头信息表格
let headerTable = createFullWidthTable(3, 3, 100, 50);

// 第1行：订单编号和日期
paragraph = getTableCellParagraph(headerTable, 0, 0, 2000);
addTextToParagraph(paragraph, "订单编号：", 12 * 2, true, "left");
paragraph = getTableCellParagraph(headerTable, 0, 1, 2000);
addTextFormToParagraph(paragraph, 12 * 2, "po_number", "输入订单编号", 15, "left", true, true, true);
paragraph = getTableCellParagraph(headerTable, 0, 2, 2000);
addTextToParagraph(paragraph, "日期：", 12 * 2, true, "left");

// 第2行：序列号和日期字段
paragraph = getTableCellParagraph(headerTable, 1, 0);
addTextToParagraph(paragraph, "序列号：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(headerTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "serial_number", "序列号", 10, "left", true, true, false);
paragraph = getTableCellParagraph(headerTable, 1, 2);
addTextFormToParagraph(paragraph, 12 * 2, "order_date", "DD.MM.YYYY", 10, "left", true, true, true);

// 第3行：优先级和状态
paragraph = getTableCellParagraph(headerTable, 2, 0);
addTextToParagraph(paragraph, "优先级：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(headerTable, 2, 1);
addComboBoxToParagraph(paragraph, 12 * 2, "priority", "选择优先级", ["低", "中", "高", "紧急"], "left");
paragraph = getTableCellParagraph(headerTable, 2, 2);
addTextToParagraph(paragraph, "状态：草稿", 12 * 2, false, "left");

doc.Push(headerTable);

// 公司徽标部分
paragraph = Api.CreateParagraph();
paragraph.AddText("公司徽标：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
let pictureForm = Api.CreatePictureForm({
  key: "company_logo",
  tip: "上传公司徽标",
  required: false,
  placeholder: "点击上传徽标",
  scaleFlag: "tooBig",
  lockAspectRatio: true,
  respectBorders: false,
});
paragraph.AddElement(pictureForm);
doc.Push(paragraph);

// 供应商信息部分
paragraph = Api.CreateParagraph();
paragraph.AddText("供应商信息：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let vendorTable = createFullWidthTable(3, 2, 150, 50);

// 供应商详情
paragraph = getTableCellParagraph(vendorTable, 0, 0);
addTextToParagraph(paragraph, "公司名称：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_company", "公司名称", 50, "left", false, false, true);

paragraph = getTableCellParagraph(vendorTable, 1, 0);
addTextToParagraph(paragraph, "联系人：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_contact", "联系人姓名", 40, "left", false, false, false);

paragraph = getTableCellParagraph(vendorTable, 2, 0);
addTextToParagraph(paragraph, "电子邮箱：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(vendorTable, 2, 1);
addTextFormToParagraph(paragraph, 12 * 2, "vendor_email", "email@company.com", 50, "left", false, false, false);

doc.Push(vendorTable);

// 配送信息
paragraph = Api.CreateParagraph();
paragraph.AddText("配送信息：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let shippingTable = createFullWidthTable(2, 2, 150, 50);

paragraph = getTableCellParagraph(shippingTable, 0, 0);
addTextToParagraph(paragraph, "收货地址：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(shippingTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "ship_to_address", "配送地址", 60, "left", false, false, true);

paragraph = getTableCellParagraph(shippingTable, 1, 0);
addTextToParagraph(paragraph, "配送方式：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(shippingTable, 1, 1);
addComboBoxToParagraph(paragraph, 12 * 2, "delivery_method", "选择方式", ["标准配送", "快递", "次日达", "自提"], "left");

doc.Push(shippingTable);

// 订单项目表格
paragraph = Api.CreateParagraph();
paragraph.AddText("订单项目：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let itemsTable = createFullWidthTable(8, 5, 100, 50);
itemsTable.GetRow(0).SetBackgroundColor(230, 230, 230, false);

// 表头行
let headerCells = ["项目 #", "描述", "数量", "单价", "合计"];
let cellWidths = [800, 3000, 800, 1200, 1200];

for (let i = 0; i < headerCells.length; i++) {
  paragraph = getTableCellParagraph(itemsTable, 0, i, cellWidths[i]);
  addTextToParagraph(paragraph, headerCells[i], 12 * 2, true, "center");
}

// 数据行
for (let i = 1; i < 8; i++) {
  paragraph = getTableCellParagraph(itemsTable, i, 0);
  addTextFormToParagraph(paragraph, 10 * 2, `item_${i}`, `${i}`, 5, "center", true, false, false);

  paragraph = getTableCellParagraph(itemsTable, i, 1);
  addTextFormToParagraph(paragraph, 10 * 2, `description_${i}`, "项目描述", 40, "left", false, false, false);

  paragraph = getTableCellParagraph(itemsTable, i, 2);
  addTextFormToParagraph(paragraph, 10 * 2, `qty_${i}`, "0", 5, "center", true, false, false);

  paragraph = getTableCellParagraph(itemsTable, i, 3);
  addTextFormToParagraph(paragraph, 10 * 2, `price_${i}`, "¥0.00", 10, "right", false, false, false);

  paragraph = getTableCellParagraph(itemsTable, i, 4);
  addTextFormToParagraph(paragraph, 10 * 2, `total_${i}`, "¥0.00", 10, "right", false, false, false);
}

doc.Push(itemsTable);

// 条款和条件
paragraph = Api.CreateParagraph();
paragraph.AddText("条款和条件：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_net30", "30天账期付款条款", false);
paragraph.AddText(" 30天账期付款条款");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_fob", "目的地交货", false);
paragraph.AddText(" 目的地交货");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

paragraph = Api.CreateParagraph();
addCheckBoxToParagraph(paragraph, 12 * 2, "terms_warranty", "适用标准保修", true);
paragraph.AddText(" 适用标准保修");
paragraph.SetFontSize(12 * 2);
doc.Push(paragraph);

// 审批部分
paragraph = Api.CreateParagraph();
paragraph.AddText("审批：");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
doc.Push(paragraph);

let approvalTable = createFullWidthTable(2, 3, 150, 50);

paragraph = getTableCellParagraph(approvalTable, 0, 0);
addTextToParagraph(paragraph, "申请人：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(approvalTable, 0, 1);
addTextFormToParagraph(paragraph, 12 * 2, "requested_by", "姓名", 30, "left", false, false, true);
paragraph = getTableCellParagraph(approvalTable, 0, 2);
addTextToParagraph(paragraph, "日期：", 12 * 2, false, "left");

paragraph = getTableCellParagraph(approvalTable, 1, 0);
addTextToParagraph(paragraph, "审批人：", 12 * 2, false, "left");
paragraph = getTableCellParagraph(approvalTable, 1, 1);
addTextFormToParagraph(paragraph, 12 * 2, "approved_by", "经理姓名", 30, "left", false, false, false);
paragraph = getTableCellParagraph(approvalTable, 1, 2);
addTextFormToParagraph(paragraph, 12 * 2, "approval_date", "DD.MM.YYYY", 10, "left", true, true, false);

doc.Push(approvalTable);
```
