---
hide_table_of_contents: true
---

# 创建员工入职清单

创建带有文档跟踪功能的员工入职清单表单：

- 为员工信息创建文本字段（[Api/CreateTextForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateTextForm.md)、[Api/CreateComboBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateComboBoxForm.md)）；
- 创建用于跟踪已签署文档的复选框表格（[Api/CreateCheckBoxForm](/docs/office-api/usage-api/form-api/Api/Methods/CreateCheckBoxForm.md)、[Api/CreateTable](/docs/office-api/usage-api/text-document-api/Api/Methods/CreateTable.md)）；
- 使用自定义边框样式化表格（[ApiTable/SetTableBorderTop](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderTop.md)、[ApiTable/SetTableBorderBottom](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderBottom.md)、[ApiTable/SetTableBorderLeft](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderLeft.md)、[ApiTable/SetTableBorderRight](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/SetTableBorderRight.md)）；
- 使用实用函数实现一致的表单创建（[ApiTable/GetCell](/docs/office-api/usage-api/text-document-api/ApiTable/Methods/GetCell.md)、[ApiTableCell/GetContent](/docs/office-api/usage-api/text-document-api/ApiTableCell/Methods/GetContent.md)）。

```ts editor-pdf zoom=60
let doc = Api.GetDocument();

// 表单创建实用函数
function createTextForm(key, placeholder, maxCharacters, required) {
  return Api.CreateTextForm({
    key,
    required: required || false,
    placeholder,
    maxCharacters,
    multiLine: false,
    autoFit: true,
  });
}

function createComboBox(key, placeholder, items, required) {
  return Api.CreateComboBoxForm({
    key,
    required: required || false,
    placeholder,
    editable: false,
    autoFit: true,
    items,
  });
}

function createCheckBox(key, tip, checked) {
  return Api.CreateCheckBoxForm({
    key,
    required: false,
    tip,
    checked: checked || false,
  });
}

function setBorders(table, r, g, b) {
  table.SetTableBorderTop("single", 4, 0, r, g, b);
  table.SetTableBorderBottom("single", 4, 0, r, g, b);
  table.SetTableBorderLeft("single", 4, 0, r, g, b);
  table.SetTableBorderRight("single", 4, 0, r, g, b);
  table.SetTableBorderInsideV("single", 4, 0, r, g, b);
  table.SetTableBorderInsideH("single", 4, 0, r, g, b);
}

function createTable(rows, cols, borderR, borderG, borderB) {
  let table = Api.CreateTable(cols, rows);
  table.SetWidth("percent", 100);
  setBorders(table, borderR, borderG, borderB);
  table.SetTableCellMarginTop(50);
  return table;
}

function getCellParagraph(table, row, col, width) {
  let cell = table.GetCell(row, col);
  if (width) {
    cell.SetWidth("twips", width);
  }
  return cell.GetContent().GetElement(0);
}

function addText(paragraph, text, fontSize, isBold, jc) {
  paragraph.AddText(text);
  paragraph.SetFontSize(fontSize);
  paragraph.SetBold(isBold);
  if (jc) {
    paragraph.SetJc(jc);
  }
}

// 文档标题
let paragraph = doc.GetElement(0);
paragraph.AddText("员工入职清单");
paragraph.SetFontSize(22 * 2);
paragraph.SetBold(true);
paragraph.SetJc("center");

// 副标题
paragraph = Api.CreateParagraph();
paragraph.AddText("新员工文档与入职培训跟踪");
paragraph.SetFontSize(12 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
doc.Push(paragraph);

// 员工信息部分
paragraph = Api.CreateParagraph();
paragraph.AddText("员工信息");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let infoTable = createTable(4, 4, 100, 100, 100);
infoTable.GetRow(0).SetBackgroundColor(240, 240, 240, false);

// 第0行：表头
paragraph = getCellParagraph(infoTable, 0, 0, 1500);
addText(paragraph, "字段", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 1, 3000);
addText(paragraph, "值", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 2, 1500);
addText(paragraph, "字段", 11 * 2, true, "center");
paragraph = getCellParagraph(infoTable, 0, 3, 3000);
addText(paragraph, "值", 11 * 2, true, "center");

// 第1行：姓名和员工编号
paragraph = getCellParagraph(infoTable, 1, 0);
addText(paragraph, "全名：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 1, 1);
paragraph.AddElement(createTextForm("employee_name", "输入全名", 50, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 1, 2);
addText(paragraph, "员工编号：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 1, 3);
paragraph.AddElement(createTextForm("employee_id", "EMP-XXXX", 15, true));
paragraph.SetFontSize(11 * 2);

// 第2行：部门和职位
paragraph = getCellParagraph(infoTable, 2, 0);
addText(paragraph, "部门：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 2, 1);
paragraph.AddElement(createComboBox("department", "选择部门",
  ["人力资源", "工程部", "销售部", "市场部", "财务部", "运营部", "信息技术支持"], true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 2, 2);
addText(paragraph, "职位：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 2, 3);
paragraph.AddElement(createTextForm("position", "职位名称", 40, true));
paragraph.SetFontSize(11 * 2);

// 第3行：入职日期和主管
paragraph = getCellParagraph(infoTable, 3, 0);
addText(paragraph, "入职日期：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 3, 1);
paragraph.AddElement(createTextForm("start_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(infoTable, 3, 2);
addText(paragraph, "主管：", 11 * 2, false, "left");
paragraph = getCellParagraph(infoTable, 3, 3);
paragraph.AddElement(createTextForm("manager_name", "主管姓名", 40, false));
paragraph.SetFontSize(11 * 2);

doc.Push(infoTable);

// 必需文档部分
paragraph = Api.CreateParagraph();
paragraph.AddText("必需文档 - 已签署并收到");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let docsTable = createTable(9, 4, 50, 100, 150);
docsTable.GetRow(0).SetBackgroundColor(50, 100, 150, false);

// 表头行
paragraph = getCellParagraph(docsTable, 0, 0, 4000);
addText(paragraph, "文档", 11 * 2, true, "left");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 1, 1200);
addText(paragraph, "已签署", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 2, 1200);
addText(paragraph, "已收到", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(docsTable, 0, 3, 2000);
addText(paragraph, "日期", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);

// 文档行
let documents = [
  "劳动合同",
  "保密协议（NDA）",
  "税务表格",
  "银行转账授权书",
  "紧急联系人表格",
  "员工手册确认书",
  "信息安全政策协议",
  "福利登记表"
];

for (let i = 0; i < documents.length; i++) {
  let rowIndex = i + 1;

  // 交替行颜色
  if (i % 2 === 1) {
    docsTable.GetRow(rowIndex).SetBackgroundColor(245, 248, 250, false);
  }

  // 文档名称
  paragraph = getCellParagraph(docsTable, rowIndex, 0);
  addText(paragraph, documents[i], 10 * 2, false, "left");

  // 已签署复选框
  paragraph = getCellParagraph(docsTable, rowIndex, 1);
  paragraph.AddElement(createCheckBox(`doc_${i}_signed`, `标记 ${documents[i]} 已签署`, false));
  paragraph.SetJc("center");

  // 已收到复选框
  paragraph = getCellParagraph(docsTable, rowIndex, 2);
  paragraph.AddElement(createCheckBox(`doc_${i}_received`, `标记 ${documents[i]} 已收到`, false));
  paragraph.SetJc("center");

  // 日期字段
  paragraph = getCellParagraph(docsTable, rowIndex, 3);
  paragraph.AddElement(createTextForm(`doc_${i}_date`, "DD.MM.YYYY", 10, false));
  paragraph.SetFontSize(10 * 2);
  paragraph.SetJc("center");
}

doc.Push(docsTable);

// 入职培训清单部分
paragraph = Api.CreateParagraph();
paragraph.AddText("入职培训清单");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let orientationTable = createTable(8, 3, 100, 150, 50);
orientationTable.GetRow(0).SetBackgroundColor(100, 150, 50, false);

// 表头行
paragraph = getCellParagraph(orientationTable, 0, 0, 4500);
addText(paragraph, "任务", 11 * 2, true, "left");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(orientationTable, 0, 1, 1200);
addText(paragraph, "已完成", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);
paragraph = getCellParagraph(orientationTable, 0, 2, 2500);
addText(paragraph, "备注", 11 * 2, true, "center");
paragraph.SetColor(255, 255, 255);

// 入职培训任务
let orientationTasks = [
  "办公室参观和设施介绍",
  "工作站设置和设备发放",
  "IT系统访问权限和邮箱设置",
  "团队成员介绍",
  "公司政策和流程审阅",
  "安全和紧急程序培训",
  "初始培训计划安排"
];

for (let i = 0; i < orientationTasks.length; i++) {
  let rowIndex = i + 1;

  // 交替行颜色
  if (i % 2 === 1) {
    orientationTable.GetRow(rowIndex).SetBackgroundColor(248, 252, 245, false);
  }

  // 任务名称
  paragraph = getCellParagraph(orientationTable, rowIndex, 0);
  addText(paragraph, orientationTasks[i], 10 * 2, false, "left");

  // 已完成复选框
  paragraph = getCellParagraph(orientationTable, rowIndex, 1);
  paragraph.AddElement(createCheckBox(`orientation_${i}_done`, `标记"${orientationTasks[i]}"已完成`, false));
  paragraph.SetJc("center");

  // 备注字段
  paragraph = getCellParagraph(orientationTable, rowIndex, 2);
  paragraph.AddElement(createTextForm(`orientation_${i}_notes`, "添加备注", 50, false));
  paragraph.SetFontSize(10 * 2);
}

doc.Push(orientationTable);

// 签名部分
paragraph = Api.CreateParagraph();
paragraph.AddText("签名");
paragraph.SetFontSize(14 * 2);
paragraph.SetBold(true);
paragraph.SetSpacingBefore(300);
doc.Push(paragraph);

let signatureTable = createTable(2, 4, 80, 80, 80);

// 行标签和字段
paragraph = getCellParagraph(signatureTable, 0, 0, 1500);
addText(paragraph, "员工：", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 0, 1, 3500);
paragraph.AddElement(createTextForm("employee_signature", "员工签名", 40, true));
paragraph.SetFontSize(11 * 2);
paragraph = getCellParagraph(signatureTable, 0, 2, 800);
addText(paragraph, "日期：", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 0, 3, 2000);
paragraph.AddElement(createTextForm("employee_sign_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

paragraph = getCellParagraph(signatureTable, 1, 0);
addText(paragraph, "人力资源代表：", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 1, 1);
paragraph.AddElement(createTextForm("hr_signature", "HR签名", 40, true));
paragraph.SetFontSize(11 * 2);
paragraph = getCellParagraph(signatureTable, 1, 2);
addText(paragraph, "日期：", 11 * 2, true, "left");
paragraph = getCellParagraph(signatureTable, 1, 3);
paragraph.AddElement(createTextForm("hr_sign_date", "DD.MM.YYYY", 10, true));
paragraph.SetFontSize(11 * 2);

doc.Push(signatureTable);

// 页脚说明
paragraph = Api.CreateParagraph();
paragraph.AddText("此清单必须在入职第一周内完成。");
paragraph.SetFontSize(10 * 2);
paragraph.SetItalic(true);
paragraph.SetJc("center");
paragraph.SetSpacingBefore(200);
doc.Push(paragraph);
```
